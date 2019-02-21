/* eslint-disable prefer-promise-reject-errors */
import { post } from '@/lib/http/client';
import endpoints from '@/lib/http/endpoints';

export function signInMP(code, iv, encryptedData, signature) {
  return new Promise((resolve, reject) => {
    post(endpoints.SIGN_IN_MP_URL, {
      code, iv, encryptedData, signature,
    })
      .then((data) => {
        if (data.data.statusCode === 0) {
          resolve(data.data.data);
        } else {
          reject(`请求失败: ${data.statusMessage}`);
        }
      })
      .catch(() => {
        reject('signInMP() 请求失败');
      });
  });
}
