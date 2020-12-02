import axios from "axios";

export function getHelpRouter(router) {
  let host = 'http://101.200.153.53:31546/';
  return new Promise(resolve => {
    axios({
      baseURL: host,
      url: 'request-athlete-basicinfo',
      method: "post",
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      data: {}
    })
      .then(res => {
        resolve(content);
      })
      .catch(err => {

      });
  });
}
