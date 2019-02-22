<template>
  <div class="container">
    <scroll-view
      scroll-with-animation
      scroll-x
      class="c-channel-group">
      <div
        v-for="category in categoryList"
        :key="category.id"
        class="c-channel-group__item"
      >
        {{ category.name }}
      </div>
    </scroll-view>
    <scroll-view
      scroll-y
    >
      <div
        v-for="feed in feedList"
        :key="feed.id"
      >
        {{ feed.title }}
      </div>
    </scroll-view>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions,
  } from 'vuex';

  export default {
    data() {
      return {
        page: 1,
        currentCategoryIndex: 0,
        categoryList: [],
      };
    },

    onLoad() {
      this.fetchFeedList({
        categoryId: this.currentCategoryId,
        page: this.page,
      });
    },

    computed: {
      ...mapGetters([
        'currentCategoryId',
        'categoryList',
        'feedList',
        'hasMore',
        'page',
        'status',
      ]),
    },

    methods: {
      ...mapActions([
        'fetchFeedList',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .c-channel-group {
    white-space: nowrap;
    &__item {
      padding: .16rem .44rem;
      display: inline-block;
      font-size: $fs-32;
      color: $text-color-black;
      position: relative;
      transition: 1.2s cubic-bezier(.2, .2, .2, 1);
      &--is-active {
        color: $text-color-white;
        &, &:hover {
          background: $common-button-primary;
          border-radius: 0 0 .24rem .24rem;
        }
      }
      &::after {
        position: absolute;
        content: ' ';
        width: .01rem;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $common-border-light;
        border-radius: .04rem;
      }
      &:first-of-type {
        &::after {
          display: none;
        }
      }
    }
  }
</style>
