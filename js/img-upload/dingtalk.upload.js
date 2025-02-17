async function dingtalkImageUpload(file, callback, progressCallback, errorCallback) {
    function strFromB64(data) {
        const decodedData = atob(data)
        const utf8data = new Uint8Array(decodedData.length)
        for (let i = 0; i < decodedData.length; i++) {
            utf8data[i] = decodedData.charCodeAt(i)
        }
        const decoder = new TextDecoder("utf-8")
        return decoder.decode(utf8data)
    }

    const emitSuccess = (mediaId) => {
        if (typeof callback === "function") {
            callback(mediaId)
        }
    }
    const emitProgress = (progress) => {
        if (typeof progressCallback === "function") {
            progressCallback(progress)
        }
    }

    const emitError = (error) => {
        if (typeof errorCallback === "function") {
            errorCallback(error)
        }
    }

    let accessToken = ''
    try {
        const url = strFromB64(`aHR0cHM6Ly9vYXBpLmRpbmd0YWxrLmNvbS9nZXR0b2tlbj9hcHBrZXk9ZGluZzh2cGl2ZHdiYnI5M3FudG4mYXBwc2VjcmV0PXQxakhxRzZOUzF3bkFnbm5nVHFuTW8wbUxUbUJUVkFJWXZ3Zm5nYXJ2SGZVV0Jld29zMDE4UDdnWTMyMmlqZkk=`)
        const resp = await axios.get(url)
        const respData = resp.data
        if (respData.errcode !== 0) {
            throw new Error(respData.errmsg)
        }
        accessToken = respData.access_token
    } catch (error) {
        emitError(`${error}`)
        return
    }

    const formData = new FormData()
    formData.append('media', file)
    formData.append('type', "image")

    const config = {
        onUploadProgress: function (progressEvent) {
            const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            )
            emitProgress(Math.min(99, percentCompleted))
        }
    }

    try {
        const prefix = strFromB64('aHR0cHM6Ly9vYXBpLmRpbmd0YWxrLmNvbS9tZWRpYS91cGxvYWQ/YWNjZXNzX3Rva2VuPQ==')
        const url = `${prefix}${accessToken}`
        const resp = await axios.post(url, formData, config)
        const respData = resp.data
        if (respData.errcode !== 0) {
            throw new Error(respData.errmsg)
        }
        emitProgress(100)
        emitSuccess(respData.media_id)
    } catch (error) {
        emitError(`${error}`)
        return
    }
}
