<template>
	<div class="fudao">
		<div class="cor-braca01">

		</div>
		<div class="cor-branca02">
			<div class="logo">
				<img src="https://s3-alpha-sig.figma.com/img/8501/1dd5/a73ae3937112b166e926ef385c33c1b2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fNKuBfDwl51NrD3U8J8lkc7cU66DyzLjJjNtY8A-Z7lxJXr24cVFc1FEQG6ujKjXVHwyKZ3m9-kmmFlO6fYt0-mLAH83D0hyp~vpbZ9yEk3PBG5akC0zg-dIr04qfxBJeJcG8BG-lWssThT3vv~zAvFkw0iLROmVN2YLjm3UA2Pyw2f4ft-a3tLJEJF3fGCUYE7U07t0iwZ2iw7kWLAWDc1hvfid~h9jgIYkFCtADp3ajZKlMMoOel9kTdkNwwW3uwdb6Vv32zwdbPtus3xyKdnBMuvZ8AyknOo-XymS68CmDWOUADxZoDVftLYnGlUp9nkqn2dKtaSM4CWt0fS5rA__" alt="Imagem">
			</div>
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
.fudao {
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

	background: linear-gradient(-173deg, blue 70%, transparent 70%);
}

.logo {

}
</style>
