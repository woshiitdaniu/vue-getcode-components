<template>
    <!--注册组件-->
  <div id="changePaw">
  	<CommonHead :texts='message'/>  	
	<section>
		 <div class="forms-wrapper">
         	
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"  :placeholder="$t('page_register.form_account')" v-model="account" @focus="fhideTips"/>
         	 </div>
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"  type="password"  :placeholder="$t('page_register.form_passwords')" v-model="passwords" @focus="fhideTips"/>
         	 	
         	 </div>
         	  <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"  type="password" :placeholder="$t('page_register.form_queryPw')" v-model="queryPw" @focus="fhideTips"/>
         	 	
         	 </div>         	 
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-middle-input" :placeholder="$t('page_register.form_pictureCode')" v-model="pictureCode" @focus="fhideTips"/>
         	 	<button class="forms-right-btn">{{ $t('page_register.form_getCodeBtn') }}</button>
         	 </div>
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"  type="text" :placeholder="$t('page_register.form_phoneNum')" v-model="phoneNum" value="phoneNum" @focus="fhideTips"/>
         	 	
         	 </div>
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-middle-input" :placeholder="$t('page_register.form_phoneCode')" v-model="phoneCode" @focus="fhideTips"/>
         	 	<GetCode 
					:config = "config" 
					:inputVal = 'phoneNum'
					@resultFun = 'resultFuns'
					:types = 1	
					/>
         	 </div>
         	 <div class="forms-item">
         	 	<label class="forms-labal">
         	 		<img src="../../assets/images/contact_male.png"/>
         	 	</label>
         	 	<input class="forms-input"  type="text" :placeholder="$t('page_register.form_inviteCode')" v-model="inviteCode" @focus="fhideTips"/>
         	 	
         	 </div>
         	  <div class="forms-submit">
         	 	<!--<button>{{ $t("page_login.form_loginBtn") }}</button>-->
         	 	<button @click="getDate">{{ $t('page_register.form_toRegister') }}</button>
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
    import CommonHead from '../common/common-head'
    import GetCode from '../common/common-getCode'
    import  queryInputVal  from '../../utils/vertifInputVal'
    export default {
        components: {
           Loading,
           CommonHead,
           GetCode
        },
        data() {
            return {      
            	message:this.$t('page_register.tips_message'),
                showOrHide:false,
                ifShowTips:true,               	
               	tipsText:'',
               	account:'',
               	passwords:'',
               	queryPw:'',
               	pictureCode:'',
               	phoneNum:'',
               	phoneCode:'',
               	inviteCode:'',
               	config:{
					initText:this.$t('page_register.btn_initText'),
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
        mounted(){   
        },       
        computed:{
        	
        },
        methods:{
        	async getDate(){ 
        		let account = this.account,
	               	passwords = this.passwords,
	               	queryPw = this.queryPw,
	               	pictureCode = this.pictureCode,
	               	phoneNum = this.phoneNum,
	               	phoneCode = this.phoneCode,
	               	inviteCode = this.inviteCode;
        			
        			//queryInputVal[p]()
//      			await this.fcheckAndShowTips( "toCheckRegisterAccount",account,"account" )
//      			await this.fcheckAndShowTips( "toCheckRegisterPw",passwords,"passwords" )
//      			await this.fcheckAndShowTips( "toCheckRegisterQueryPw",queryPw,"queryPassw" )
//      			await this.fcheckAndShowTips( "toCheckRegisterPictureCode",pictureCode,"pictureCode" )
//      			await this.fcheckAndShowTips( "toCheckRegisterPhoneNum",phoneNum,"phoneNum" )
//      			await this.fcheckAndShowTips( "toCheckRegisterPhoneCode",phoneCode,"phoneCode" )
//      			await this.fcheckAndShowTips( "toCheckRegisterInviteCode",inviteCode,"inviteCode" )


        			if(!queryInputVal.toCheckRegisterAccount(account)){
            			this.fshowTips(this.$t("page_register.tips_account"),true)           			
            			return;
            		}
            		if(!queryInputVal.toCheckRegisterPw(passwords)){
            			this.fshowTips(this.$t("page_register.tips_password"),true)        
            			return;
            		}
            		if(!queryInputVal.toCheckRegisterQueryPw(queryPw)){
            			this.fshowTips(this.$t("page_register.tips_queryPassw"),true)        
            			return;
            		}
            		if(!queryInputVal.toCheckRegisterPictureCode(pictureCode)){
            			this.fshowTips(this.$t("page_register.tips_pictureCode"),true)        
          			return;
          			}
	        		if(!queryInputVal.toCheckRegisterPhoneNum(phoneNum)){
	            		this.fshowTips(this.$t("page_register.tips_phoneNum"),true)        
	            		return;
	            	}
      				if(!queryInputVal.toCheckRegisterPhoneCode(phoneCode)){
	            		this.fshowTips(this.$t("page_register.tips_phoneCode"),true)        
	            		return;
	            	}
      				if(!queryInputVal.toCheckRegisterInviteCode(inviteCode)){
	            		this.fshowTips(this.$t("page_register.tips_inviteCode"),true)        
	            		return;
	            	}        			
        	
        	
        	
        	
        	},
        	resultFuns(p) {
				if( p===1 ){
					this.fshowTips(this.$t("page_register.tips_phoneNum"),true)
				}
			},
			fshowTips( p,h ) {
				this.tipsText = p;
				this.ifShowTips = h;
			},
			fhideTips() {
				this.tipsText = '';
				this.ifShowTips = false;
			},
			fcheckAndShowTips( p,v,t ) {
				if( !queryInputVal[p](v) ) {
	            	//this.fshowTips(this.$t(`page_register.tips_$(t)`),true)        
					this.fshowTips( this.$t("page_register.tips_" + t ),true)     
	            	return;
	            }   
			}
        		
        }
    }
</script>
<style scoped="scoped">
    .tips {
		margin-top: 20px;
		text-align: center;
		width: 100%;
		font-size: 18px;
	}
	.forms-wrapper{
		margin-top: 38px;
	}
</style>