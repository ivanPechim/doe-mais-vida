fo<template>
	<div id="fundo">
		<div class="bg-Color">
            <div class="azul">
            <b-row>
				<b-col>Central do Usuario</b-col>
				<b-col></b-col>
			</b-row>
            </div>
			<b-row>
				<b-col>
                <br>
                <br>
                <br>Criação de Usuário</b-col>
				<b-col></b-col>
			</b-row>
            <hr>
			<b-form class="form">
				<b-form-group>
					<b-form-group 
						label="Usuário de conexão:"
					>
						<b-form-input
							class="doe-input"
						>
						</b-form-input>
					</b-form-group>
					<b-form-group 
						label="Nome Completo:"
					>
						<b-form-input
							class="doe-input"
						
						>
						</b-form-input>
					</b-form-group>
                    <b-form-group 
						label="E-mail:"
					>
						<b-form-input
							class="doe-input"
						>
						</b-form-input>
					</b-form-group>
                    <b-form-group 
						label="Senha:"
					>
						<b-form-input
							class="doe-input"
						>
						</b-form-input>
					</b-form-group>
                    <b-row class="mb-5">
                    <b-col id="descricao">Sua senha deve conter <b id="preto">8 ou mais caracteres</b> para que haja o mínimo de segurança.</b-col>
                    </b-row>
                    <b-form-group 
						label="Confirmação de senha:"
					>
						<b-form-input
							class="doe-input"
						>
						</b-form-input>
					</b-form-group>
					<b-button>
                        <router-link to="/">Acessar</router-link>
					</b-button>
				</b-form-group>
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

.azul {
	background-color: rgb(0,0,255);
    color: rgb(255,255,255);
}

#preto{
    color: black;
}

#descricao {
    color: gray;
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