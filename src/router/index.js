import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profle = () => import('../views/profle/Profle.vue')


//1.安装插件
Vue.use(VueRouter)


//2.创建路由对象
const routes = [
    {
      path:'',
      redirect:'/Home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/profle',
      component: Profle
    }
]
const router = new VueRouter({
  routes,
  mode:'history'
})


//导出router
export default router
