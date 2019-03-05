<template>
  <img
    :src="src"
    :alt="alt"
    class="avatar"
  />
</template>

<script>
  export default {
    name: 'Avatar',

    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .avatar {
    width: .68rem;
    height: .68rem;
    border-radius: 50%;
    margin-right: .16rem;
    vertical-align: middle;
  }
</style>
