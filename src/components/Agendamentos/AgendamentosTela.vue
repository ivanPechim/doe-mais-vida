<template>
	<div class="fundo">
		<div class="div-info-usuarios">
			<button @click="voltaHome" class="botao-volta">
				<img	src="https://ucarecdn.com/04b02b27-4531-476b-951d-4df0d0ff1a74/-/preview/34x46/" alt="">
			</button>
		</div>
		<div class="div-botao-voltar">
			<button @click="infoUser" class="info-usuarios">
				<img src="../../assets/infoUsuario.png" alt="">
			</button>
		</div>
    <div class="fundo_botao_requisitos">
      <div class="fundo_btn w-50 mb-5 p-3">
        <button @click="abreTelaRequisitos" id="botao_requsitos">Requisitos Básicos <br> para Doação</button>
      </div>
      
      <div class="formulario">
				<b-row>
					<b-col class="text">
						<b-form-group label="Município:">
							<b-select v-model="selectedMunicipio" @change="onMunicipioChange" required>
								<option value="">Inserir um município</option>
								<option v-for="(value, key) in unidadesPorMunicipio" :key="key" :value="key">{{ formatMunicipio(key) }}</option>
							</b-select>
						</b-form-group>
					</b-col>

					<b-col>
						<b-form-group label="Unidade de Atendimento:">
							<b-select v-model="selectedUnidade" required>
								<option value="">Inserir uma unidade</option>
								<option v-for="unidade in unidades" :key="unidade" :value="unidade">{{ unidade }}</option>
							</b-select>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row>
					<b-col>
						<b-form-group label="Data de Agendamento:">
							<b-form-input type="date" v-model="dataAgendamento" required></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>

						<b-form-group label="Horário de Atendimento:">
							<b-select v-model="selectedHorario" required>
								<option value="">Selecione um Horário</option>
								<option v-for="horario in horarios" :key="horario" :value="horario">{{ horario }}</option>
							</b-select>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row>
					<b-col>
						<b-form-group label="Nome:">
							<b-form-input  type="text" v-model="nome" required></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="CPF:">
							<b-form-input type="text" v-model="cpf" required></b-form-input>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row>
					<b-col>
						<b-form-group label="Email:">
							<b-form-input type="email" v-model="email" required></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="Data de nascimento:">
							<b-form-input type="date" v-model="dataNascimento" required></b-form-input>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row class="mb-4">
					<b-col>
						<b-form-group label="Telefone/Celular:">
							<b-form-input type="tel" v-model="telefone" required></b-form-input>
						</b-form-group>
					</b-col>
				</b-row>

        <b-row>
          <b-col>
						<b-button class="w-100 btn" @click="confirmarAgendamento">Confirmar Agendamento</b-button>
					</b-col>
        </b-row>
      </div>
    </div>
		<b-modal
      size="lg"
      ref="modalDesenho"
      hide-footer
      no-close-on-backdrop
    >
      <b-container fluid class="d-flex justify-content-center">
				<div class="background">
					<b-row>
						<b-col>
							<img class="m-3" src="../../assets/logoVermelha.png" alt="Logo Doação">
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<img class="m-3" src="../../assets/check.png" alt="Logo Doação">
						</b-col>
					</b-row>
					<b-row>
						<b-col class="text-center">
							<h4><strong>Parabéns!</strong></h4>
							<p>
								O seu agendamento foi concluído com
								sucesso! Estaremos te esperando no
								lugar, data e horário marcados!
							</p>
							<p>
								Você pode estar ajudando a salvar a
								vida de uma pessoa! Estamos orgulhosos!
							</p>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<b-button 
								class="btnHome"
								@click="voltaHome"
								>
								Voltar para a home
							</b-button>
						</b-col>
					</b-row>
				</div>
      </b-container>
    </b-modal>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedMunicipio: '',
      selectedUnidade: '',
      dataAgendamento: '',
      selectedHorario: '',
      nome: '',
      cpf: '',
      email: '',
      dataNascimento: '',
      telefone: '',
      unidadesPorMunicipio: {
        "alem_da_paraiba": ["Unidade de Coleta Além da Paraíba"],
        "belo_horizonte": ["Unidade de Coleta Hospital Júlia Kubitschek", "Hemocentro Belo Horizonte", "Unidade de Coleta - Estação BH"],
        "betim": ["Unidade de Coleta Betim"],
        "diamantina": ["Hemonúcleo Diamantina"],
        "divinopolis": ["Hemonúcleo Divinópolis"],
        "governador_valadares": ["Hemocentro Governador Valadares"],
        "ituiutaba": ["Hemonúcleo Ituiutaba"],
        "juiz_de_fora": ["Hemocentro Juiz de Fora"],
        "manhuacu": ["Hemonúcleo Manhuaçu"],
        "montes_claros": ["Hemocentro Montes Claros"],
        "passos": ["Hemonúcleo Passos"],
        "patos_de_minas": ["Hemonúcleo Patos de Minas"],
        "ponte_nova": ["Hemonúcleo Ponte Nova"],
        "pouso_alegre": ["Hemocentro Pouso Alegre"],
        "pocos_de_caldas": ["Unidade de Coleta Poços de Caldas"],
        "sete_lagoas": ["Hemonúcleo Sete Lagoas"],
        "sao_joao_del_rei": ["Hemonúcleo São João Del Rei"],
        "uberaba": ["Hemocentro Uberaba"],
        "uberlandia": ["Hemocentro Uberlândia"]
      },
      unidades: [],
      horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:40", "14:00", "14:40", "15:00", "15:40", "16:00", "16:40", "17:00"]
    };
  },
  methods: {
    onMunicipioChange() {
      this.unidades = this.unidadesPorMunicipio[this.selectedMunicipio] || [];
      this.selectedUnidade = '';
    },
    formatMunicipio(key) {
      return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    },
    confirmarAgendamento() {
			this.$refs["modalDesenho"].show();
      this.agendamentoConfirmado = true;
    },
    hideModal() {
			this.$refs["modalDesenho"].hide();
    },
    voltaHome() {
			this.$router.push('/home'); 
		},

    infoUser() {
			this.$router.push('/perfilUser'); 
		},

		abreTelaRequisitos() {
			this.$router.push('/requisitos');
		}
  }
}
</script>

<style scoped>

.btnHome {
	background-color: #EE3C3C
}

.btnHome:hover {
	background-color: #EE3C3C
}

.background {
	display: flex;
	text-align: center !important; 
	width: 60%;
	flex-direction: column
}

.fundo {
  background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.botao-volta > img {
	margin-top: 25px;
	margin-left: 25px;
	position: absolute;
	width: 50px;
	height: 50px;
	top: 0;
	left: 0;
	background-size: 35px;
	border-radius: 50%;
}

.info-usuarios > img {
	margin-top: 90px;
	margin-left: 25px;
	position: absolute;
	width: 50px;
	height: 50px;
	top: 0;
	left: 0;
	background-size: 35px;
}

.btn {
	background-color: #952626;
	border: 0;
}

.btn:hover {
	background-color: #952626;
}

.formulario {
	justify-content: left;
}

.fundo_botao_requisitos {
  width: 40%;
  height: auto;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.fundo_btn {
	background-color: rgb(240, 84, 84);
	border-radius: 10px; 
	display: flex;
	justify-content: center;
}

#botao_requsitos {
  background-color: white;
	text-align: center;
	width: 75%;
  color: red; 
  font-size: 18px; 
  border-radius: 50px; 
}

</style>
