<template>
  <div class="container">
    <div class="userinfo">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover" />
    </div>
    <button
      class="mine-button"
      type="warn"
      open-type="getUserInfo"
      @getuserinfo="onGotUserInfo">
      登录
    </button>
  </div>
</template>

<script>
import { signInMP } from '@/lib/rest-services/user';

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {},
    };
  },

  methods: {
    onGotUserInfo() {
      signInMP();
    },
  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rem;
  height: 128rem;
  margin: 20rem;
  border-radius: 50%;
}
</style>
