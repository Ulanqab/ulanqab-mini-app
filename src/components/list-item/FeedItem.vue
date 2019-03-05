<template>
  <section class="c-item-feed">
    <header>
      <Avatar
        :src="feed.avatar"
        :alt="feed.nickName"
      />
      <NickName :name="feed.nickName"/>
      <BadgeStatus :status="feed.status"/>
    </header>
    <article>
      <ContentView :content="feed.content"/>
    </article>
    <footer>
      <Cellphone
        :cellphone="'123456789'"
        :show="false"
      />
      <TimeAgo :create-at="feed.createAt"/>
    </footer>
  </section>
</template>

<script>
  import Avatar from '@/components/nested/Avatar';
  import NickName from '@/components/nested/NickName';
  import BadgeStatus from '@/components/nested/BadgeStatus';
  import ContentView from '@/components/nested/ContentView';
  import TimeAgo from '@/components/nested/TimeAgo';
  import Cellphone from '@/components/nested/Cellphone';

  export default {
    name: 'FeedItem',
    components: {
      Cellphone,
      TimeAgo,
      ContentView,
      BadgeStatus,
      NickName,
      Avatar,
    },
    props: {
      feed: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-item-feed {
    padding: .16rem;
    border-bottom: .01rem solid $common-border-light;
    &:last-child {
      border-bottom: 0;
    }
  }

  header {
    margin-bottom: .08rem;
  }
</style>
