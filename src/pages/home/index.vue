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
  </div>
</template>

<script>
  import {
    getFeeds,
    getCategoryList,
  } from '@/lib/rest-sdk/feed';

  export default {
    data() {
      return {
        page: 1,
        currentCategoryIndex: 0,
        categoryList: [],
      };
    },

    onLoad() {
      this.fetchCategoryList();
    },

    methods: {
      fetchCategoryList() {
        getCategoryList().then((res) => {
          this.categoryList = res.list;
        }, () => {

        });
      },
      fetchFeeds() {
        getFeeds();
      },
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
