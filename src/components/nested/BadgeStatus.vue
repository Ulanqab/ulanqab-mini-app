<template>
  <span class="c-badge-status">
    {{ statusArr[status] }}
  </span>
</template>

<script>
  export default {
    name: 'BadgeStatus',

    data() {
      return {
        statusArr: {
          0: '待发布',
          1: '已发布',
          2: '已过期',
        },
      };
    },

    props: {
      status: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-badge-status {
    display: inline-block;
    font-size: $fs-24;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    margin-right: .16rem;
    padding: 0 .04rem;
    color: $text-color-primary;
    border: .01rem solid $common-border-primary;
    border-radius: .05rem;
  }
</style>
