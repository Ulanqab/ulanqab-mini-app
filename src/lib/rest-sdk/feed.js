/* eslint-disable prefer-promise-reject-errors */
import {
  get,
  // post,
} from '@/lib/http/client';
import endpoints from '@/lib/http/endpoints';

export function getCategoryList() {
  const url = `${endpoints.CATEGORY}`;
  return new Promise((resolve, reject) => {
    get(url).then((response) => {
      if (response.data.statusCode === 0) {
        resolve(response.data.data);
      } else {
        reject(`请求失败: ${response.statusMessage}`);
      }
    }, () => {
      reject();
    });
  });
}

export function getFeeds(category, page, count) {
  const url = `${endpoints.FEED}?category=${category}&page=${page}&count=${count}`;
  return new Promise((resolve, reject) => {
    get(url).then((response) => {
      resolve(response.data.data);
    }, () => {
      reject();
    });
  });
}

export function getFeedDetail(id) {
  const url = `${endpoints}/id=${id}`;
  return new Promise((resolve, reject) => {
    get(url).then((response) => {
      resolve(response);
    }, () => {
      reject();
    });
  });
}


export default {
  getCategoryList,
  getFeeds,
  getFeedDetail,
};
