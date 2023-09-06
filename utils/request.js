/**
 * 请求组件封装
 * @param {Object} url            请求地址  /banner
 * @param {Object} data            请求参数
 * @param {Object} method        请求的方法
 * @param {Object} contentType    请求内容类型
 */
function request({url, data, method = "GET", contentType = 1}) {
    let header = {
        'content-type': contentType === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
    }
    //请求域名
    let baseUrl = "http://localhost:8000";
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + url,
            data,
            method,
            header,
            success: (res) => {
                if (res.code == 200) {
                    resolve(res.data)
                } else if (res.code == 400) {
                    uni.showToast({
                        icon: 'none',
                        title: "请求错误",
                        duration: 1500
                    })
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: "未知错误" + res.code,
                        duration: 1500
                    })
                }
            },
            fail: (err) => {
                console.log("err:", err)
                uni.showToast({
                    icon: 'none',
                    title: err.errMsg,
                    duration: 1500
                })
                reject(err)
            }
        })
    })
}

export default {
    request
}