"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "creations",
  setup(__props) {
    const keyboardHeight = common_vendor.ref(0);
    const bottomHeight = common_vendor.ref(0);
    const scrollTop = common_vendor.ref(0);
    common_vendor.ref("");
    const chatMsg = common_vendor.ref("");
    const msgList = common_vendor.ref([
      {
        botContent: "hello，请问我有什么可以帮助你的吗？",
        recordId: 0,
        titleId: 0,
        userContent: "",
        userId: 0
      },
      {
        botContent: "",
        recordId: 0,
        titleId: 0,
        userContent: "你好呀我想问你一件事",
        userId: 0
      }
    ]);
    const windowHeight = common_vendor.computed(() => rpxTopx(common_vendor.index.getSystemInfoSync().windowHeight));
    const inputHeight = common_vendor.computed(() => bottomHeight.value + keyboardHeight.value);
    function rpxTopx(px) {
      let deviceWidth = common_vendor.wx$1.getSystemInfoSync().windowWidth;
      let rpx = 750 / deviceWidth * Number(px);
      return Math.floor(rpx);
    }
    function focus() {
      scrollToBottom();
    }
    function blur() {
      scrollToBottom();
    }
    function sendHeight() {
      setTimeout(() => {
        let query = common_vendor.index.createSelectorQuery();
        query.select(".send-msg").boundingClientRect();
        query.exec((res) => {
          bottomHeight.value = rpxTopx(res[0].height);
        });
      }, 10);
    }
    function scrollToBottom(e) {
      setTimeout(() => {
        let query = common_vendor.index.createSelectorQuery();
        query.select("#scrollview").boundingClientRect();
        query.select("#msglistview").boundingClientRect();
        query.exec((res) => {
          console.log(res);
          if (res[1].height > res[0].height) {
            scrollTop.value = rpxTopx(res[1].height - res[0].height);
          }
        });
      }, 15);
    }
    function handleSend() {
      if (!chatMsg.value || !/^\s+$/.test(chatMsg.value)) {
        let obj = {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: chatMsg.value,
          userId: 0
        };
        msgList.value.push(obj);
        chatMsg.value = "";
        scrollToBottom();
      }
    }
    common_vendor.onLoad((option) => {
      common_vendor.index.onKeyboardHeightChange((res) => {
        keyboardHeight.value = rpxTopx(res.height - 30);
        if (keyboardHeight.value < 0) {
          keyboardHeight.value = 0;
        }
      });
    });
    common_vendor.onUnload(() => {
      common_vendor.index.offKeyboardHeightChange();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(msgList.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.userContent != ""
          }, item.userContent != "" ? {
            b: common_vendor.t(item.userContent)
          } : {}, {
            c: item.botContent != ""
          }, item.botContent != "" ? {
            d: common_vendor.t(item.botContent)
          } : {}, {
            e: index
          });
        }),
        b: `${common_vendor.unref(windowHeight) - common_vendor.unref(inputHeight)}rpx`,
        c: scrollTop.value,
        d: common_vendor.o(handleSend),
        e: common_vendor.o(sendHeight),
        f: common_vendor.o(focus),
        g: common_vendor.o(blur),
        h: chatMsg.value,
        i: common_vendor.o(($event) => chatMsg.value = $event.detail.value),
        j: common_vendor.o(handleSend),
        k: `${keyboardHeight.value}rpx`,
        l: `${common_vendor.unref(inputHeight)}rpx`
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-210e2343"], ["__file", "C:/Users/81910/Desktop/code/js_code/question-answering-begin/pages/creations/creations.vue"]]);
wx.createPage(MiniProgramPage);
