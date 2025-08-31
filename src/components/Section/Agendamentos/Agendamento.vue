<script setup lang="ts">
import { ref, computed } from "vue";
import DataTable from "../../UI/DataTable/DataTable.vue";
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

const editarAgendamento = (id: number) => console.log("Editar agendamento", id);
const excluirAgendamento = (id: number) =>
  console.log("Excluir agendamento", id);
const verDetalhes = (id: number) => console.log("Ver detalhes agendamento", id);

const columns = [
  { key: "nomeCliente", label: "Nome do Cliente" },
  { key: "telefone", label: "Telefone" },
  { key: "quadra", label: "Quadra" },
  { key: "numeroQuadra", label: "Nº Quadra" },
  { key: "tempo", label: "Tempo" },
  { key: "valorHora", label: "Valor/Hora" },
  { key: "valorTotal", label: "Valor Total" },
  { key: "status", label: "Status" },
];

const actions = [
  {
    icon: IconEdit,
    name: "editar",
    handler: (row: any) => editarAgendamento(row.id),
  },
  {
    icon: IconExclude,
    name: "excluir",
    handler: (row: any) => excluirAgendamento(row.id),
  },
  {
    icon: IconEye,
    name: "detalhes",
    handler: (row: any) => verDetalhes(row.id),
  },
];

const filteredAgendamentos = computed(() =>
  agendamentos.value.filter((a) =>
    a.nomeCliente.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<template>
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

  <DataTable :columns="columns" :rows="agendamentos" :actions="actions" />
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
</style>
