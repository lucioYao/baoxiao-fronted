import axios from 'axios'
const baseURL = process.env.VUE_APP_DOMAIN_URL
axios.defaults.baseURL = baseURL

export function get(url ,params){
    return new Promise((resolve,reject) => {
        axios.get(url, {
            params: {
                ...params
            },
            timeout: 1000,
            headers: {
                token: 'token undifund',
                timeStamp: new Date().getTime()
              }
          })
          .then(function (response) {
            // todo panduan等入等问题
            resolve(response);
        
          })
          .catch(function (error) {
            console.error(error);
            reject('错误:' + JSON.stringify(error))
          });
    })
}

export function post(url ,params){
    return new Promise((resolve,reject) => {
        axios.post(url, params,{
            timeout: 1000,
            headers: {
                token: 'token undifund',
                timeStamp: new Date().getTime()
              }
          })
          .then(function (response) {
            // todo panduan登入等问题
            console.log(response);
            resolve(response.data);
        
          })
          .catch(function (error) {
            console.error(error);
            reject('错误:' + JSON.stringify(error))
          });
    })
}



