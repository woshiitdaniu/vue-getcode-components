<template>
	<button 
		:style="config.cssSet?config.cssSet:''" 
		class="common-getCodeBtn" 
		@click="togetCode"
		:disabled="isGetting"
		>{{ message?message:config.initText }}</button>
</template>

<script>
	import { toSendShortCode,toSendEmailCode,toCheckPhoneNum,toCheckEmailNum } from '../../utils/api'
	export default {
		name:'getCode',
		props:{
			config:{//样式配置
				type: Object
			},
			inputVal:{//参数值
				type:String
			},
			types:{//1代表电话号码 2代表邮箱
				type:Number
			}
		},
		data() {
			return {
				message:'',
				isGetting:false//防止重复点击
			}
		},
		methods:{
			togetCode() {	
				let inputVal = this.inputVal;	
				console.log("传进来的参数："+inputVal)
				//检验传入的参数格式是否正确
				let checkResult = this.types ===1 ? toCheckPhoneNum(inputVal) : toCheckEmailNum(inputVal)
				if( !checkResult ){
					this.$emit('resultFun',1)
					return;
				}
				this.isGetting = true;
				let t = 120;
				let _this = this;
				for( let i = 1; i <= t; i++ ) {
					window.setTimeout(()=>{
						
						_this.update_a(i,t)
						
					}, i * 1000);
				}
				this.toSendShortCodes(inputVal)
			},
			update_a( num, t ) {	
				//倒数
				if( num == t ) {				
					this.message = this.$t("components_getCode.sendAgain");	
					this.isGetting = false;
				} else {					
					var printnr = t - num;
					this.message = printnr + this.$t("components_getCode.timeToSend");						
				}
			},
			toSendShortCodes(p) {
				//调用发送api
				let result = this.types ===1 ? toSendShortCode({
					"phoneCode": 86,
					'phone': p,
					'type': 7,
				}) : toSendEmailCode({
					'email': p
				})
				this.$emit('resultFun',result)
			}
		}
		
	}
</script>

<style>
</style>