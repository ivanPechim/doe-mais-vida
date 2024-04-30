<template>
	<div id="fundo">
		<b-card class="card">
			<b-form class="form">
				<b-form-group>
					<b-form-group 
						label="Digite o seu usuário:"
					>
						<b-form-input>
						</b-form-input>
					</b-form-group>
					<b-form-group 
						label="Digite sua senha:"
					>
						<b-input>
						</b-input>
					</b-form-group>
					<b-button>
						Entrar
					</b-button>
				</b-form-group>
			</b-form>
			<b-card-footer
				no-style 
				class="footer"
			>
				<b-button>
					Esqueceu a senha ?
				</b-button>
				<b-button>
					Registrar-se
				</b-button>
			</b-card-footer>
		</b-card>
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

#fundo {
	width: 100%;
}

.card {
	display: flex;
	align-items: center;
	justify-items: center;
	border: 0;
}

.form {
	margin: 1px solid black;
	width: 25em;
	height: 25em;
}

.footer {
	display: flex;
	justify-content: space-between	
}
</style>
