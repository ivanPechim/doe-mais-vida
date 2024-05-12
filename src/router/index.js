import Vue from 'vue';
import Login from '../components/Autenticacao/Login.vue';
import VueRouter from 'vue-router';
import RecuperarConta from '../components/RecuperarConta.vue';
import CriacaoUsuario from '../components/CriacaoUsuario.vue';
import CadastroUsuario from '../components/Autenticacao/CadastroUsuario.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
	{
		path: '/CadastroUsuario',
		component: CadastroUsuario
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
