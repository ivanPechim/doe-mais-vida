<template>
	<div class="fundao">
		<div class="cor-branca01">
			<div class="div-botao-voltar">
				<button @click="volta" class="botao-volta"></button>
			</div>
			<div class="cumprimentos">
				<h1>Olá, {{ cadastro.name }}</h1>
			</div>
			<div class="foto-perfil">
				<img class="foto-config">
			</div>
		</div>
		<div class="cor-branca02">
			<img class="logo"
				src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZKoaLpBs7nqpKlIquVnOSvNM-bJe78FmymgCOCguzrFfwIJwQjk9F6gu59udz8wbqB0ULTUlVRg9oRZWFsdhBUELgH3Oze3Ws=w1440-h731-rw-v1"
				alt="Imagem" />
		</div>
		<div class="info-branco">
			<form action="">
				<div id="inputs-container">
					<button class="botao-editar" @click="goToCadastroUsuario"><i class="fas fa-edit"></i></button>
				</div>
				<hr>
				<div class="info-pessoal">
					<div class="left">
						<h1>Nome Completo:</h1>
						<h1>Email:</h1>
						<h1>Telefone:</h1>
						<h1>País:</h1>
						<h1>Cidade:</h1>
					</div>
					<div class="right">
						<h5>Breno Jesus Andrade</h5>
						<h5>Breno.Jesus.rade22@gmail.com</h5>
						<h5>(31)98224-5689</h5>
						<h5>Brasil</h5>
						<h5>Contagem</h5>
					</div>
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
				name: ''
			}
		}
	},
	methods: {
		volta() {
			this.$router.push('/home');
		},
		goToCadastroUsuario() {
			this.$router.push('/perfilEdit');
		}
	}

}


</script>

<style scoped>
.fundao {
	background-color: #e53a3a;
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
}

.cor-branca01 {
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
	margin-top: 60px;
	margin-left: 70px;
}

.cumprimentos {
	width: 35%;
	height: 50%;
	margin-top: 30px;
	margin-left: 470px;
	display: flex;
}

.cumprimentos h1 {
	margin-top: -40px;
}

.foto-perfil .foto-config {
	margin-top: -235px;
	margin-left: 290px;
	margin-right: 0px;
	width: 150px;
	height: 150px;
	display: flex;
	border-radius: 80px;
	background-color: red;
}

.info-branco {
	color: black;
	background-color: white;
	width: 40%;
	position: absolute;
	top: 30%;
	display: flex;
	flex-direction: column;
}

.botao-editar {
	background: none;
	display: flex;
	float: right;
	margin-right: 20px;
	margin-bottom: 20px;
	width: 7%;
	font-size: 40px;
}

.info-pessoal {
	display: flex;
	justify-content: space-between;
	width: 100%;
	columns: 2;
	margin-top: 80px;
	padding: 15px;
}

.left,
.right {
	display: flex;
	flex-direction: column;
}

.left {
	align-items: flex-start;
}

.right {
	align-items: flex-end;
}

.info-pessoal h5 {
	margin-top: 15px;
	margin-bottom: 40px;
}

.info-pessoal h1 {
	margin-bottom: 30px;
}
</style>
