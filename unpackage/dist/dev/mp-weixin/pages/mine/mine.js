"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.f(50, (item, k0, i0) => {
      return {
        a: common_vendor.t(item)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c2ebfa5"], ["__file", "/Users/huamo/project/DisplayProject/qa/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
