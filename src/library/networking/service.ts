// import Axios, {AxiosRequestConfig} from 'axios';

// const AxiosInstance = Axios.create({});

// AxiosInstance.interceptors.response.use(
//   response => response,
//   function (err) {
//     if (err?.response?.status === 403 || err?.response?.status === 401) {
//       console.log('Lỗi 401/403 lỗi xác thực');
//       return Promise.reject(err);
//     }
//     return Promise.reject(err);
//   },
// );

// function Request<T = Record<string, unknown>>(config: ParamsNetwork) {
//   const defaultConfig: AxiosRequestConfig = {
//     baseURL: API_URL,
//     timeout: API_CONFIG.TIME_OUT,
//   };

//   return new Promise<ResponseBase<T> | null>(rs => {
//     AxiosInstance.request(
//       StyleSheet.flatten([
//         defaultConfig,
//         config,
//         {signal: config?.signal || controller.current?.signal},
//       ]),
//     )
//       .then((res: AxiosResponse<T>) => {
//         const result = handleResponseAxios(res);

//         rs(result);
//       })
//       .catch((error: AxiosError<T>) => {
//         if (error.code === AxiosError.ERR_CANCELED) {
//           rs(null);
//         }

//         const result = handleErrorAxios(error);

//         if (result.code === API_CONFIG.RESULT_CODE_PUSH_OUT) {
//           onPushLogout();

//           rs(null);
//         } else {
//           rs(result as ResponseBase<T>);
//         }
//       });
//   });
// }
