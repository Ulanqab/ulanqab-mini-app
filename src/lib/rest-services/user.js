/* eslint-disable prefer-promise-reject-errors */
import * as userRest from '@/lib/rest-sdk/user';
import { KJUR } from 'jsrsasign';

function parseJWT(jwt) {
  const decoded = KJUR.jws.JWS.parse(jwt);
  if (!decoded) {
    return '';
  }
  const decodedToken = decoded.payloadObj;
  return decodedToken ? decodedToken.eid : '';
}
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
                parseJWT(data.token);
                // Persist user
                wx.setStorageSync('user', data.user);
                // Persist JWT
                wx.setStorageSync('jwt', data.token);
                resolve(data.user);
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
