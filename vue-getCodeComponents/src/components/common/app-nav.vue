<template>
  <div id="wx-nav">
	<nav>
        <router-link to="/" tag="dl" exact>
            <dt class="iconfont icon-authenticate" >
            </dt>
            <dd>首页</dd>
        </router-link>
				<router-link to="/statistics" tag="dl">
            <dt class="iconfont icon-shenhe" >    
            </dt>
            <dd>统计</dd>
       </router-link>	
				<router-link to="/setting" tag="dl">
            <dt class="iconfont icon-shezhi" >
            </dt>
            <dd>设置</dd>
        </router-link>
    </nav>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
          
        }
    }
</script>
<style scoped="scoped">
	  @import "../../assets/iconfont/iconfont.css";
    @import "../../assets/css/app-nav.css";
   
</style>