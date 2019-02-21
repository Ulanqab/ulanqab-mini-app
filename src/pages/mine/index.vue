<template>
  <scroll-view
    scroll-y
    class="container">
    <div
      v-if="userInfo"
      class="user-info">
      <img
        class="user-info-avatar"
        :src="userInfo.avatar"/>
      <div class="user-info-name">{{ userInfo.nickName }}</div>
    </div>
    <button
      v-if="!userInfo"
      class="button-login"
      type="warn"
      open-type="getUserInfo"
      @getuserinfo="onGotUserInfo">
      登录
    </button>
    <button
      v-if="userInfo"
      class="button-logout"
      type="warn">
      退出
    </button>
  </scroll-view>
</template>

<script>
  import {
    signInMP,
  } from '@/lib/rest-services/user';

  export default {
    data() {
      return {
        userInfo: null,
      };
    },

    methods: {
      onGotUserInfo() {
        signInMP().then((res) => {
          this.userInfo = res;
        });
      },
    },
  };
</script>

<style lang="scss" scoped>

  .user-info {
    text-align: center;
    &-avatar {
      width: 1.28rem;
      height: 1.28rem;
      border-radius: 50%;
      margin: 0 auto;
    }
    &-name {
      font-size: $fs-32;
      color: $text-color-black;
      margin: .16rem auto;
    }
  }
  .button {
    margin-top: .48rem;
    &-login {

    }
    &-logout {

    }
  }
</style>
