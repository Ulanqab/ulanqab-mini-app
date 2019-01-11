import { post } from '@/lib/http/client';
import endpoints from '@/lib/http/endpoints';

export function signInMP(code, iv, encryptedData, signature) {
  return new Promise((resolve, reject) => {
    post(endpoints.SIGN_IN_MP_URL, {
      code, iv, encryptedData, signature,
    })
      .then(({ data, statusCode }) => {
        if (statusCode !== 200) {
          reject('signInMP() 请求状态码错误');
        }
        resolve({
          user: data.user,
          jwt: data.jwt,
        });
      })
      .catch(() => {
        reject('signInMP() 请求失败');
      });
  });
}
