"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/creations/creations.js";
  "./pages/index/index.js";
  "./pages/periphery/periphery.js";
  "./pages/mine/mine.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch!");
    });
    common_vendor.onShow(() => {
      console.log("App Show!");
    });
    common_vendor.onHide(() => {
      console.log("App Hide!");
    });
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/81910/Desktop/code/js_code/question-answering-begin/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
