import axios from 'axios'
import {formatDataQuery} from '../utils/index'
import { baseUrl } from '../../../bx-app/bx-app/src/utils/variable';

axios.defaults.withCredentials = true;
 
let token = sessionStorage.getItem('token') //获取token

export const getData = (url,data) => {
    return new Promise(function(resolve,reject){
        axios.get(baseUrl+url,{params: data,headers:{'Content-Type':'application/json;charset=UTF-8','zcps_token':token}}).then(
            (res)=>{
                console.log('token',token)
                if(res.status === 200){
                    resolve(res)
                }else{
                    reject(res)
                }
            },(err) =>{
                reject(err)
            }
        )
    })
}

export const postData = (url,data)=>{
    return new Promise(function(resolve,reject){
        axios.post(baseUrl=url,data,{headers: {'Content-Type':'application/json;charset=UTF-8','zcps_token':token}}).then(
            (res)=>{
                if(res.status === 200){
                    resolve(res)
                }else{
                    reject(res)
                }
            }
        )
    })
}

export const postDataWithQuery=(url,data)=>{
    return new Promise(function(resolve,resject){
        axios.post(`${baseUrl}${ url }?${formatDataQuery(data)}`).then(
            (res)=>{
                if(res.status === 200){
                    resolve(res.data)
                }else{
                    reject(res)
                }
            }
        )
    })
}

export const getListData=(url,query,userId)=>{
    return new Promise(function(resolve,resject){
        let requesturl = baseUrl+`${url}?query=${ encodeURI(JSON.stringify(query)) }`
        if(userId){
            requesturl = requesturl+`&userId=${userId}`
        }
        axios.get(requesturl).then(
            (res)=>{
                if(res.status === 200){
                    resolve(res.data)
                }else{
                    reject(res)
                }
            },
            (err)=>{
                console.log('err',err)
                reject(err)
            }
        )
    })
}