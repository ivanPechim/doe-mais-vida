<template>
	<div>
        <div class="bg-VermelhoTopo">
            <h1 class="letraVermelha">a</h1>
		<div>
            <div class="bg-Vermelho">
                <b-row>
                    <b-col><h3>HOME</h3></b-col>
                </b-row>
                <b-row>
                    <b-col></b-col>
                    <b-col class="caixa"><br>12966<br>Doadores<br><b-button variant="light" pill size="lg"><router-link to="/CriacaoUsuario">ENCONTRAR DOADOR</router-link></b-button></b-col>
                    
                    <b-col class="caixa"><br>20976<br>Precisam de um doador<br><b-button variant="light" pill size="lg"><router-link to="/RecuperarConta"><br>QUERO DOAR</router-link></b-button></b-col>
                    <b-col></b-col>
                    <br>
                </b-row>
            </div>
            </div>
            <div class="bg-Branco">
                <b-row>
                    <b-col>HISTORIAS DE USUARIOS</b-col>
                </b-row>
                <h3 class="texto">Júlia Figueiredo ✅<br><h10 class="texto2">🕗6m ago 📍Hemominas</h10></h3><br>
                
                <p>    
                    <img class="img" alt="img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFGi7fiSBBKzmi0NAiQPemvKlvi834XkxNsJ_LI2Vv80XMGOwX">
                </p>
                <p class="texto">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using Lorem
                </p>
                <h3 class="texto">Ana Paula ✅<br><h10 class="texto2">🕗6m ago 📍Hemominas</h10></h3><br>
                
                <p class="texto2">    
                    <img class="img" alt="img" src="https://www.crmpr.org.br/dbimages/doanmdo-sangue_20888_img.jpg">
                </p>
                <p class="texto">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using Lorem
                </p>

            </div>
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
.caixa {
	padding: 5px;
	margin: auto;
	border-radius: 30px;
	width: 25%;
	height: 10%;
	background-color: rgb(244, 84, 84);
	display: flex;
	justify-content: space-evenly;
}

* {
	margin: 0;
	padding: 0;
}

.img{
	margin-left: 100px;
    float: left; 
    width: 1580px; 
    height: 1121px;
	background-color: white;   
}

.img-Perfil{
    width: 1580px; 
    height: 1121px;
}

.bg-Vermelho {
	background-color: rgb(236, 60, 60);
    color: white;
    width: 100%;
	height: 100%;
    margin-bottom: 50px;
    margin-top: 30px;
}
.bg-VermelhoTopo {
	background-color: rgb(236, 60, 60);
    color: white;
    width: 100%;
	height: 100%;
}


.bg-Branco {
	background-color: white;   
    color: black;
}

.texto{
    font-size: 20px;
    text-align: left;
}

.texto2{
    text-align: left;

    font-size: 15px;
    color: gray;
}

.letraVermelha{
    color: rgb(236, 60, 60);
}

*h10{
    font-size: 15px
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
