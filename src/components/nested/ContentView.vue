<template>
  <p class="c-content-view">
    {{ content }}
  </p>
</template>

<script>
  export default {
    name: 'ContentView',

    props: {
      content: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-content-view {
    font-size: $fs-32;
    color: $text-color-black;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 1.48rem;
    line-height: .50rem;
    word-break: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
