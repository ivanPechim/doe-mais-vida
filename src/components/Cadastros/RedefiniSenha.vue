<template>
	<div class="total">
		<div class="vermelha-caixa">
			<div class="button-volta-logo">
				<button @click="volta" class="button-volta"></button>
				<img
					src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYixnn4eaGcvmb8GPHBKGDDU0WWry9IdLgmQmmRMoo5zPQ6L6w67UXrOHyqbph3MTeUgM5TlIaiJuHqoohY8gFRolxn01CMLxc=w1872-h958"
					alt="logo Projeto">
			</div>

			<div class="caixa-escura">
				<h1 class="primeiro-frase">Redefinir Senha</h1>

				<b-row>
					<b-col md="6" offset="3">
						<h5 class="frase-nome">Nova senha:*</h5>
						<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
							placeholder="Senha"></b-form-input>
					</b-col>
				</b-row>

				<b-row class="ajuste-inputs">
					<b-col md="6" offset="3">
						<h5 class="frase-nome">Confirmar a nova senha:*</h5>
						<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
							placeholder="Confirmar senha"></b-form-input>
					</b-col>
				</b-row>

				<b-row>
					<b-col md="6" offset="3">
						<div class="button-confirm">
							<button class="proximo-botao">Confirmar</button>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>
		<div class="caixa-white">

		</div>
	</div>
</template>

<script>
export default {
	name: 'redefinirSenha',
	data() {
		return {

		}
	},
	methods: {
		volta() {
			this.$router.push('/');
		}
	}
}
</script>

<style scoped>
.total {
	display: flex;
	background-color: violet;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	flex-direction: column;
}

.vermelha-caixa {
	padding-top: 50px;
	width: 100vw;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

.primeiro-frase {
	color: white;
	padding: 30px;
}

.frase-nome {
	color: white;
	text-align: left;
	padding-bottom: 10px;
}

.ajuste-inputs {
	padding-top: 10px;
}

.custom-input {
	padding: 25px;
}

.button-confirm {
	padding-top: 30px;
}

.proximo-botao {
	background-color: white;
	color: red;
	border-radius: 5px;
	border: none;
	width: 100%;
	height: 80px;
}

.button-volta-logo {
	display: flex;
	align-items: center;
	padding: 28px;
	width: 97%;
	height: 30%;
	padding-left: 40px;
}

.button-volta {
	background-image: url('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaEZ_YjWdSH6KXHzp9Zerg-Zz3OntkaM-fE4TzvsgwJ46eck2DisOROLbd1s0gKCiFqIPCasKwhLDXn7CN7vLEsI92NKzmRkDk=w1920-h947');
	background-size: 40px;
	background-repeat: no-repeat;
	background-color: #E53A3A;
}
</style>
