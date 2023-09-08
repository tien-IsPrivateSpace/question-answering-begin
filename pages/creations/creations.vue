<template>
  <view class="chat">
    <scroll-view
      :style="{ height: `${windowHeight - inputHeight}rpx` }"
      id="scrollview"
      scroll-y="true"
      :scroll-top="scrollTop"
      class="scroll-view"
    >
      <!-- 聊天主体 -->
      <view id="msglistview" class="chat-body">
        <!-- 聊天记录 -->
        <view v-for="(item, index) in msgList" :key="index">
          <!-- 自己发的消息 -->
          <view class="item self" v-if="item.userContent != ''">
            <!-- 文字内容 -->
            <view class="content right">
              {{ item.userContent }}
            </view>
            <!-- 头像 -->
            <view class="avatar"> </view>
          </view>
          <!-- 机器人发的消息 -->
          <view class="item Ai" v-if="item.botContent != ''">
            <!-- 头像 -->
            <view class="avatar"> </view>
            <!-- 文字内容 -->
            <view class="content left">
              {{ item.botContent }}
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- 底部消息发送栏 -->
    <!-- 用来占位，防止聊天消息被发送框遮挡 -->
    <view class="chat-bottom" :style="{ height: `${inputHeight}rpx` }">
      <view class="send-msg" :style="{ bottom: `${keyboardHeight}rpx` }">
        <view class="uni-textarea">
          <textarea
            v-model="chatMsg"
            maxlength="300"
            confirm-type="send"
            @confirm="handleSend"
            :show-confirm-bar="false"
            :adjust-position="false"
            @linechange="sendHeight"
            @focus="focus"
            @blur="blur"
            auto-height
          ></textarea>
        </view>
        <button @click="handleSend" class="send-btn">发送</button>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue'
const keyboardHeight = ref(0)
const bottomHeight = ref(0)
const scrollTop = ref(0)
const userId = ref('')
const chatMsg = ref('')
const msgList = ref([
  {
    botContent: 'hello，请问我有什么可以帮助你的吗？',
    recordId: 0,
    titleId: 0,
    userContent: '',
    userId: 0,
  },
  {
    botContent: '',
    recordId: 0,
    titleId: 0,
    userContent: '你好呀我想问你一件事',
    userId: 0,
  },
])

const windowHeight = computed(() =>
  rpxTopx(uni.getSystemInfoSync().windowHeight)
)

const inputHeight = computed(() => bottomHeight.value + keyboardHeight.value)

function rpxTopx(px) {
  let deviceWidth = wx.getSystemInfoSync().windowWidth
  let rpx = (750 / deviceWidth) * Number(px)
  return Math.floor(rpx)
}

function updated() {
  scrollToBottom()
}

onLoad((option) => {
  uni.onKeyboardHeightChange((res) => {
    //这里正常来讲代码直接写
    //this.keyboardHeight=this.rpxTopx(res.height)
    //但是之前界面ui设计聊天框的高度有点高,为了不让键盘和聊天输入框之间距离差太大所以我改动了一下。
    this.keyboardHeight = this.rpxTopx(res.height - 30)
    if (this.keyboardHeight < 0) this.keyboardHeight = 0
  })
})

onUnload(() => {
  uni.offKeyboardHeightChange()
})

function focus() {
  scrollToBottom()
}
function blur() {
  scrollToBottom()
}

function sendHeight() {
  setTimeout(() => {
    let query = uni.createSelectorQuery()
    query.select('.send-msg').boundingClientRect()
    query.exec((res) => {
      bottomHeight.value = rpxTopx(res[0].height)
    })
  }, 10)
}

function scrollToBottom(e) {
  setTimeout(() => {
    let query = uni.createSelectorQuery().in(this)
    query.select('#scrollview').boundingClientRect()
    query.select('#msglistview').boundingClientRect()
    query.exec((res) => {
      if (res[1].height > res[0].height) {
        scrollTop.value = rpxTopx(res[1].height - res[0].height)
      }
    })
  }, 15)
}

function handleSend() {
  if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
    let obj = {
      botContent: '',
      recordId: 0,
      titleId: 0,
      userContent: this.chatMsg,
      userId: 0,
    }
    this.msgList.push(obj)
    this.chatMsg = ''
    this.scrollToBottom()
  } else {
    this.$modal.showToast('不能发送空白消息')
  }
}
</script>
<style lang="scss" scoped>
$chatContentbgc: #c2dcff;
$sendBtnbgc: #4f7df5;

view,
button,
text,
input,
textarea {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 聊天消息 */
.chat {
  .scroll-view {
    ::-webkit-scrollbar {
      display: none;
      width: 0 !important;
      height: 0 !important;
      -webkit-appearance: none;
      background: transparent;
      color: transparent;
    }

    // background-color: orange;
    background-color: #f6f6f6;

    .chat-body {
      display: flex;
      flex-direction: column;
      padding-top: 23rpx;
      // background-color:skyblue;

      .self {
        justify-content: flex-end;
      }
      .item {
        display: flex;
        padding: 23rpx 30rpx;
        // background-color: greenyellow;

        .right {
          background-color: $chatContentbgc;
        }
        .left {
          background-color: #ffffff;
        }
        // 聊天消息的三角形
        .right::after {
          position: absolute;
          display: inline-block;
          content: '';
          width: 0;
          height: 0;
          left: 100%;
          top: 10px;
          border: 12rpx solid transparent;
          border-left: 12rpx solid $chatContentbgc;
        }

        .left::after {
          position: absolute;
          display: inline-block;
          content: '';
          width: 0;
          height: 0;
          top: 10px;
          right: 100%;
          border: 12rpx solid transparent;
          border-right: 12rpx solid #ffffff;
        }

        .content {
          position: relative;
          max-width: 486rpx;
          border-radius: 8rpx;
          word-wrap: break-word;
          padding: 24rpx 24rpx;
          margin: 0 24rpx;
          border-radius: 5px;
          font-size: 32rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 42rpx;
        }

        .avatar {
          display: flex;
          justify-content: center;
          width: 78rpx;
          height: 78rpx;
          background: $sendBtnbgc;
          border-radius: 8rpx;
          overflow: hidden;

          image {
            align-self: center;
          }
        }
      }
    }
  }

  /* 底部聊天发送栏 */
  .chat-bottom {
    width: 100%;
    height: 177rpx;
    background: #f4f5f7;
    transition: all 0.1s ease;

    .send-msg {
      display: flex;
      align-items: flex-end;
      padding: 16rpx 30rpx;
      width: 100%;
      min-height: 177rpx;
      position: fixed;
      bottom: 0;
      background: #ededed;
      transition: all 0.1s ease;
    }

    .uni-textarea {
      padding-bottom: 70rpx;

      textarea {
        width: 537rpx;
        min-height: 75rpx;
        max-height: 500rpx;
        background: #ffffff;
        border-radius: 8rpx;
        font-size: 32rpx;
        font-family: PingFang SC;
        color: #333333;
        line-height: 43rpx;
        padding: 5rpx 8rpx;
      }
    }

    .send-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 70rpx;
      margin-left: 25rpx;
      width: 128rpx;
      height: 75rpx;
      background: $sendBtnbgc;
      border-radius: 8rpx;
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 28rpx;
    }
  }
}
</style>
