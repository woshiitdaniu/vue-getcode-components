<template>
	<div id="wrapper" v-show="isShowStartUp">
		<ul class="lang-wrapper">
			<li class="titles">
				<p class="title-zh">
					请选择语言进入该demo
				</p>
				<p class="title-en">
					Please choose the language to enter
				</p>
			</li>
			<li class="lang-chooseItem" @click="fTochangeLang('zh')">
				简体中文
			</li>
			<li class="lang-chooseItem" @click="fTochangeLang('en')">
				English
			</li>
			<!--<li class="lang-chooseItem">
				简体中文
			</li>
			<li class="lang-chooseItem">
				简体中文
			</li>-->
			
		</ul>
	</div>
</template>

<script>
	export default{
		props:['isShowStartUp'],
		data() {
			return {
				
			}
		},
		methods:{
			fTochangeLang(p){			
			      this.$i18n.locale = p;
			      localStorage.setItem('locale', p);
			      
			      this.$emit('toChangeStarUpShow')
			}
		}
	}
</script>

<style scoped="scoped">
	#wrapper{
		position: absolute;
    	width: 100vw;
    	height: 100vh;
    	background: url(../../assets/images/page_startup/lang.jpg) 0px 0px no-repeat;
    	background-size: cover;
    	z-index: 999;
	}
	.lang-wrapper{
		    margin-top: 30%;
    padding: 25px;
    text-align: center;
	}
	.titles{
		color: white;
	}
	.title-zh{
		    font-size: 22px;
	}
	.lang-chooseItem{
		height: 30px;
    line-height: 30px;
    background-color: rgba(222,222,222,.5);
    border-radius: 50px;
    color: #f56c6c;
    margin: 20px 0;
	}
</style>