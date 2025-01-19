/*
 * Â©2016 Quicken Loans Inc. All rights reserved.
 */


/* global jQuery FormData FileReader */
(function ($) {
    $.fn.uploader = function (options, testMode) {
        return this.each(function (index) {
            options = $.extend({
                submitButtonCopy: '上传选定的文件',
                instructionsCopy: '支持拖放',
                furtherInstructionsCopy: '你也可以删除文件',
                selectButtonCopy: '选择文件',
                secondarySelectButtonCopy: '选择多个文件',
                dropZone: $(document.querySelector("body")),
                fileTypeWhiteList: ['jpg', 'png', 'jpeg', 'gif', 'bmp'],
                badFileTypeMessage: '对不起，我们不能接受这种类型的文件。',
                ajaxUrl: '/ajax/upload',
                testMode: false
            }, options);

            let state = {
                fileBatch: [],
                isUploading: false,
                isOverLimit: false,
                listIndex: 0
            };

            // create DOM elements
            let dom = {
                uploaderBox: $(this),
                submitButton: $('<button class="js-uploader__submit-button uploader__submit-button uploader__hide">' +
                    options.submitButtonCopy + '<i class="js-uploader__icon fa fa-upload uploader__icon"></i></button>'),
                instructions: $('<p class="js-uploader__instructions uploader__instructions">' +
                    options.instructionsCopy + '</p>'),
                selectButton: $('<input style="height: 0; width: 0;" id="fileinput' + index + '" type="file" multiple class="js-uploader__file-input uploader__file-input">' +
                    '<label for="fileinput' + index + '" style="cursor: pointer;" class="js-uploader__file-label uploader__file-label">' +
                    options.selectButtonCopy + '</label>'),
                secondarySelectButton: $('<input style="height: 0; width: 0;" id="secondaryfileinput' + index + '" type="file"' +
                    ' multiple class="js-uploader__file-input uploader__file-input">' +
                    '<label for="secondaryfileinput' + index + '" style="cursor: pointer;" class="js-uploader__file-label uploader__file-label uploader__file-label--secondary">' +
                    options.secondarySelectButtonCopy + '</label>'),
                fileList: $('<ul class="js-uploader__file-list uploader__file-list"></ul>'),
                contentsContainer: $('<div class="js-uploader__contents uploader__contents"></div>'),
                furtherInstructions: $('<p class="js-uploader__further-instructions uploader__further-instructions uploader__hide">' + options.furtherInstructionsCopy + '</p>')
            };

            // empty out whatever is in there
            dom.uploaderBox.empty();

            // create and attach UI elements
            setupDOM(dom);

            // set up event handling
            bindUIEvents();

            function setupDOM(dom) {
                dom.contentsContainer
                    .append(dom.instructions)
                    .append(dom.selectButton);
                dom.furtherInstructions
                    .append(dom.secondarySelectButton);
                dom.uploaderBox
                    .append(dom.fileList)
                    .append(dom.contentsContainer)
                    .append(dom.submitButton)
                    .after(dom.furtherInstructions);
            }

            function parseElement(htmlString) {
                return new DOMParser().parseFromString(htmlString, 'text/html').body.firstChild;
            }

            function bindUIEvents() {
                // handle drag and drop
                const dropzone = parseElement(`<div id="dropzone" style="box-sizing: border-box; display: none; position: fixed; width: 100%; height: 100%; left: 0; top: 0; z-index: 99999; background: #F6F1F1; border: 8px dashed #60a7dc;"><h3 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;">拖拽到这里添加图片</h3></div>`)
                document.body.append(dropzone)

                function showDropZone() {
                    // 显示拖拽区域的时候隐藏滚动条
                    document.body.style.overflow = "hidden"
                    dropzone.style.display = "block"
                }

                function hideDropZone() {
                    // 隐藏拖拽区域的时候恢复滚动条
                    document.body.style.overflow = "auto"
                    dropzone.style.display = "none"
                }

                //阻止当前页面元素的拖动
                let drapOnSelf = false
                window.addEventListener('dragstart', function (e) {
                    drapOnSelf = true
                })
                window.addEventListener('dragend', function (e) {
                    drapOnSelf = false;
                })

                let drageEventTarget = ""
                window.addEventListener('dragenter', function (e) {
                    drageEventTarget = e.target;
                    if (!drapOnSelf) {
                        showDropZone()
                    }
                });

                window.addEventListener('dragleave', function (e) {
                    if (e.target == drageEventTarget) {
                        hideDropZone()
                    }
                });
                dropzone.addEventListener('dragover', (e) => {
                    e.dataTransfer.dropEffect = 'copy';
                    e.preventDefault();
                });
                dropzone.addEventListener('drop', function (e) {
                    hideDropZone()
                    selectFilesHandler(e)
                });

                // hack for being able selecting the same file name twice
                dom.selectButton.on('click', function () { this.value = null; })
                dom.selectButton.on('change', selectFilesHandler)
                dom.secondarySelectButton.on('click', function () { this.value = null; })
                dom.secondarySelectButton.on('change', selectFilesHandler)

                // handle clipboard paste
                document.addEventListener('paste', selectFilesHandler)

                // handle the submit click
                dom.submitButton.on('click', uploadSubmitHandler)

                // remove link handler
                dom.uploaderBox.on('click', '.js-upload-remove-button', removeItemHandler)


                // expose handlers for testing
                if (options.testMode) {
                    options.dropZone.on('uploaderTestEvent', function (e) {
                        switch (e.functionName) {
                            case 'selectFilesHandler':
                                selectFilesHandler(e)
                                break;
                            case 'uploadSubmitHandler':
                                uploadSubmitHandler(e);
                                break;
                            default:
                                break;
                        }
                    });
                }
            }

            function addItem(file) {
                let fileName = cleanName(file.name);
                let fileSize = file.size;
                let id = state.listIndex;
                let sizeWrapper;
                let fileNameWrapper = $(`<span class="uploader__file-list__text"><span style="word-break: break-all; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; text-overflow: ellipsis;" contentEditable="plaintext-only">${fileName}</span></span>`);

                state.listIndex++;

                let listItem = $('<li class="uploader__file-list__item" data-index="' + id + '"></li>');
                let thumbnailContainer = $('<span class="uploader__file-list__thumbnail"></span>');
                let thumbnail = $('<img class="thumbnail"><i class="fa fa-spinner fa-spin uploader__icon--spinner"></i>');
                let removeLink = $('<span class="uploader__file-list__button"><button class="uploader__icon-button js-upload-remove-button fa fa-times" data-index="' + id + '"><svg t="1635091887036" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5315" width="24" height="24"><path d="M790.24 281.76l1.248 604.192c0 31.712-13.088 48.672-44.896 48.672l-461.504-1.28c-31.776 0-45.792-14.496-45.792-46.144l0-605.44-71.52 0 0 605.728c0 63.552 51.712 115.2 115.232 115.2l460.8 0c63.552 0 115.232-51.68 115.232-115.2l0-605.728-68.864 0zM335.744 411.392l0 428.928c0 2.784 0.416 5.472 1.12 8.032 21.088 0 42.208-0.032 63.328-0.192 0.672-2.464 1.088-5.152 1.088-7.84l0-428.736c-21.856-0.096-43.68-0.16-65.536-0.192l0 0zM624.992 412.928l0 427.424c0 2.208 0.256 4.384 0.704 6.496 21.344-0.128 42.72-0.16 64.032-0.224 0.448-2.048 0.672-4.096 0.672-6.336l0-427.168c-21.792-0.032-43.616-0.096-65.408-0.192l0 0zM978.912 165.664l-255.904 0 0-72.192c1.12-58.112-46.752-72.128-94.528-72.128l-229.952 0c-59.36 0-93.216 22.304-93.216 70.112l-0.256 74.208-259.968 0 0 70.496 933.792 0 0-70.496 0.032 0zM657.504 165.664l-288.032 0 0-50.496c0-16 11.296-29.92 27.296-29.92l230.432 1.248c16 0 30.08 11.488 30.08 27.488l0.224 51.68zM482.688 412.96l0 427.36c0 2.208 0.256 4.416 0.704 6.496 21.152-0.096 42.304-0.16 63.456-0.16 0.448-2.08 0.672-4.096 0.672-6.336l0-427.168c-21.632-0.032-43.232-0.096-64.864-0.192l0 0z" p-id="5316"></path></svg></button></span>');
                let progress = $('<span class="uploader__file-list__thumbnail progress"></span>');
                let link = $('<span class="uploader__file-list__thumbnail link"></span>');
                let copy = $('<span class="uploader__file-list__thumbnail copy"></span>');

                const processFile = async () => {
                    let result = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = function () {
                            thumbnail.attr('src', reader.result);
                            thumbnail.parent().find('i').remove();
                            const formatMap = {
                                '/9j/': 'jpg',
                                'R0lGO': 'gif',
                                'iVBORw': 'png',
                                'Qk': 'bmp'
                            }
                            let base64Str = reader.result.split(",")[1];
                            let format_key = Object.keys(formatMap).find(item => base64Str.startsWith(item))
                            const format = formatMap[format_key];
                            if (!format) {
                                console.log('只支持上传JPG、PNG、BMP或GIF图片');
                                resolve({ 'error': '只支持上传JPG、PNG、BMP或GIF图片' })
                                return
                            }
                            resolve({ 'base64': reader.result, 'format': format })
                        };
                        reader.onerror = function () {
                            thumbnail.remove()
                            resolve({ 'error': '图片读取出错了' })
                        };
                        reader.readAsDataURL(file)
                    })
                    let error = result['error']
                    if (!error) {
                        // file is ok, add it to the batch
                        state.fileBatch.push({ file: file, id: id, fileName: fileName, fileSize: fileSize, base64: result['base64'], format: result['format'] })
                        sizeWrapper = $('<span class="uploader__file-list__size">' + formatBytes(fileSize) + '</span>')
                    } else {
                        // file is not ok, only add it to the dom
                        sizeWrapper = $('<span class="uploader__file-list__size"><span class="uploader__error">' + error + '</span></span>')
                    }
                    thumbnailContainer.append(thumbnail);
                    listItem.append(thumbnailContainer);

                    listItem
                        .append(fileNameWrapper)
                        .append(sizeWrapper)
                        .append(progress)
                        .append(link)
                        .append(copy)
                        .append(removeLink);
                    dom.fileList.append(listItem);
                    renderControls()
                }
                processFile()
            }

            function getExtension(path) {
                let basename = path.split(/[\\/]/).pop()
                let pos = basename.lastIndexOf('.')

                if (basename === '' || pos < 1) {
                    return ''
                }
                return basename.slice(pos + 1)
            }

            function formatBytes(bytes, decimals) {
                if (bytes === 0) return '0 Bytes'
                let k = 1024
                let dm = decimals + 1 || 3
                let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                let i = Math.floor(Math.log(bytes) / Math.log(k))
                return (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i]
            }

            function cleanName(name) {
                return name;
                //                 name = name.replace(/\s+/gi, '-'); // Replace white space with dash
                //                 return name.replace(/[^a-zA-Z0-9.\-]/gi, ''); // Strip any special characters
            }

            function uploadSubmitHandler() {
                if (options.uploadFiles) {
                    const preparedFiles = state.fileBatch.filter(file => {
                        const canUpload = !["finished", "uploading", "waiting"].includes(file["status"]) && file['base64']
                        if (canUpload) {
                            file['status'] = 'waiting'
                        }
                        return canUpload
                    })
                    options.uploadFiles(preparedFiles)
                    return
                }
                if (state.fileBatch.length !== 0) {
                    let data = new FormData();
                    for (let i = 0; i < state.fileBatch.length; i++) {
                        data.append('files[]', state.fileBatch[i].file, state.fileBatch[i].fileName);
                    }
                    $.ajax({
                        type: 'POST',
                        url: options.ajaxUrl,
                        data: data,
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }
            }

            function selectFilesHandler(e) {
                e.preventDefault();
                e.stopPropagation();

                if (!state.isUploading) {
                    // files come from the input or a drop or clipboardData
                    const filelist = e.target?.files || e.dataTransfer?.files || e.dataTransfer?.getData || e.clipboardData?.files;
                    const illegalFiles = []
                    for (let i = 0; i < filelist.length; i++) {
                        const file = filelist[i]
                        if (['image/jpeg', 'image/png', 'image/gif', 'image/bmp'].includes(file.type)) {
                            addItem(file)
                        } else {
                            illegalFiles.push(file)
                        }
                    }
                    if (illegalFiles.length > 0 && typeof options.illegalFiles === "function") {
                        options.illegalFiles(illegalFiles)
                    }
                }
                renderControls();
            }

            function renderControls() {
                if (dom.fileList.children().size() !== 0) {
                    dom.submitButton.removeClass('uploader__hide');
                    dom.furtherInstructions.removeClass('uploader__hide');
                    dom.contentsContainer.addClass('uploader__hide');
                } else {
                    dom.submitButton.addClass('uploader__hide');
                    dom.furtherInstructions.addClass('uploader__hide');
                    dom.contentsContainer.removeClass('uploader__hide');
                }
            }

            function removeItemHandler(e) {
                e.preventDefault()

                if (!state.isUploading) {
                    let target = e.target
                    while (target && target.tagName.toLowerCase() != 'li') {
                        target = target.parentNode
                    }
                    let removeIndex = $(target).data('index')
                    removeItem(removeIndex)
                    $(target).remove()
                }

                renderControls();
            }

            function removeItem(id) {
                // remove from the batch
                for (let i = 0; i < state.fileBatch.length; i++) {
                    if (state.fileBatch[i].id === parseInt(id)) {
                        state.fileBatch.splice(i, 1);
                        break;
                    }
                }
                // remove from the DOM
                dom.fileList.find('li[data-index="' + id + '"]').remove()
            }
        });
    };
}(jQuery));
