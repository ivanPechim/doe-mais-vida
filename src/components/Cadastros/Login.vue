<template>
	<div id="fundo" class="fundo-total">
		<div class="caixa-red">

			<img
				src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYixnn4eaGcvmb8GPHBKGDDU0WWry9IdLgmQmmRMoo5zPQ6L6w67UXrOHyqbph3MTeUgM5TlIaiJuHqoohY8gFRolxn01CMLxc=w1872-h958"
				alt="Logo do projeto">

			<div class="caixa-escura">
				<div class="caixa-para-botoes">
					<b-button key="botaoEmail" :variant="buttonVariant01" pill @click="changeColor(1)">E-mail</b-button>
					<b-button key="botaoCelular" :variant="buttonVariant02" pill @click="changeColor(2)">Celular</b-button>
				</div>

				<b-container class="tudao">
					<form action="">

					</form>
					<div v-if="buttonVariant01 === 'danger'" class="informacoes-email">
						<div>
							<h1 class="texto-h1">Cadastrar conta com o meu email</h1>
						</div>
						<div id="inputs-container">
							<b-col role="group">
								<b-row class="my-1">
									<b-col md="8" offset-md="2">
										<b-form-input class="custom-input" id="input-none" :state="null" v-model="infoLogin.user"
											placeholder="Inserir email"></b-form-input>
									</b-col>
								</b-row>
								<b-row class="my-1">
									<b-col md="8" offset-md="2">
										<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
											v-model="infoLogin.password" placeholder="Inserir senha"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
						</div>
						<b-container class="login">
								<b-button variant="light" class="primeiro-botao-padrao" @click="entrarApi">Entrar</b-button>
						</b-container>
						<b-container>
							<router-link to="/CadastroUsuario">
								<b-button variant="light" class="botao-padrao">Criar conta</b-button>
							</router-link>
						</b-container>
						<b-container>
							<b-button variant="light" class="botao-padrao img-google">Entrar com Google</b-button>
						</b-container>
						<router-link to="/RecuperaConta">
							<a href="" class="link-conta">Esqueci minha senha</a>
						</router-link>
					</div>



					<div v-if="buttonVariant02 === 'danger'" class="informacoes-celular">
						<div>
							<h1 class="texto-h1">Cadastrar conta com o meu celular</h1>
						</div>
						<div id="inputs-container">
							<b-col role="group">
								<b-row class="my-1">
									<b-col md="8" offset-md="2">
										<b-form-input class="custom-input" id="input-none" :state="null"
											placeholder="Inserir número de telefone"></b-form-input>
									</b-col>
								</b-row>
								<b-row class="my-1">
									<b-col md="8" offset-md="2">
										<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
											placeholder="Inserir senha"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
						</div>
						<div class="botoes-login">
							<b-container class="login">
								<b-button variant="light" class="primeiro-botao-padrao" @click="entrarApi">Entrar</b-button>
							</b-container>
							<b-container>
								<router-link to="/CadastroUsuario">
									<b-button variant="light" class="botao-padrao">Criar conta</b-button>
								</router-link>
							</b-container>
							<b-container>
								<b-button variant="light" class="botao-padrao img-google">Entrar com Google</b-button>
							</b-container>
							<router-link to="/RecuperaConta">
								<a href="" class="link-conta">Esqueci minha senha</a>
							</router-link>
						</div>
					</div>

				</b-container>
			</div>
		</div>
		<div class="caixa-white">

		</div>
	</div>
</template>

<script>
// import axios from 'axios';

export default {
	name: "LoginLogar",
	data() {
		return {
			buttonVariant01: 'light',
			buttonVariant02: 'light',
			name: '',
			nameState: null,
			infoLogin: {
				user: '',
				password: ''
			}
		}
	},
	methods: {
		entrarApi() {
			if(!this.infoLogin.user || !this.infoLogin.password) {
				alert('Por favor, preencha todos os campos antes de prosseguir!');
				return
			}

			fetch("http://localhost:8090/users/login", {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					emailOrPhone: this.infoLogin.user,
					password: this.infoLogin.password
				})
			})
				.then(response => {
					if (!response.ok) {
						if(response === 400) {
							alert('Usuário ou senha incorretos. Por favor, tente novamente.');
						} else {
							throw new Error('Erro ao enviar solicitação');
						}
					}
					return response.json();
				})
				.then(data => {
					console.log(data);
					this.$router.push('/Home');
				})
				.catch(error => {
					console.log('Erro ao enviar solicitação: ', error);
				})

		},
		changeColor(buttonNumber) {
			if (buttonNumber === 1) {
				this.buttonVariant01 = 'danger';
				this.buttonVariant02 = 'light';
			} else if (buttonNumber === 2) {
				this.buttonVariant01 = 'light';
				this.buttonVariant02 = 'danger';
			}
		}
	}
}
</script>

<style>
.fundo-total {
	display: flex;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-color: violet;
	flex-direction: column;
}

.caixa-red {
	padding-top: 50px;
	width: 100vw;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

img {
	width: 100px;
	height: 100px;
	margin-bottom: 50px;
}

.caixa-white {
	top: 0;
	left: 0;
	width: 100vw;
	height: 25vh;
	background-color: white;
}

.caixa-escura {
	padding: 30px;
	margin: auto;
	position: relative;
	background-color: #952626;
	width: 95%;
	height: 100%;
	border-radius: 15px;
}

.caixa-para-botoes {
	padding: 5px;
	margin: auto;
	border-radius: 30px;
	width: 25%;
	height: 10%;
	background-color: white;
	display: flex;
	justify-content: space-evenly;
}

button {
	border-radius: 10px;
	padding: 10px;
	width: 48%;
	height: 100%;
	border: none;
	background-color: #EE3C3C;
}

.tudao {
	display: flex;
	justify-content: center;
}

.informacoes-email,
.informacoes-celular {
	margin-top: 50px;
	width: 50%;
	height: 90%;
}

.texto-h1 {
	font-size: 20px;
	color: white;
}

#inputs-container {
	margin-top: 30px;
	margin-bottom: 20px;
}

.primeiro-botao-padrao,
.botao-padrao {
	margin-bottom: 10px;
	width: 340px;
	height: 60px;
}

.custom-input {
	width: 100% !important;
	font-size: 18px !important;
	margin-bottom: 8px;
	background-color: transparent !important;
	border-color: white !important;
	color: white !important;
}

.custom-input::placeholder {
	color: white !important;
}

.login {
	margin-top: 20px;
}

.img-google {
	background-image: url('https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihYheWWML1vouTa9zOFe3BNlyKE4c8d_1GU2PxIQJzFNlwdR9quoU9_ThjVTnZiDX8UvkJAD1rcXTD3MfEcfKeq6t-K65dBuEuo=w1920-h910');
	background-size: 50px;
	background-position: left center;
	background-repeat: no-repeat;
	padding-left: 30px;
}

.link-conta {
	color: white;
	text-align: left;
}
</style>
