function composeHeader() {
  const jwt = wx.getStorageSync('jwt');
  const header = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (jwt && jwt !== '') {
    header.Authorization = `Bearer ${jwt}`;
  }
  return header;
}

function uploadHeader() {
  const jwt = wx.getStorageSync('jwt');
  const header = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Referer: '',
  };
  if (jwt && jwt !== '') {
    header.Authorization = `Bearer ${jwt}`;
  }
  return header;
}

export function post(url, postData) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: postData,
      header: composeHeader(),
      method: 'POST',
      success({ data, statusCode, header }) {
        resolve({ data, statusCode, headers: header });
      },
      fail() {
        reject('post() 请求失败');
      },
    });
  });
}

export function httpDelete(url, postData) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: postData,
      header: composeHeader(),
      method: 'DELETE',
      success({ data, statusCode, header }) {
        resolve({ data, statusCode, headers: header });
      },
      fail() {
        reject('httpDelete() 请求失败');
      },
    });
  });
}

export function get(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      header: composeHeader(),
      method: 'GET',
      success({ data, statusCode, header }) {
        resolve({ data, statusCode, headers: header });
      },
      fail() {
        reject('get() 请求失败');
      },
    });
  });
}

export function uploadFile(params) {
  return new Promise((resolve, reject) => {
    const callback = {
      header: uploadHeader(),
      name: 'file',
      success: (res) => {
        resolve(res);
      },
      fail() {
        reject('文件上传失败');
      },
    };
    const param = Object.assign(params, callback);
    wx.uploadFile(param);
  });
}
