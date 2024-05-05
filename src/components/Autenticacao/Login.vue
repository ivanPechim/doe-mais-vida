<template>
	<div id="fundo">
		<div
			class="bg-Color"
		>
			<b-row class="mb-5">
				<b-col></b-col>
				<b-col>Ajude o próximo!</b-col>
			</b-row>
			<b-form class="form">
				<b-form-group>
					<b-form-group 
						label="Digite o seu usuário:"
					>
						<b-form-input
							class="doe-input"
						>
						</b-form-input>
					</b-form-group>
					<b-form-group 
						label="Digite sua senha:"
					>
						<b-form-input
							class="doe-input"
						
						>
						</b-form-input>
					</b-form-group>
					<b-button>
						Entrar
					</b-button>
				</b-form-group>
				<div class="footer-form">
					<b-button>
						Esqueceu a senha ?
					</b-button>
					<b-button>
						Registrar-se
					</b-button>
				</div>
			</b-form>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginLogar",
	data() {
		return {

		}
	}
}

</script>

<style>
* {
	margin: 0;
	padding: 0;
}

.bg-Color {
	background-color: rgb(225,235,245);
}


.form {
	width: 40em;
	height: 40em;
	overflow: hidden;
}

#fundo {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.footer-form {
	display: flex;
	justify-content: space-between;
}
</style>
