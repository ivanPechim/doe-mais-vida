<template>
  <div class="fundo">
    <div class="fundo_botao_requisitos">
      <div class="botao_requisitos">
        <button id="botao_requsitos">Requisitos Básicos para Doação</button>
      </div>
      
      <div class="formulario">
        <div class="campo">
          <h1>Município</h1>
          <label for="municipio"></label>
          <select v-model="selectedMunicipio" @change="onMunicipioChange" required>
            <option value="">Inserir um município</option>
            <option v-for="(value, key) in unidadesPorMunicipio" :key="key" :value="key">{{ formatMunicipio(key) }}</option>
          </select>
        </div>

        <div class="campo">
          <h1>Unidade de Atendimento</h1>
          <label for="unidade"></label>
          <select v-model="selectedUnidade" required>
            <option value="">Inserir uma unidade</option>
            <option v-for="unidade in unidades" :key="unidade" :value="unidade">{{ unidade }}</option>
          </select>
        </div>

        <div class="campo">
          <h1>Data de Agendamento</h1>
          <input type="date" v-model="dataAgendamento" required>
        </div>

        <div class="campo">
          <h1>Horário de Atendimento</h1>
          <select v-model="selectedHorario" required>
            <option value="">Selecione um Horário</option>
            <option v-for="horario in horarios" :key="horario" :value="horario">{{ horario }}</option>
          </select>
        </div>

        <div class="campo">
          <h1>Nome</h1>
          <input type="text" v-model="nome" required>
        </div>

        <div class="campo">
          <h1>CPF</h1>
          <input type="text" v-model="cpf" required>
        </div> 

        <div class="campo">
          <h1>Email</h1>
          <input type="email" v-model="email" required>
        </div>

        <div class="campo">
          <h1>Data de Nascimento</h1>
          <input type="date" v-model="dataNascimento" required>
        </div>

        <div class="campo">
          <h1>Telefone/Celular</h1>
          <input type="tel" v-model="telefone" required>
        </div>

        <div class="campo botao_agendar">
          <button id="botao_agendar" @click="confirmarAgendamento">Confirmar Agendamento</button>
        
          
        </div>
      </div>
    </div>
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
      this.agendamentoConfirmado = true;
    }
  }
}
</script>

<style scoped>
/* Estilo Geral */
.fundo {
  background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

.botao_requisitos {
  background-color: white;
  width: 60%;
  height: auto;
  border-radius: 25%;
}

#botao_requsitos {
  background-color: white;
  color: red; 
  font-size: 18px; 
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 20px; 
  border: none; 
  border-radius: 10%; 
  cursor: pointer; 
}

.formulario {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.campo {
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;  
  font-size: 130%;
}

h1 {
  font-size: 25px;
  margin-bottom: 3px;
  height: auto;
}

.botao_agendar {
  grid-column: span 1; /* Ocupa toda a linha no grid */
  display: flex;
  justify-content: center; /* Centraliza o botão horizontalmente */
}

#botao_agendar {
  background-color: white;
  color: red; 
  font-size: 18px; 
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 20px; 
  border: none; 
  border-radius: 10%; 
  cursor: pointer; 
}
</style>
