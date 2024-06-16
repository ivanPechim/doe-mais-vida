<template>
    <div class="fundo">
        <div class="cor_branca_01">

        </div>
        <div class="cor_branca_02">
            <img class="logo" 
            src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZKoaLpBs7nqpKlIquVnOSvNM-bJe78FmymgCOCguzrFfwIJwQjk9F6gu59udz8wbqB0ULTUlVRg9oRZWFsdhBUELgH3Oze3Ws=w1440-h731-rw-v1" alt="imagem">

				<div class="format_frases">
					<h1>Alterar Imagem</h1>
						<img class="alterar_Imagem" 
						src="./Captura de tela 2024-06-16 120019.png" alt="imagem">
				</div>
        </div>

		<div class="formulario">

			<b-row class="m_01">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form">Nome Completo</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Inserir nome">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_01">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form">Email</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Inserir email">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_01">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form">Telefone</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="(xx) x xxxxxxxx">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_01">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form">Celular</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="(xx) x xxxxxxxx">
					</b-form-input>
				</b-cow>
			</b-row>
		</div>

		<div class="formulario_2">

			<b-row class="m_02">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_2">País de Residência</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o País">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_02">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_2">Cidade / Município</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Cidade ou Município">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_02">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_2">Endereço</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o Endereço">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_02">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_2">Bairro</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o Bairro">
					</b-form-input>
				</b-cow>
			</b-row>
			
		</div>

		<div class="formulario_3">
			<b-row class="m_03">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_3">Estado</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o Estado">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_03">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_3">Nº da Casa</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o número">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_03">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_3">Complemento</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o complemento">
					</b-form-input>
				</b-cow>
			</b-row>

			<b-row class="m_03">
				<b-cow  md="8" offset-md="2">
					<h3 class="nome_form_3">CEP</h3>
					<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null"
									placeholder="Digite o CEP">
					</b-form-input>
					
				</b-cow>
			</b-row>
		
		<div class="botao">
			<button class="botao_salvar" @click="botaoApiSalvar">Salvar</button>
		</div>

			
		</div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.fundo{
    background-color: #e53a3a;
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
}

.cor_branca_01 {
	width: 70%;
	height: 32%;
	background-color: white;
	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.cor_branca_02 {
	flex: 1;
	height: 32%;
	background: linear-gradient(-173deg, white 70%, transparent 70%);
}

.logo {
	width: 35%;
	height: 50%;
	margin-top: 30px;
	margin-left: 70px;
}

.format_frases {
	text-align: left;
	color: red;
	padding-right: 40px;
	right: 60%;
	position: absolute;
	display: flex;
	z-index: 2;
	
}

.alterar_Imagem{
	width: 40%;
	height: 80%;
	margin-right: 5px;
	display: flex;
	position:static;
}

.m_01 {
	margin-bottom: 10px;
	text-align: left;
	width: 100%;
	font-size: 20px;
	margin-top: 10px;
}

.m_02 {
	margin-bottom: 10px;
	text-align: right	;
	width: 100%;
	font-size: 20px;
	margin-top: 10px;
}

.m_03 {
	margin-bottom: 10px;
	text-align: right;
	width: 250%;
	font-size: 20px;
	margin-top: 3px;
}

.formulario {
	color: black;
	width: 80%;
	position: absolute;
	top: 30%;
	display: flex;
	flex-direction: column;
}

.formulario_2 {
	color: black;
	width: 25%;
	position: absolute;
	top: 30%;
	display: flex;
	flex-direction: column;
}

.formulario_3 {
	color: black;
	width: 40%;
	right: 0px;
	position: absolute;
	top: 30%;
	display: flex;
	flex-direction: column;
}

.nome_form {
	margin-bottom: 10px;
	text-align: left;
	width: 100%;
	font-size: 30px;
	margin-top: 10px;
}

.nome_form_2 {
	margin-bottom: 10px;
	text-align: center;
	width: 100%;
	font-size: 30px;
	margin-top: 10px;
}

.nome_form_3 {
	margin-bottom: 10px;
	text-align: center;
	width: 100%;
	font-size: 30px;
	margin-top: 10px;
}

.botao {
	padding: 70px 70px;
    font-size: 20px;
	margin-bottom: 50px;
}





</style>