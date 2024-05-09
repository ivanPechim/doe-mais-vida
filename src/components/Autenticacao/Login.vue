<template>
	<div id="fundo" class="fundo-total">

		<div class="caixa-red">
			<div class="logo">
				<img
					src="https://s3-alpha-sig.figma.com/img/8501/1dd5/a73ae3937112b166e926ef385c33c1b2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awZhkgqCwmLIUmOFDGAzPkBaB5MIBxUgbus2QYIIo6vIMl~cKy1h~SqWiHELbNZgGfT-~twlChRKHKLo9vqb0-kpKa5zcr3lDcHVaGT~DsmI52yp3AHXS483vX4Y1vbi2iynAlLIsrW4-SDykLfI~tAXfbUb410RIOFhjjlESWfcNfETzGSo1FdoMAo3feyCTtG5o~f~5KxeWUMZHO0sPiEHPVTZnDfCK3OhRWxySuQbe6cQNLEA3FzxHiqaX1WPtngzRF6WtyJT3ErLZkTPFUjCda4fEmgav9iB7kILtFLbW7Quko4u~9yPKf0gGSbm2DT~rDw7mPg2XGOSzE4E4Q__"
					alt="Logo do projeto">
			</div>
			<div class="caixa-escura">
				<div class="caixa-para-botoes">

					<b-button key="botaoEmail" :variant="buttonVariant01" pill @click="changeColor(1)">E-mail</b-button>
					<b-button key="botaoCelular" :variant="buttonVariant02" pill @click="changeColor(2)">Celular</b-button>

				</div>

				<!-- Div principal caso selecionado os botões "email" ou "celular" -->
				<b-container class="tudao">

					<!-- Condição caso clique no email -->
					<div v-if="buttonVariant01 === 'danger'" class="informacoes-email">
						<div>
							<h1 class="texto-h1">Cadastrar conta com o meu email</h1>
						</div>

						<div id="inputs-container">
							<b-col role="group">
								<label for="input-live"></label>
								<b-form-input id="input-live" v-model="name" :state="nameState"
									aria-describedby="input-live-help input-live-feedback" placeholder="Inserir e-mail"
									trim></b-form-input>

								<b-form-invalid-feedback id="input-live-feedback">
									Enter at least 3 letters
								</b-form-invalid-feedback>

								<b-form-text id="input-live-help"></b-form-text>

								<label for="input-live"></label>
								<b-form-input type="password" id="input-live" v-model="password" :state="passwordState"
									aria-describedby="input-live-help input-live-feedback" placeholder="Inserir senha"
									trim></b-form-input>
							</b-col>
						</div>

						<!-- botãoLogin -->
						<b-container class="login">
							<div>
									<b-button variant="light">Entrar</b-button>
							</div>
						</b-container>

						<!-- botão criar conta -->
						<b-container class="criar-conta">
							<div>
									<b-button variant="light">Criar conta</b-button>
							</div>
						</b-container>

						<!-- botão entrar com google -->
						<b-container >
							<div>
									<b-button variant="light" class="botao-padrao">Entrar com Google</b-button>
							</div>
						</b-container>

					</div>


					<!-- Condição caso clique no celular -->
					<div v-if="buttonVariant02 === 'danger'" class="informacoes-celular">
						<div>
							<h1 class="texto-h1">Cadastrar conta com o meu celular</h1>
						</div>

						<div id="inputs-container">
							<b-col role="group">
								<label for="input-live"></label>
								<b-form-input id="input-live" v-model="name" :state="nameState"
									aria-describedby="input-live-help input-live-feedback" placeholder="Inserir número de celular"
									trim></b-form-input>

								<b-form-invalid-feedback id="input-live-feedback">
									Enter at least 3 letters
								</b-form-invalid-feedback>

								<b-form-text id="input-live-help"></b-form-text>

								<label for="input-live"></label>
								<b-form-input type="password" id="input-live" v-model="password" :state="passwordState"
									aria-describedby="input-live-help input-live-feedback" placeholder="Inserir senha"
									trim></b-form-input>
							</b-col>
						</div>

						<!-- botãoLogin -->
						<b-container class="login">
							<div>
									<b-button variant="light">Entrar</b-button>
							</div>
						</b-container>

						<!-- botão criar conta -->
						<b-container class="criar-conta">
							<div>
									<b-button variant="light">Criar conta</b-button>
							</div>
						</b-container>

						<!-- botão entrar com google -->
						<b-container>
							<div>
									<b-button variant="light" class="botao-padrao">Entrar com Google</b-button>
							</div>
						</b-container>

					</div>
				</b-container>
			</div>
		</div>
		<div class="caixa-white"></div>
	</div>
</template>

<script>
export default {
	name: "LoginLogar",
	data() {
		return {
			buttonVariant01: 'light',
			buttonVariant02: 'light',
			name: '',
			nameState: null,
			password: '',
			passwordState: null
		}
	},
	methods: {
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
	width: 100px;
	height: 100px;
	margin: 0;
	padding: 0;
	background-color: violet;
	flex-direction: column;
}

.caixa-red {
	width: 100vw;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

img {
	width: 100px;
	height: 100px;
}

.caixa-white {
	top: 0;
	left: 0;
	width: 100vw;
	height: 25vh;
	background-color: white;
}

.logo {
	padding: 30px;
}

.caixa-escura {
	padding: 30px;
	margin: auto;
	position: relative;
	background-color: #952626;
	width: 95%;
	height: 95%;
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

.informacoes-email {
	margin-top: 50px;
	width: 50%;
	height: 90%;
	/* background-color: violet; */
}

.informacoes-celular {
	margin-top: 50px;
	width: 50%;
	height: 90%;
	/* background-color: violet; */
}

.texto-h1 {
	font-size: 24px;
	color: white;
}

#inputs-container {
	margin-bottom: 20px;
	/* background-color: blue; */
}

.botao-padrao {
	padding: 10px 20px;
	font-size: 100px;
	margin-top: 5px;
	margin-bottom: 20px;
}

.criar-conta {
	margin-top: 5px
}

</style>
