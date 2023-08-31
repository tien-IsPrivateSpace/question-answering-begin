import request from "@/utils/request.js"

//首页问答接口
export function apiGetIndex(data) {
	return request.request({
		url: '/question',
		data
	})
}