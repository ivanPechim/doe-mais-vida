<template>
	<div class="fundim">
		<div class="branca-01">
			<div class="div-button-voltar">
				<button @click="volta" class="button-voltar"></button>
			</div>
			<div class="frases-format">
				<h1>Criar uma conta</h1>
				<h5>Insira os detalhes da sua conta</h5>
			</div>
		</div>
		<div class="branca-02">
			<img class="logo" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbUv5wgvUgYyvcVX-IUlumjx501MOxaNJdltgWr5LV-uoZwMhOkQNQ5YtI3FDaSnDsM24Q2UCRecf3SgOZyoFTOKg0oD4NRNmY=w1920-h947-rw-v1" alt="imagem">
		</div>

		<div>
			
		</div>
	</div>
</template>

<script>
export default {
	nome: "TipoSanguineo",
	data() {

	},
	methods: {
		volta() {
			this.$router.push('/CadastroUsuario')
		}
	}
}
</script>

<style scoped>

.fundim {
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	/* justify-content: center; */
	background-color: #e53a3a;
}

.branca-01 {
	width: 70%;
	height: 32%;
	background-color: white;
	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.branca-02 {
	flex: 1;
	height: 32%;
	background: linear-gradient(-173deg, white 70%, transparent 70%);
}

.div-button-voltar {
	padding: 28px;
	width: 20%;
	height: 42%;
	padding-left: 0;
}

.button-voltar {
	background-image: url('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbNCHTfF_kKbI3xCpOW-8wjkRBJCQ1ituKfiSZSffg8KgSIs2HKCx81O6AcxrV3lFRgqgrBi4mO0Qh23_aVViUTUEdCuSezaQ=w1920-h947');
	background-size: 35px;
	background-repeat: no-repeat;
	background-color: white;
}

.frases-format {
	padding-left: 30px;
	text-align: left;
	color: red;
}

.logo {
	width: 35%;
	height: 50%;
	margin-top: 30px;
	margin-left: 70px;
}
</style>
