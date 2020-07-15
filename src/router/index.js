import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'home',
      path: '/',
      component:resolve => require(['../view/home'],resolve),
      meta:{
        title:'首页',
        home:1,
      }
    },
    {
      name: 'product',
      path: '/product',
      component:resolve => require(['../view/product'],resolve),
      meta:{
        title:'产品',
      }
    },
    {
      name: 'service',
      path: '/service',
      component:resolve => require(['../view/service'],resolve),
      meta:{
        title:'服务平台',
      }
    },
    {
      name:'about',
      path:'/about',
      component:resolve => require(['../view/aboutUs'],resolve),
      meta:{
        title:'关于我们',
      }
    },
    {
      name:'business',
      path:'/business',
      component:resolve => require(['../view/business'],resolve),
      meta:{
        title:'商务合作',
      }
    },
    {
      name:'test',
      path:'/test',
      component:resolve => require(['../view/test'],resolve),
      meta:{
        title:'测试',
      }
    }
  ]
})
