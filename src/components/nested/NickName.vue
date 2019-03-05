<template>
  <span class="c-nick-name">
    {{ name }}
  </span>
</template>

<script>
  export default {
    name: 'NickName',

    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-nick-name {
    font-size: $fs-28;
    color: $text-color-gray;
    text-align: left;
    vertical-align: middle;
    margin-right: .16rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
