// import axios from 'axios';
// import { apiClient as mobxRestApiClient } from 'mobx-rest';
//
// const API_PATH = '/api/1';
// const log = createLogger('APIClient', 'DEBUG');
//
// export const axiosClient = axios.create({
//   baseURL: null,
//   timeout: 10000,
//   headers: { common: { HTTP_X_AUTH_TOKEN: null } },
// });
//
// const abort = () => {}; // cannot abort fetch
//
// function setAuthHeader() {
//   const account = require('~/data').default.account; // eslint-disable-line global-require
//   const token = account.has('authentication_token') && account.get('authentication_token');
//   axiosClient.defaults.headers.common.HTTP_X_AUTH_TOKEN = token;
// }
//
// function onSuccess(response) {
//   return Promise.resolve(response.data);
// }
//
// function onError(error) {
//   if (error.response) {
//     log.warn('Response code', error.response.status);
//   } else {
//     log.warn('Error', error.message);
//   }
//   throw error;
// }
//
// const wrap = name => (path, data, options) => {
//   // FIXME nesting parameters
//   const args = (name === 'put' || name === 'post') ? [path, data, options] : [path, options];
//   setAuthHeader();
//   log.debug(name, axiosClient.defaults.baseURL, path, data, options);
//
//   const promise = axiosClient[name](...args)
//     .then(onSuccess)
//     .catch(onError);
//
//   return { abort, promise };
// };
//
// export function setApiHost(host) {
//   const hostWithPath = `${host}${API_PATH}`;
//   log.debug('setApiHost', hostWithPath);
//   axiosClient.defaults.baseURL = hostWithPath;
// }
//
// const wrappedClient = {
//   get: wrap('get'),
//   put: wrap('put'),
//   post: wrap('post'),
//   del: wrap('del'),
//   patch: wrap('patch'),
// };
//
// mobxRestApiClient(wrappedClient);
//
// export default wrappedClient;
//
// if (__DEV__) global.APIClient = wrappedClient;
