<template>
	<div class="fundim">
		<div class="branca-01">

		</div>

		<div class="branca-02">

		</div>
	</div>
</template>

<script>
export default {
	nome: "TipoSanguineo",
	data() {

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
	justify-content: center;
	background-color: #e53a3a;
}

.branca-01 {
	width: 100%;
	height: 32%;
	background-color: white;
	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.branca-02 {
	flex: 1;
	height: 32%;
	background: linear-gradient(-173deg, white 70%, transparent 70%);
}
</style>
