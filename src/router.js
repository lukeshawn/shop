import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:Login},
        {path:'/home',component:Home}
    ]
})
//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
    //to:要访问的路径
    //from:从哪个路径路转过来
    //next:是一个函数,表示放行
    if(to.path==='/login') return next()
    //获取token
    const tokenStr = window.sessionStorage.getItem('token');
    //如果没有token,则直接跳转到login页面
    if(!tokenStr) return next('/login')
    next()
})
export default router