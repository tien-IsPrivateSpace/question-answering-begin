"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function test() {
      const requestTask = common_vendor.index.request({
        url: "http://n4mt5q.natappfree.cc/question",
        timeout: 15e3,
        responseType: "text",
        method: "POST",
        enableChunked: true,
        data: {
          question: "how are you?"
        },
        success: (response) => {
          console.log(response);
        },
        fail: (error) => {
        }
      });
      requestTask.onHeadersReceived(function(res) {
        console.log(res);
      });
      requestTask.onChunkReceived(function(res) {
        console.log(res);
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(test)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/huamo/project/DisplayProject/qa/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
