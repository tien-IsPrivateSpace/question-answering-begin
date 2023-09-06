<script setup></script>

<template>
  <div>
    <div class="header flex items-center">
      <image src="@/static/logo.png" />
      <div class="flex-col header-spans">
        <span class="font-lg">超大佬</span>
        <span class="font-base">超大佬的小程序</span>
      </div>
    </div>
    <div>
      <h3 v-for="item in 50">列表{{ item }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 20rpx;
  background: -webkit-linear-gradient(315deg, #e7f8ff 25%, #d8f4f9);

  image {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .header-spans {
    margin-left: 10rpx;
    span:nth-child(2) {
      color: #666;
    }
  }
}
</style>
