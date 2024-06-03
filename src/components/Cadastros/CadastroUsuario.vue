<template>
	<div class="fundao">
		<div class="cor-braca01">
			<div class="div-botao-voltar">
				<button class="botao-volta"></button>
			</div>
			<div class="format-frases">
				<h1>Criar uma conta</h1>
				<h5>Insira os detalhes da sua conta</h5>
			</div>
		</div>
		<div class="cor-branca02">
			<img class="logo"
				src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZKoaLpBs7nqpKlIquVnOSvNM-bJe78FmymgCOCguzrFfwIJwQjk9F6gu59udz8wbqB0ULTUlVRg9oRZWFsdhBUELgH3Oze3Ws=w1440-h731-rw-v1"
				alt="Imagem" />
		</div>

		<div class="form">
			<form action="">

				<div id="inputs-container">
					<b-col role="group">

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Nome Completo</h3>
								<b-form-input type="text" class="custom-input" id="input-none" :state="null" v-model="cadastro.name"
									placeholder="Inserir nome">
								</b-form-input>
							</b-col>
						</b-row>


						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Celular</h3>
								<b-form-input type="text" class="custom-input" id="input-valid" :state="null"
									v-model="cadastro.telefone" placeholder="() _ _ _ _-_ _ _ _"></b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Email</h3>
								<b-form-input type="text" class="custom-input" id="input-valid" :state="null" v-model="cadastro.email"
									placeholder="Inserir email"></b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Senha</h3>
								<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
									v-model="cadastro.password" placeholder="Inserir senha"></b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Confirmação senha</h3>
								<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
									v-model="cadastro.passwordConfirm" placeholder="Confirmar senha">
								</b-form-input>
							</b-col>
						</b-row>

						<div class="div-botao">
								<button class="botao-avancar" @click="botaoApiAvancar">Avançar</button>
						</div>

					</b-col>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cadastro: {
				name: '',
				telefone: '',
				email: '',
				password: '',
				passwordConfirm: ''
			}
		};
	},
	methods: {
		botaoApiAvancar() {
			if(!this.cadastro.name || !this.cadastro.telefone || !this.cadastro.email || !this.cadastro.password || !this.cadastro.passwordConfirm) {
				alert('Para prosseguir, é necessário preencher todos os campos!');
			}

			fetch('http://localhost:8090/users', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					name: this.cadastro.name,
					cellPhone: this.cadastro.telefone,
					email: this.cadastro.email,
					password: this.cadastro.password,
					passwordConfirm: this.cadastro.passwordConfirm
				})
			})
			.then(response => {
				if (!response.ok) {
					throw new Error('Erro ao enviar solicitação');
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
		}
	}
};
</script>

<style>
.fundao {
	background-color: #e53a3a;
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
}

.cor-braca01 {
	width: 70%;
	height: 32%;
	background-color: white;
	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.cor-branca02 {
	flex: 1;
	height: 32%;
	background: linear-gradient(-173deg, white 70%, transparent 70%);
}

.div-botao-voltar {
	padding: 28px;
	width: 20%;
	height: 42%;
	padding-left: 0;
}

.botao-volta {
	background-image: url('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZzbM-uIb8_4nKlfC6CDUBm6a65ZDOf_PQ19mZOKGnh_HHR_VybzEqWwjsDYr9SP0izGPyEszeGrColHoAWCaercGOffbrzcQ=w1392-h778');
	background-size: 35px;
	background-repeat: no-repeat;
	background-color: white;
}

.logo {
	width: 35%;
	height: 50%;
	margin-top: 30px;
	margin-left: 70px;
}

.format-frases {
	padding-left: 30px;
	text-align: left;
	color: red;
}

.form {
	color: white;
	width: 50%;
	height: 100vh;
	position: absolute;
	top: 30%;
	display: flex;
	flex-direction: column;
}


.nome-form {
	margin-bottom: 10px;
	text-align: left;
	width: 100%;
	font-size: 20px;
}

input {
	width: 500px;
	height: 50px;
	border-radius: 5px;
	border: white;
	padding: 0 15px;
}

.div-botao {
	margin-top: 20px;
}

.botao-avancar {
	width: 65%;
	height: 80px;
	border: none;
	color: white;
	background-color: #952626;
	border-radius: 5px !important;
}
</style>
