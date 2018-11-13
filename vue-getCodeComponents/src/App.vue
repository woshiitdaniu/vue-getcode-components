<template>
    <div id="app">
    	<!--第一部分：开场页面这样写的作用跟路由守卫的效果一样 -->
    	<!--如果没有登录 则Logins组件会一直存在，那么下面的内容就看不到！ -->   
    	<Startuppage :isShowStartUp = 'isShowStartUp' @toChangeStarUpShow = 'toChangeStarUpShow'/>
        <!--第二部分：主页面 -->
        <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
            <!--通用头部-->
           	<header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
                <app-header :pageName="pageName"></app-header>
            </header>
            <!--三个门面页 路由 -->
            <section class="app-content">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>
            <!--底部导航 路由 -->
            <footer class="app-footer">
                <app-nav></app-nav>
            </footer>
        </div>
        
        <!--第三部分：跳转内页面 -->
        <!--其他跳转内页集合 有过渡效果-->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="sub-page"></router-view>
        </transition>
    </div>
</template>

<script>
    import AppHeader from './components/common/app-header'
    import Startuppage from './components/startuppage/index'
    import AppNav from './components/common/app-nav'
    import mixin from "./vuex/mixin.js" // 混合被单独放在 mixin.js 中管理
    window.mixin = mixin // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin 
    export default {
        name: 'app',
        components: {
            AppHeader,
            AppNav,
            Startuppage
        },
        data() {
            return {
                "pageName": "",
                "routerAnimate": false,
                "enterAnimate": "", //页面进入动效
                "leaveAnimate": "", //页面离开动效
                "isShowStartUp": localStorage.getItem('isShowStartUp') || true,
            }
        },
        watch: {
            // 监听 $route 为店内页设置不同的过渡效果
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                if (toDepth === 2) {
//                  this.$store.commit("setPageName", to.name)
                }
                //同一级页面无需设置过渡效果
                if (toDepth === fromDepth) {
                    return;
                }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                    // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
                if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
            }
        },
        methods:{
        	toChangeStarUpShow() {
        		let _this = this;
        		_this.isShowStartUp = false
        		localStorage.setItem('isShowStartUp',false)
//      		setTimeout(function(){
//      			_this.isShowStartUp = false
//      		},1000)
        	}
        }
    }
</script>
<style>
    /*将公用的样式统一在此导入*/
    .app-content{
    	background-color: #d3d3d333;
    }
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/app-header.css";
    /*阿里 fonticon*/
    /*过渡效果需要的动画库*/
    
    @import "assets/css/lib/animate.css";
    /*weui 样式库 非常适合高仿微信*/
    
    @import "assets/css/lib/weui.min.css";
</style>