import Vue from 'vue'
import Router from 'vue-router'
import Blogs from "./views/Blogs";
import Login from "./views/Login";
import BlogEdit from "./views/BlogEdit";
import BlogDetail from "./views/BlogDetail";


Vue.use(Router)
//解决两次访问相同路由地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

export default new Router({
    routes: [
        {path: '/', name:'Index', redirect: '/blogs'},
        {path: '/blogs',name:'Blogs', component: Blogs},
        {path: '/login',name:'Login', component: Login},
        {path: '/blog/add',name:'BlogEdit', component: BlogEdit},
        {path: '/blog/:blogId',name:'BlogDetail', component: BlogDetail}

    ]
})
