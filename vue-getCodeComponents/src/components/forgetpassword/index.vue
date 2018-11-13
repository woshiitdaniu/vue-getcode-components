<template>
    <!--忘记密码组件-->
  <div id="changePaw">
  	<CommonHead :texts='message'/>  	
	<section>
		 <div class="forms-wrapper">
         	
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input" v-model="account" :placeholder="$t('page_forgetPw.form_account')"/>
         	 </div>
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"   v-model="paw" type="password"  :placeholder="$t('page_forgetPw.form_newpassword')"/>
         	 	
         	 </div>
         	  <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"   v-model="newPwAgain" type="password" :placeholder="$t('page_forgetPw.form_queryNewPassw')"/>
         	 	
         	 </div>
         	  <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-middle-input"  v-model="emailCode"  style="width: 58%;" :placeholder="$t('page_forgetPw.form_emailcode')"/>
         	 	<GetCode 
					:config = "config" 
					:inputVal = 'account'
					@resultFun = 'resultFuns'
					:types = 2	
					/>
         	 </div>
         	  <div class="forms-submit">
         	 	<button @click="toGetBackPw">{{ $t("page_forgetPw.form_getBack") }}</button>         	 
         	 </div>
         </div>	 
		 <div class="tips" v-show="ifShowTips">
			 {{ tipsText }}
		</div> 
	</section>
    <Loading :showOrHide="showOrHide"/>
  </div>
</template>
<script>
    import {  } from '../../utils/api'
    import Loading from '../common/common-loading'
    import queryInputVal from '../../utils/vertifInputVal'
    import CommonHead from '../common/common-head'
    import GetCode from '../common/common-getCode'
    export default {
        components: {
           Loading,
           CommonHead,
           GetCode
        },
        data() {
            return {      
            	message:this.$t("page_forgetPw.tips_message"),
                showOrHide:false,
                ifShowTips:false,               	
               	tipsText:'',
               	account:'',
               	paw:'',
               	newPwAgain:'',
               	emailCode:'',
               	config:{
					initText:this.$t('page_forgetPw.btn_initText'),
					cssSet:'width:91px;' +
						   'position: absolute;'+
						   'border-radius: 50px;'+
						   'border: none;'+
						   'height: 30px;'+
						   'transform: translateY(20%);'+
						   'color: white;'+
						   'background-color: #3a8ee6;'+
						   'outline: none;'+
						   'right: 20px;',					     
				},
            }
        },
        mounted() {   
        },        
        computed:{
        	
        },
        methods:{
        	 toGetBackPw() {
//      		this.showOrHide = true
				let account = this.account,
               		paw = this.paw,
               		newPwAgain = this.newPwAgain,
               		emailCode = this.emailCode;
               	
               	
               	
               	if(!queryInputVal.toCheckGetBackAccount(account)){
            			this.showTips(this.$t("page_forgetPw.tips_account"),true)           			
            			return;
            	}
            	if(!queryInputVal.toCheckGetBackNpW(paw)){
            			this.showTips(this.$t("page_forgetPw.tips_password"),true)        
            			return;
            	}
            	if(!queryInputVal.toCheckNpWAgain(newPwAgain)){
            			this.showTips(this.$t("page_forgetPw.tips_queryNewPassw"),true)        
            			return;
            	}
            	if(!queryInputVal.toCheckGetBackEC(emailCode)){
            			this.showTips(this.$t("page_forgetPw.tips_emailMsgcode"),true)        
            			return;
            	}
               	
               		
               		
        	},
        	showTips( text,showOrNot ) {    
        		  
            		this.ifShowTips = showOrNot;
            		this.tipsText = text

           	},
           	toChangeWebhight() {
            		this.showTips("",false)    
           	},
           	resultFuns(p){
           		if( p===1 ){
					this.showTips(this.$t("page_forgetPw.tips_account"),true)
				}
           	}
        		
        }
    }
</script>
<style scoped="scoped">
    .tips {
    	height: 38px;
    	line-height: 38px;
		margin-top: 20px;
		text-align: center;
		width: 100%;
		font-size: 18px;
	}
	.forms-wrapper{
		margin-top: 38px;
	}
</style>