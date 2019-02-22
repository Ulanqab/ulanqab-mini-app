import {
  getFeeds,
  getCategoryList,
} from '@/lib/rest-sdk/feed';

const state = {
  currentCategoryId: 2,
  categoryList: [],
  feedList: [],
  page: 1,
  hasMore: false,
  refreshing: false,
  pageStatus: {
    status: '',
    content: '',
  },
};

export const getters = {
  currentCategoryId: paramState => paramState.currentCategoryId,
  categoryList: paramState => paramState.categoryList,
  feedList: paramState => paramState.feedList,
  page: paramState => paramState.page,
  hasMore: paramState => paramState.hasMore,
  refreshing: paramState => paramState.refreshing,
  status: paramState => paramState.status,
};

const actions = {

  updateCategory(store, category) {
    store.dispatch('fetchFeedList', category);
  },

  async fetchCategoryList(store) {
    const {
      commit,
    } = store.commit;
    getCategoryList().then((res) => {
      commit('updateCategoryList', res.list);
    }, () => {
      commit('updateStatus', {});
    });
  },

  async fetchFeedList(store, categoryId, page) {
    const {
      commit,
      dispatch,
    } = store.commit;
    if (getters.categoryList.length <= 0) {
      await dispatch('fetchCategoryList');
    }
    const count = 10;
    getFeeds(categoryId, count, page).then((res) => {
      commit('updateFeedList', res);
    });
  },

  fetchFeedDetail() {
  },

  likeFeed() {
  },

  addFeed() {
  },

  deleteFeed() {
  },

  updateFeed() {
  },

};

const mutations = {

  updateCategoryList(paramState, data) {
    paramState.categoryList = data;
  },

  updateFeedList(paramState, data) {
    paramState.feedList = data.list;
    paramState.hasMore = data.hasMore;
  },

};

export default {
  state,
  getters,
  actions,
  mutations,
};
