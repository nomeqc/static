function DingtalkImageUploader(imgBase64, callback, progressCallback, errorCallback) {
	const util = {
		i: 0,
		genmid() {
			let r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
			let e = Math.floor(Math.random() * Math.pow(2, 16)),
				t = this.i++,
				n = ""
			return (
				(n += r[(e >> 12) & 15]),
				(n += r[(e >> 8) & 15]),
				(n += r[(e >> 4) & 15]),
				(n += r[15 & e]),
				(n += r[(t >> 12) & 15]),
				(n += r[(t >> 8) & 15]),
				(n += r[(t >> 4) & 15]),
				(n += r[15 & t])
			)
		},
	}

	this.upload = function () {
		const socket = new WebSocket("wss://webalfa.dingtalk.com/lwp")
		// 打开socket
		socket.onopen = (event) => {
			const prepare = function () {
				return new Promise((resolve, reject) => {
					// console.log("pre")
					const mid = util.genmid()
					const data = `{"lwp":"/up/pre","headers":{"dt":"j","up-req":"-1;-1;0;flag=hd&mi&ori;bizType=im;","up-ver":"2;1","net-type":"wifi","mid":"${mid} 0"},"body":null}`
					// 发送一个初始化消息
					socket.send(data)
					// 服务器有响应数据触发
					socket.onmessage = (event) => {
						const data = JSON.parse(event.data)
						if (`${data["code"]}` !== "200") {
							reject("出错了：" + event.data)
							socket.close(1000, "Normal Closure")
							return
						}
						const up_resp = data["headers"]["up-resp"].split("&")[0]
						resolve(up_resp)
					}
					// 出错时触发，并且会关闭连接。这时可以根据错误信息进行按需处理
					socket.onerror = (event) => {
						console.log("error")
						reject("socket error")
					}
				})
			}

			const uploadData = function ({ upResp, frag, fragCount, index }) {
				return new Promise((resolve, reject) => {
					// console.log("index:" + index)
					const mid = util.genmid()
					const actionUri = index < fragCount - 1 ? "/up/frag" : "/up/ci"
					const data = `{"lwp":"${actionUri}","headers":{"dt":"b","up-req":"${upResp};${index};0;flag=hd&mi&ori;bizType=im;","net-type":"wifi","up-ver":"2;1","mid":"${mid} 0"},"body":"${frag}"}`
					// 发送一个初始化消息
					socket.send(data)
					// 服务器有响应数据触发
					socket.onmessage = (event) => {
						const data = JSON.parse(event.data)
						if (data["code"] != "200") {
							reject("出错了：" + event.data)
							socket.close(1000, "Normal Closure")
							return
						}
						progressCallback(parseFloat(((index + 1) / fragCount).toFixed(2)))
						if (actionUri == "/up/ci") {
							const uri = data["body"]["uri"].replace("@", "")
							callback(uri)
							socket.close(1000, "Normal Closure")
						}
						resolve()
					}
					// 出错时触发，并且会关闭连接。这时可以根据错误信息进行按需处理
					socket.onerror = (event) => {
						console.log("error")
						reject("socket error")
					}
				})
			}
			const upload = async function () {
				try {
					const frags = []
					const fragSize = Math.min(200 * 1000, imgBase64.length)
					let offset = 0
					while (offset < imgBase64.length) {
						const frag = imgBase64.slice(offset, offset + fragSize)
						frags.push(frag)
						offset += frag.length
					}
					const upResp = await prepare()
					const fragCount = frags.length
					for (const [index, frag] of frags.entries()) {
						await uploadData({ upResp, frag, fragCount, index })
					}
				} catch (error) {
					console.error(error)
					errorCallback(error)
				}
			}
			upload()
		}
	}
}
