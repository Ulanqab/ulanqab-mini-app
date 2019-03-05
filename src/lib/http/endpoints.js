const BASE_URL = 'http://127.0.0.1:9000/api';

export default {
  BASE_URL,
  SIGN_IN_MP_URL: `${BASE_URL}/user/login`,
  SIGN_OUT_URL: `${BASE_URL}/user/logout`,
  CATEGORY: `${BASE_URL}/category/list`,
  FEED: `${BASE_URL}/feed/list`,
};
