<template>
  <span class="c-time-ago">{{ timeAgo }}</span>
</template>

<script>
  import moment from 'moment';

  export default {
    props: {
      createdAt: {
        type: String,
        required: true,
      },
    },
    computed: {
      timeAgo() {
        moment.locale('zh-CN');
        return moment(this.createdAt).fromNow();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-time-ago {
    font-size: $fs-26;
    color: $text-color-gray;
    text-align: left;
    margin-right: .16rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
