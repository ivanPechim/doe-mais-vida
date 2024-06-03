import Vue from 'vue';
import Login from '../components/Cadastros/Login.vue';
import VueRouter from 'vue-router';
import RecuperarConta from '../components/RecuperarConta.vue';
import CriacaoUsuario from '../components/CriacaoUsuario.vue';
import CadastroUsuario from '../components/Cadastros/CadastroUsuario.vue';
import RecuperaConta from '../components/Cadastros/RecuperaConta.vue';
import Home from '../components/Home.vue';
import Agendamentos from '../components/Agendamentos/AgendamentosTela.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
	{
    path: '/Home',
    component: Home
  },
	{
		path: '/CadastroUsuario',
		component: CadastroUsuario
	},
	{
		path: '/RecuperaConta',
		component: RecuperaConta
	},
  {
    path: '/CriacaoUsuario',
    component: CriacaoUsuario
  },
  {
    path: '/agendamentos',
    component: Agendamentos
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
