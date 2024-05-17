<template>
	<div class="fundao">
		<div class="cor-braca01">
			<div class="div-botao-voltar">
				<button class="botao-volta">

				</button>
			</div>
			<div class="format-frases">
				<h1>Criar uma conta</h1>
				<h5>Insira os detalhes da sua conta</h5>
			</div>
		</div>
		<div class="cor-branca02">
			<img class="logo"
				src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZKoaLpBs7nqpKlIquVnOSvNM-bJe78FmymgCOCguzrFfwIJwQjk9F6gu59udz8wbqB0ULTUlVRg9oRZWFsdhBUELgH3Oze3Ws=w1440-h731-rw-v1"
				alt="Imagem">
		</div>

		<div class="form">
			<form action="">

				<h1 class="nome-form">Nome Completo</h1>
				<b-col md="4" offset-md="2">
					<input type="text" class="nome" name="nome" placeholder="Inserir nome completo">
				</b-col>
				
				<h1 class="nome-form">Celular</h1>
				<b-col md="4" offset-md="2">
					<input type="text" class="tel" name="tel" placeholder="(xx) xxxxx-xxxx">
				</b-col>

				<h1 class="nome-form">Email</h1>
				<b-col md="4" offset-md="2">
					<input type="text" class="email" name="email" placeholder="Inserir email">
				</b-col>

				<h1 class="nome-form">Senha</h1>
				<b-col md="4" offset-md="2">
					<input type="password" class="senha" name="senha" placeholder="Inserir senha">
				</b-col>

				<h1 >Confirmação senha</h1>
				<b-col md="4" offset-md="2">
					<input type="password" class="senha" name="senha" placeholder="Confirmar Senha">
				</b-col>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style>
.fundao {
	background-color: #E53A3A;
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
	/* background: linear-gradient(to bottom right, blue 50%, transparent 50%); */

	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.cor-branca02 {
	flex: 1;
	height: 32%;
	/* background: linear-gradient(to bottom left, blue 50%, transparent 50%); */

	background: linear-gradient(-173deg, white 70%, transparent 70%);
}

.div-botao-voltar {
	padding: 28px;
	width: 20%;
	height: 42%;
	/* background-color: red; */
	padding-left: 0;
}

.botao-volta {
	background-image: url('https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZzbM-uIb8_4nKlfC6CDUBm6a65ZDOf_PQ19mZOKGnh_HHR_VybzEqWwjsDYr9SP0izGPyEszeGrColHoAWCaercGOffbrzcQ=w1392-h778');
	background-size: 35px;
	background-repeat: no-repeat;
	background-color: white;
}

.logo {
	width: 50%;
	height: 65%;
	margin-top: 20px;
	margin-left: 70px;
}

.format-frases {
	padding-left: 30px;
	text-align: left;
	color: red;
}

.form {
	color: white;
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 30%;
	display: flex;
	justify-content: center;
}

.nome-form {

}

input {
	
}
</style>
