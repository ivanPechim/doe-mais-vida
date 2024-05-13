<template>
	<div class="fundao">
		<div class="cor-braca01">
			<div class="div-botao">
				<button class="botao-volta">

				</button>
			</div>
			<div class="format-frases">
					<h1>Criar uma conta</h1>
					<h5>Insira os detalhes da sua conta</h5>
			</div>
		</div>
		<div class="cor-branca02">
			<img class="logo" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZKoaLpBs7nqpKlIquVnOSvNM-bJe78FmymgCOCguzrFfwIJwQjk9F6gu59udz8wbqB0ULTUlVRg9oRZWFsdhBUELgH3Oze3Ws=w1440-h731-rw-v1" alt="Imagem">
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
	background-color: red;
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
}

.cor-braca01 {
	width: 70%;
	height: 40%;
	background-color: white;
	/* background: linear-gradient(to bottom right, blue 50%, transparent 50%); */

	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.cor-branca02 {
	flex: 1;
	height: 40%;
	/* background: linear-gradient(to bottom left, blue 50%, transparent 50%); */

	background: linear-gradient(-173deg, white 70%, transparent 70%);
}

.div-botao {
	padding: 30px;
	width: 20%;
	height: 34%;
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
	height: 55%;
	margin-top: 50px;
	margin-left: 50px;
}

.format-frases {
	padding: 10px;
	/* padding-left: 0; */

	color: red;
}

</style>
