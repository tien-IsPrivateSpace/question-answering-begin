<script setup>
import { onLoad } from "@dcloudio/uni-app";
const mockData = [
  {
    id: 1,
    title: "对话1",
    count: 2,
    time: "2023-08-30 22:33",
  },
  {
    id: 2,
    title: "对话2",
    count: 3,
    time: "2023-08-30 23:44",
  },
];

function handleClick(item) {
  console.log(item);
}

onLoad((option) => {
  console.log("creations load");
});
</script>

<template>
  <view class="container">
    <view class="header">
      <view class="header-h2">Tian's ChatGPT</view>
      <view class="font-base">Build your own AI assistant.</view>
    </view>
    <view class="main">
      <view class="list w-full">
        <view
          @click="handleClick(item)"
          class="list-item"
          :key="item.id"
          v-for="item in mockData"
        >
          <strong class="list-item-title font-lg">{{ item.title }}</strong>
          <view class="list-item-bottom flex justify-between font-base">
            <span>{{ item.count }}条对话</span>
            <span>{{ item.time }}</span>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
uni-page-body {
  background-color: #e7f8ff !important;
}
.container {
  height: 100%;
  .header {
    padding: 20rpx;
    .header-h2 {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .main {
    .list {
      .list-item {
        margin: 20rpx;
        padding: 26rpx 30rpx;
        background-color: white;
        border-radius: 20rpx;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
        border: 4rpx solid #c0eaf3;

        .list-item-bottom {
          margin-top: 10rpx;
          color: #666;
        }
      }
    }
  }
}
</style>
