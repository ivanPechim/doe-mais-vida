<template>
  <div class="tela-cheia">
    <div class="primeiro-branco">
			<div class="div-botao-voltar">
				<button class="botao-volta" @click="voltarPagina"></button>
			</div>
			<div class="format-frases">
				<h1>Criar uma conta</h1>
				<h5>Insira os detalhes da sua conta</h5>
			</div>
		</div>
		<div class="segundo-branco">
			<img class="logo"
				src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZKoaLpBs7nqpKlIquVnOSvNM-bJe78FmymgCOCguzrFfwIJwQjk9F6gu59udz8wbqB0ULTUlVRg9oRZWFsdhBUELgH3Oze3Ws=w1440-h731-rw-v1"
				alt="Imagem" />
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

<style>

.tela-cheia {
	width: 100%;
	height: 100vh;
	background-color: red;
	padding: 0;
	margin: 0;
	display: flex;
}

.primeiro-branco {
	width: 70%;
	height: 32%;
	background-color: white;
	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.segundo-branco {
	flex: 1;
	height: 32%;
	background-color: white;
	background: linear-gradient(-173deg, white 70%, transparent 70%);
}
</style>
