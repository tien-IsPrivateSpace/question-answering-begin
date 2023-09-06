<script setup>
function test() {
  const requestTask = uni.request({
    url: 'http://n4mt5q.natappfree.cc/question',
    timeout: 15000,
    responseType: 'text',
    method: 'POST',
    enableChunked: true,
    data: {
      question: 'how are you?'
    },
    success: (response) => {
      console.log(response)
    },
    fail: (error) => {}
  })
  requestTask.onHeadersReceived(function (res) {
    console.log(res)
  })
  // 这里监听消息
  requestTask.onChunkReceived(function (res) {
    console.log(res)
    // const uint8Array = new Uint8Array(res.data)
    // let text = String.fromCharCode.apply(null, uint8Array)
    // text = decodeURIComponent(escape(text))
    // console.log(text)
  })
}
</script>

<template>
  <view class="content">
    <button @click="test">handle</button>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
