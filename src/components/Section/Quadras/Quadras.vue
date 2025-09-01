
<script setup lang="ts">
import { ref } from "vue";
import DataTable from "../../UI/DataTable/DataTable.vue";
import TextField from "../../VV/TextField.vue";
import ButtonDefault from "../../UI/Button/Default/Default.vue";
import IconAdd from "../../Icons/Add.vue";
import IconEdit from "../../Icons/Edit.vue";
import IconExclude from "../../Icons/Exclude.vue";

const search = ref("");

const columns = [
  { key: "nome", label: "Nome" },
  { key: "numero", label: "Número" },
  { key: "tipo", label: "Tipo" },
  { key: "valor", label: "Valor" },
  { key: "status", label: "Status" },
];

const rows = ref([
  {
    nome: "Quadra A",
    numero: "1",
    tipo: "Futebol",
    valor: "100,00",
    status: "Disponível",
  },
  {
    id: 2,
    nome: "Quadra B",
    numero: "2",
    tipo: "Vôlei",
    valor: "50,00",
    status: "Reservada",
  },
  {
    id: 3,
    nome: "Quadra C",
    numero: "3",
    tipo: "Vôlei",
    valor: "52,00",
    status: "Disponível",
  },
  {
    id: 4,
    nome: "Quadra D",
    numero: "4",
    tipo: "Vôlei",
    valor: "52,00",
    status: "Reservada",
  },
  {
    id: 5,
    nome: "Quadra E",
    numero: "5",
    tipo: "Futebol",
    valor: "110,00",
    status: "Disponível",
  },
]);

const actions = [
  {
    name: "editar",
    icon: IconEdit,
    handler: (row: any) => editFuncionario(row),
  },
  {
    name: "excluir",
    icon: IconExclude,
    handler: (row: any) => deleteFuncionario(row),
  },
];

function editFuncionario(funcionario: any) {
  console.log("Editar:", funcionario);
}

function deleteFuncionario(funcionario: any) {
  console.log("Excluir:", funcionario);
}
</script>

<template>
  <p class="main-title text-2xl font-semibold">Quadras Cadastrados</p>

  <div class="top-section">
    <TextField
      v-model="search"
      label="Pesquisar"
      placeholder="Digite algo..."
      class="flex-1"
    />
    <ButtonDefault> <IconAdd /></ButtonDefault>
  </div>

  <DataTable :columns="columns" :rows="rows" :actions="actions" />
</template>

<style scoped>
.main-title {
  margin-bottom: 1.5rem;
  font-weight: 600;
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

