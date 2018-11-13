<template>
    <div class="welcome" v-show="isShow" ref='loginbox'>
    	<div class="login-title">
    		<div class="login-title-wrapper">
    			<!--<img src="../../assets/images/logo/logo.png" />-->
    		</div>         		
        </div>
        <div class="login-contain">        	
         	<div class="login-acctount forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input 
         	 		class="forms-input" 
         	 		v-model="account" 
         	 		@focus="toChangeWebhight" 
         	 		:placeholder="$t('page_login.form_account')"
         	 	/>
         	</div>
         	<div class="login-password forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input 
         	 		class="forms-input" 
         	 		v-model="paw" 
         	 		type="password" 
         	 		@focus="toChangeWebhight" 
         	 		:placeholder="$t('page_login.form_password')"
         	 	/>
         	 	
         	</div>
         	<div class="login-code forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input 
         	 		class="forms-middle-input"  
         	 		v-model="picturecode" 
         	 		@focus="toChangeWebhight" 
         	 		:placeholder="$t('page_login.form_picturecode')"
         	 	/>
         	 	<button class="forms-right-btn" style="right: 30px;">{{ $t("page_login.form_getCodeBtn") }}</button>
         	</div>
         	<div class="login-code forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input 
         	 		class="forms-middle-input" 
         	 		v-model="shortMescode" 
         	 		@focus="toChangeWebhight" 
         	 		:placeholder="$t('page_login.form_shotMsgcode')"
         	 	/>
         	 	<button class="forms-right-btn" style="right: 30px;">{{ $t("page_login.form_getCodeBtn") }}</button>
         	</div>
         	<div class="forms-submit">
         	 	<button @click="tologin":class="{hadClick:isClick}":disabled="isClick">{{ $t("page_login.form_loginBtn") }}</button>
         	</div>
         	<p class="login-goOtherPage">
         	 	<router-link to='/login/forgetpassword'>
         	 		<span class="login-goOtherPage-forgetPaw">{{ $t("page_login.toGoForgetPaw") }}</span>
         	 	</router-link>
         	 	<router-link to='/login/register'>
         	 		<span class="login-goOtherPage-register">{{ $t("page_login.toGoRister") }}</span>
         	 	</router-link>
         	</p>
         	<p class="tips" v-show="ifShow">{{ tipText }}</p>
         </div>
    </div>
</template>
<script>
import { toLogin } from '../../utils/api'
import  queryInputVal  from '../../utils/vertifInputVal'
export default {
	name:"Login",
    data() {
        return {
            isShow: true,
            ifShow:false,
            isClick:false,
            account:'',
            paw:'',
            picturecode:'',
            shortMescode:'',
            tipText:'',
            WebviewHg:0,
            getLogoId:''
        }
    },
    mounted() {
       	this.checkLogin()
       	this.WebviewHg = window.innerHeight;     	       	      	
    },
    methods: {
        async tologin(){           		
            let account = this.account,
            	paw = this.paw,        
            	picturecode = this.picturecode,
               	shortMescode = this.shortMescode;   
               		
               		
               		
            if(!queryInputVal.toCheckLoginAccount(account)){
            	this.showTips(this.$t("page_login.tips_account"),true);           			
            	return;
            }
            if(!queryInputVal.toCheckLoginPW(paw)){
            	this.showTips(this.$t("page_login.tips_password"),true);        
            	return;
            }
            if(!queryInputVal.toCheckLoginPC(picturecode)){
            	this.showTips(this.$t("page_login.tips_picturecode"),true);        
            	return;
            }
            if(!queryInputVal.toCheckLoginSC(shortMescode)){
            	this.showTips(this.$t("page_login.tips_shotMsgcode"),true);        
            	return;
            }
            		
            		
            		
            this.isClick = true;
            this.ifShow = false;
            this.showTips(this.$t("page_login.tips_login"),true);   
            this.$router.push({
            	path:'/index',
            	query:{
            		tokens:123123
            	}
            })           		            		
            		//做登录处理         		
			this.isClick = false;
        },
        checkLogin() {
		    this.isClick = false;
		    this.ifShow = false;
		    if( window.plus ){
				this.getLogoId = plus.device.uuid;
			}		       				       				       		
        },
        showTips( text,showOrNot ) {
            this.ifShow = showOrNot;
            this.tipText = text;
        },
        toChangeWebhight() {
            this.showTips("",false);    
        }
            	
    }
      
        
}
</script>
<style scoped="scoped">
/* 被注释掉的样式不适合部分安卓机 */
.hadClick{
	cursor: not-allowed;
	background-color: rgb(79, 189, 55); 
}
.login-title{
	width: 100%;
    height: 169px;
    margin-top: -100px;
}
.login-title img{
	width: 100%;
	height: 85%;
}
.chinaText{
	font-size: 20px;
    color: white;
}
.englishText{
	font-size: 15px;
    color: #e9e96e;
}
.welcome {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 92;
    background: #67c23a;
    animation: welcome 0.5s;
    transition: 0.3s;
    -webkit-transition: 0.3s;
}

.login-contain{
	padding: 0 21px;
}
.login-title-wrapper{
	height: 100%;
    width: 30%;
    margin: auto;
    margin-top: 28vh;
}

.tips{
	height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 15px;
}
.login-goOtherPage{
	padding: 10px;
    display: flex;
    justify-content: space-between;
}
</style>
