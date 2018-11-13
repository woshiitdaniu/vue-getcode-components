import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    //app整体由店面页和店内页组成 暂时并没有用到嵌套路由
    
    //这里的components中default、subPage分别对应以它们命名的route-view
const routes = [{
        path: '/',
        redirect:'/login'
   },
    {
        path: '/login',
        name: "登录",
        component: resolve => require(["../components/login/index.vue"], resolve)
    },	
    {
        path: '/login/forgetpassword',
        name: "找回密码",
        components: {
            "default": resolve => require(["../components/forgetpassword/index.vue"], resolve),
            "subPage": resolve => require(["../components/forgetpassword/index.vue"], resolve)
        }
    },
     {
        path: '/login/register',
        name: "会员注册",
        components: {
            "default": resolve => require(["../components/register/index.vue"], resolve),
            "subPage": resolve => require(["../components/register/index.vue"], resolve)
        }
    }  
]



let Routersd = new Router({
    base: "/vue-wechat/",
    routes,   
})
//路由守卫！
//Routersd.beforeEach((to,from,next)=>{
//	let newRoutes = routes.find((val)=>(
//		 val.path = to.name
//	))
//	if(!localStorage.isLogin){
//		Routersd.push("/")
//	}
//	next()
//})
export default Routersd