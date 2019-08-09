import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('./../../../../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//public是对axios的工具类封装，定义了http请求方法
export const page_list = (page,size,params) => {
  let query = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+'/?'+query)
};

export const page_add = params => {
  return http.requestPost(apiUrl + '/cms/page/add/',params)
};
/*页面查询*/
export const page_get = id => {
  return http.requestQuickGet(apiUrl+'/cms/page/get/'+id)
};
/*页面修改，采用put方法*/
export const page_edit = (id, params) => {
  return http.requestPut(apiUrl + '/cms/page/edit/' + id, params)
};
/*页面删除，采用delete方法*/
export const page_del = (id) => {
  return http.requestDelete(apiUrl + '/cms/page/del/' + id,null)
};


