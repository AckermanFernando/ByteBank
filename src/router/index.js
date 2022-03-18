import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },{
    path: '/novousuario',
    name: 'novo(usuario',
    component: () => import(/*webpackChunkName: "registrar" */  '../views/NovoUsuario.vue'),
    meta: {
      publica: true
    }
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "registar" */ '../views/Login.vue'),
    meta: {
      publica: true
    }
  }
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((routerTo, routerFrom, next) => {
  if(!routerTo.meta.publica && !store.state.token){
    return next({path: '/login'})
  }
  next()
})

export default router
