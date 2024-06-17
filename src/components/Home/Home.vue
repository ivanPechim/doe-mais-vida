<template>
	<div class="vermelhor-topo">


		<div class="primeiro-vermelho">

			<b-row>
				<b-col class="d-flex justify-content-center m-3">
					<div class="caixa">
						<p class="quantidade">
							20976
							<br>
							Precisam de <br>um doador
						</p>
						<b-button @click="pagQueroDoar" type="button" class="btn" variant="light">
							Quero doar
						</b-button>
					</div>
				</b-col>
			</b-row>
		</div>





		<div class="bg-Branco">
				<b-row class="historia-usuario">
					<b-col>
						<strong>
							HISTORIAS DE USUARIOS
						</strong>
					</b-col>
				</b-row>

				<div>
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





	</div>
</template>


<script>

import jsons from "../../../persons.example.json"

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
			return require(`../../../public/persons/${imgUrl}.jpg`);
		},
		pagQueroDoar() {
			this.$router.push('/agendamentos');
		}
	}
}

</script>

<style scoped>
.vermelhor-topo {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}

.primeiro-vermelho {
	width: 100vw;
	height: 20vh;
	background-color: red;
}


.caixa {
	width: 25%;
	height: 7em;
	border-radius: 10px;
	background-color: rgb(244, 84, 84);
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.quantidade {
	color: white;
}


.btn {
	width: 150px;
	height: 50px;
	border-radius: 30px;
}


.historia-usuario {
	padding: 20px;
	background-color: #F2F2F2;
}

/* .img {
	width: 50%;
	height: 50%;
	background-color: white;
} */

/* .img-Perfil {
	width: 1580px;
	height: 1121px;
} */


.texto {
	margin-top: 30px;
	/* font-size: 20px; */
	/* text-align: left; */

}

.texto2 {
	/* text-align: left; */

	/* font-size: 15px; */
}

</style>
