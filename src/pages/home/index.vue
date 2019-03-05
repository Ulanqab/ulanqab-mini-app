<template>
  <div class="container">
    <ChannelLayout/>
    <scroll-view
      scroll-y
    >
      <FeedItem
        v-for="feed in feedList"
        :key="feed.id"
        :feed="feed"/>
    </scroll-view>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions,
  } from 'vuex';
  import ChannelLayout from '@/components/channel/ChannelLayout';
  import FeedItem from '@/components/list-item/FeedItem';

  export default {
    components: {
      FeedItem,
      ChannelLayout,
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
        'feedList',
        'hasMore',
        'page',
        'pageStatus',
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
</style>
