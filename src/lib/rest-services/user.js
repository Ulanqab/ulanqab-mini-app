import * as userRest from '@/lib/rest-sdk/user';

export async function signInMP() {
  return new Promise((resolve, reject) => {
    // https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html
    wx.login({
      success: (loginResult) => {
        // https://developers.weixin.qq.com/miniprogram/dev/api/open.html
        wx.getUserInfo({
          withCredentials: true,
          success(getUserInfoResult) {
            const postData = {
              code: loginResult.code,
              iv: getUserInfoResult.iv,
              encryptedData: getUserInfoResult.encryptedData,
              signature: getUserInfoResult.signature,
            };

            userRest.signInMP(
              postData.code,
              postData.iv,
              postData.encryptedData,
              postData.signature,
            )
              .then((data) => {
                console.log(data);
                // Persist User
                // wx.setStorageSync('user', user);
                // Persist JWT
                // wx.setStorageSync('jwt', jwt);

                // resolve(user);
              })
              .catch((data) => {
                reject(data);
              });
          },
          fail() {
            reject('wx.getUserInfo() 失败');
          },
        });
      },
      fail() {
        reject('用户拒绝提供登录权限');
      },
    });
  });
}

export default {
  signInMP,
};
