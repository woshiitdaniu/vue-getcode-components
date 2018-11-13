import { mGet,mPost } from "./serves";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
Vue.use(ElementUI)

//------------------------------------公共api----------------------
/*
 * 发送短信 api start
 */
export function toSendShortCode(param){
	const url = "/user/sendshortmess.do"
	return mPost(url,param)
}


/*
 * 发送邮件 api start
 */
export function toSendEmailCode(param){
	const url = "/user/sendEmailmess.do"
	return mPost(url,param)
}

/*
 * 验证手机号码 api start
 */
export function toCheckPhoneNum(param){
	const tests = /^1[3456789]\d{9}$/
	return tests.test(param)
}

/*
 * 验证邮箱 api
 */

export function toCheckEmailNum(param){
	
	const tests = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
	return tests.test(param)
}




/*
 * 登录 start
 */





//-------------------------------------------判断登录是否超时
export function toCheckLogin(result,vm){
	
	if(result.data.mesg=='loginOut'){
		let _this = vm;
		vm.$message({
			message: '登录超时！',
			type: 'warning',
			duration:1000
		});
				        
		setTimeout(function(){
			localStorage.clear()
			_this.$router.push({
		        path:'/login'          			
		    })
		},2000)						
		return;
	}
}