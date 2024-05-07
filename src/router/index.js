import Vue from 'vue';
import Login from '../components/Autenticacao/Login.vue';
import VueRouter from 'vue-router';
import RecuperarConta from '../components/RecuperarConta'
import CriacaoUsuario from '../components/CriacaoUsuario'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/CriacaoUsuario',
    component: CriacaoUsuario
  },
  {
    path: '/RecuperarConta',
    component: RecuperarConta
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
