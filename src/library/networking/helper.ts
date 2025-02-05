// export const handleResponseAxios = <T = Record<string, unknown>>(
//   res: AxiosResponse<T>,
// ): ResponseBase<T> => {
//   if (res.data) {
//     return {code: API_CONFIG.CODE_SUCCESS, data: res.data, status: true};
//   }

//   return responseDefault as ResponseBase<T>;
// };

// const handleErrorApi = (status: number) => {
//   const result = {code: status, msg: '', status: false};

//   if (status > 505) {
//     result.msg = translate('error:server_error');

//     return result;
//   }

//   if (status < 500 && status >= 418) {
//     result.msg = translate('error:error_on_request');

//     return result;
//   }

//   result.msg = translate(('error:' + status) as I18nKeys);

//   return result;
// };
