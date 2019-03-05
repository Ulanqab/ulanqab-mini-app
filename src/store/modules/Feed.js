import {
  getFeeds,
  getCategoryList,
} from '@/lib/rest-sdk/feed';

const state = {
  currentCategoryId: 2,
  categoryList: [],
  feedList: [],
  dataList: null,
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
  pageStatus: paramState => paramState.pageStatus,
};

const actions = {

  updateCategory(store, category) {
    store.dispatch('fetchFeedList', category);
  },

  async fetchCategoryList(store) {
    const {
      commit,
    } = store;
    getCategoryList().then((res) => {
      commit('updateCategoryList', res.list);
    }, () => {
      commit('updateStatus', {});
    });
  },

  async fetchFeedList(store, param) {
    const {
      commit,
      dispatch,
    } = store;
    if (store.getters.categoryList.length < 1) {
      await dispatch('fetchCategoryList');
    }
    const count = 10;
    getFeeds(param.categoryId, param.page, count).then((res) => {
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
