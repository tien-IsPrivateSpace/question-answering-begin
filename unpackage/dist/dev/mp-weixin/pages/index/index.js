"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const mockData = [
      {
        id: 1,
        title: "对话1",
        count: 2,
        time: "2023-08-30 22:33"
      },
      {
        id: 2,
        title: "对话2",
        count: 3,
        time: "2023-08-30 23:44"
      }
    ];
    function handleClick(item) {
      console.log(item);
    }
    common_vendor.onLoad((option) => {
      console.log("creations load");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(mockData, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.count),
            c: common_vendor.t(item.time),
            d: common_vendor.o(($event) => handleClick(item), item.id),
            e: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/81910/Desktop/code/js_code/question-answering-begin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
