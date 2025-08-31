<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "../../MainLayout/MainLayout.vue";
import TextField from "../../VV/TextField.vue";
import ButtonDefault from "../../UI/Button/Default/Default.vue";
import IconAdd from "../../Icons/Add.vue";
import IconEdit from "../../Icons/Edit.vue";
import IconExclude from "../../Icons/Exclude.vue";
import IconEye from "../../Icons/Eye.vue";

const search = ref("");

// dados de agendamentos
const agendamentos = ref([
  {
    id: 1,
    nomeCliente: "João Silva",
    telefone: "(11) 99999-9999",
    quadra: "Futebol",
    numeroQuadra: 2,
    tempo: "2h",
    valorHora: 50,
    valorTotal: 100,
    status: "Confirmado",
  },
  {
    id: 2,
    nomeCliente: "Maria Souza",
    telefone: "(21) 98888-8888",
    quadra: "Vôlei",
    numeroQuadra: 1,
    tempo: "1h30",
    valorHora: 40,
    valorTotal: 60,
    status: "Pendente",
  },
]);

const editarAgendamento = (id: number) => {
  console.log("Editar agendamento", id);
};

const excluirAgendamento = (id: number) => {
  console.log("Excluir agendamento", id);
};

const verDetalhes = (id: number) => {
  console.log("Ver detalhes agendamento", id);
};
</script>

<template>
  <MainLayout>
    <p class="main-title text-2xl font-semibold">Agendamento</p>

    <div class="top-section">
      <TextField
        v-model="search"
        label="Pesquisar"
        placeholder="Digite algo..."
        class="flex-1"
      />
      <ButtonDefault><IconAdd /> </ButtonDefault>
    </div>

    <div class="listagem">
      <table>
        <thead>
          <tr>
            <th>Nome do Cliente</th>
            <th>Telefone</th>
            <th>Quadra</th>
            <th>Nº Quadra</th>
            <th>Tempo</th>
            <th>Valor/Hora</th>
            <th>Valor Total</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="agendamento in agendamentos" :key="agendamento.id">
            <td>{{ agendamento.nomeCliente }}</td>
            <td>{{ agendamento.telefone }}</td>
            <td>{{ agendamento.quadra }}</td>
            <td>{{ agendamento.numeroQuadra }}</td>
            <td>{{ agendamento.tempo }}</td>
            <td>R$ {{ agendamento.valorHora }}</td>
            <td>R$ {{ agendamento.valorTotal }}</td>
            <td>{{ agendamento.status }}</td>
            <td class="secao-botoes">
              <button
                class="action-button"
                @click="editarAgendamento(agendamento.id)"
              >
                <IconEdit />
              </button>
              <button
                class="action-button"
                @click="excluirAgendamento(agendamento.id)"
              >
                <IconExclude />
              </button>
              <button
                class="action-button"
                @click="verDetalhes(agendamento.id)"
              >
                <IconEye />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </MainLayout>
</template>

<style scoped>
.main-title {
  margin-bottom: 1.5rem;
}

.main-title::before {
  content: "";
  width: 8px;
  height: 100%;
  border: 2px solid #e39b34;
  margin-right: 0.5rem;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
  margin-bottom: 2rem;
}

.secao-botoes {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.action-button {
  background-color: transparent;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: background 0.2s, color 0.2s;
}

.action-button:hover {
  background-color: #f7f7f7;
}

.listagem {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 800px;
}

thead {
  background-color: rgba(128, 128, 128, 0.17);
}

th {
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #e39b34;
}

td {
  padding: 0.5rem 0.75rem;
  vertical-align: middle;
  border-bottom: 1px solid rgba(128, 128, 128, 0.17);
}

tbody tr {
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s;
  border-bottom: 1px solid rgba(128, 128, 128, 0.17);
}

tbody tr:hover {
  background-color: #fdf6e3;
}

td:nth-child(8) {
  font-weight: 600;
}

td:nth-child(8)::after {
  content: attr(data-status);
}

.listagem::-webkit-scrollbar {
  height: 8px;
}

.listagem::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.listagem::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
