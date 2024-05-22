<template>
	<b-container>
		<div class="bg-VermelhoTopo">
			<div class="bg-Vermelho">
				<b-row>
					<b-col>
						<h3>HOME</h3>
					</b-col>
				</b-row>
				<b-row>
					<b-col
						class="d-flex justify-content-center"
					>
						<div class="caixa">
							<p class="">
								20976
								<br>
								Precisam de um doador
							</p>
							<b-button
								type="button"
								class="btn"
								variant="light"
							>
								Quero doar
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<div class="bg-Branco">
				<b-row>
					<b-col>HISTORIAS DE USUARIOS</b-col>
				</b-row>
				<h3 class="texto">Júlia Figueiredo ✅<br>
					<h10 class="texto2">🕗6m ago 📍Hemominas</h10>
				</h3><br>
	
				<p>
					<img class="img" alt="img"
						src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFGi7fiSBBKzmi0NAiQPemvKlvi834XkxNsJ_LI2Vv80XMGOwX">
				</p>
				<p class="texto">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking
					at its layout. the point of using Lorem
				</p>
				<h3 class="texto">Ana Paula ✅<br>
					<h10 class="texto2">🕗6m ago 📍Hemominas</h10>
				</h3><br>
	
				<p class="texto2">
					<img class="img" alt="img" src="https://www.crmpr.org.br/dbimages/doanmdo-sangue_20888_img.jpg">
				</p>
				<p class="texto">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking
					at its layout. the point of using Lorem
				</p>
	
			</div>
		</div>
	</b-container>
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

<style scoped>
*,p {
	margin: 0;
	padding: 0;
}

.caixa {
	width: 25%;
	height: 7em;
	border-radius: 30px;
	background-color: rgb(244, 84, 84);
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.qtdDoador {
	
}

.btn {
	width: 150px;
	height: 50px;
}

/* .img {
	width: 1580px;
	height: 1121px;
	background-color: white;
} */

.img-Perfil {
	width: 1580px;
	height: 1121px;
}

.bg-Vermelho {
	background-color: rgb(236, 60, 60);
	color: white;
	width: 100%;
	height: 100%;
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

.texto {
	font-size: 20px;
	text-align: left;
}

.texto2 {
	text-align: left;

	font-size: 15px;
	color: gray;
}

.letraVermelha {
	color: rgb(236, 60, 60);
}

#fundo {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
