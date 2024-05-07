<template>
	<div id="fundo">
		<div
			class="bg-Color"
		>
			<b-row>
				<b-col><h1>Recuperar conta</h1></b-col>
			</b-row>
            <hr>
            <br>
            <br>
				<div>
                    <b> Deseja receber informações de recuperação de conta pelo e-mail ou telefone </b>
                    <br>
                    <b> ---><router-link to="">Por celular</router-link> ---><router-link to="">Por E-mail</router-link> </b>
				</div>
			<b-form class="form">
				<b-form-group>
					<b-form-group 
					>
						<b-form-input
							class="doe-input"
						>
						</b-form-input>
					</b-form-group>
					
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
