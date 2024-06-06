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
				<b-row v-for="person in persons" :key="person.id">
					<div>
						<h3 class="texto">{{ person.name }} ✅<br>
							<h5 class="texto2">🕗6m ago 📍Hemominas</h5>
						</h3>
						<br>
						<p>
							<img 
								class="img" 
								alt="img"
								:src="getImageUrl(person.imgUrl)"
							>
						</p>
						<p class="texto">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking
							at its layout. the point of using Lorem
						</p>
					</div>
				</b-row>
			</div>
		</div>
	</b-container>
</template>


<script>

import jsons from "../../persons.example.json" 

export default {
	name: "LoginLogar",
	data() {
		return {
			persons: jsons
		}
	},
	methods: {
		getImageUrl(imgUrl) {
      // eslint-disable-next-line no-undef
      return require(`../../public/persons/${imgUrl}.jpg`);
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

.img {
	width: 50%;
	height: 50%;
	background-color: white;
}

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
