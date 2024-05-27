<template>
  <div class="tela-cheia">
		<img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYixnn4eaGcvmb8GPHBKGDDU0WWry9IdLgmQmmRMoo5zPQ6L6w67UXrOHyqbph3MTeUgM5TlIaiJuHqoohY8gFRolxn01CMLxc=w1872-h958" alt="Logo Doação">
    <div class="vemelho-fundo">
			<div class="caixa-vermelho-escuro">

			</div>
		</div>
		<div class="branco-fundo">

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
	display: flex;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	background-color: violet;
	flex-direction: column;
}

.vemelho-fundo {
	padding-top: 50px;
	width: 100%;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

img {
	width: 100px;
	height: 100px;
	margin: 0 auto 50px auto;
	padding-top: 30px;
}

.branco-fundo {
	top: 0;
	left: 0;
	width: 100vw;
	height: 25vh;
	background-color: white;
}


.caixa-vermelho-escuro {
	padding: 30px;
	margin: auto;
	position: relative;
	background-color: #952626;
	width: 95%;
	height: 100%;
	border-radius: 15px;
}
</style>
