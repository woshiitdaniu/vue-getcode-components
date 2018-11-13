import Axios from "./Axios";
import qs from 'qs';
//注明：param为对象参数{}

export function mGet(url,param){
		param = param?param:""
		let params = qs.stringify(param);
		return new Promise((resolve,reject)=>{
			Axios.get(url,{param}).then((res)=>{
				resolve(res)
			})
			.catch((err)=>{
				reject(err)
			})
		})
	}
export function mPost(urls,param){
		return new Promise((resolve,reject)=>{
			Axios(
				{
			        method:"POST",
			        headers:{'Content-type':'application/json',},
			        dataType:"json",
			        url:urls,
			        params:param
				}
			).then((res)=>{
				resolve(res)
			})
			.catch((err)=>{
				reject(err)
			})
		})
}

