<template>
	<div class="tela-cheia">
		<div class="vermelha-caixa">
			<img
				src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYixnn4eaGcvmb8GPHBKGDDU0WWry9IdLgmQmmRMoo5zPQ6L6w67UXrOHyqbph3MTeUgM5TlIaiJuHqoohY8gFRolxn01CMLxc=w1872-h958"
				alt="Logo Doação">
			<div class="caixa-escura">
				<form action="">
					<b-row class="input">
						<b-col md="6" offset-md="3">
							<h3 class="nome-formulario">Redefinir senha</h3>
							<b-form-input type="text" class="custom-input" id="input-valid" :state="null"
								placeholder="Email/ Telefone">
							</b-form-input>
						</b-col>
					</b-row>
					<b-row>
						<b-col md="6" offset-md="3">
							<div class="proximo-button">
								<button class="botao-proximo">Próximo</button>
							</div>
						</b-col>
					</b-row>
				</form>
			</div>
		</div>
		<div class="caixa-white">

		</div>

	</div>
</template>

<script>
export default {
	name: 'MyComponent',
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style scoped>
img {
	width: 100px;
	height: 100px;
	margin: 45px auto 50px auto;
}

.tela-cheia {
	display: flex;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	background-color: #E53A3A;
	flex-direction: column;
}

.vermelha-caixa {
	padding-top: 20px;
	width: 100%;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

.caixa-white {
	top: 0;
	left: 0;
	width: 100vw;
	height: 25vh;
	background-color: white;
}


/* .caixa-vermelho-escuro {
	padding: 30px;
	margin: auto;
	position: relative;
	background-color: #952626;
	width: 95%;
	height: 100%;
	border-radius: 15px;
	justify-content: center;
} */

input {
	width: 50px;
	height: 50px;
	padding: 0 15px;
}

.nome-formulario {
	padding: 30px;
	width: 100%;
	margin-top: 10px;
	color: white;
}

.custom-input {
	width: 100%;
	height: 50%;
}

.botao-proximo {
	width: 100%;
	height: 80px;
	border: none;
	background-color: white;
	color: red;
	border-radius: 5px;
}

.proximo-button {
	padding-top: 30px;
}

.input {
	margin-bottom: 30px;
}
</style>
