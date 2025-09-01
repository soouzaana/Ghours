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
  { key: "nome", label: "Nome Completo" },
  { key: "cargo", label: "Cargo" },
  { key: "telefone", label: "Telefone" },
  { key: "email", label: "Email" },
  { key: "cpf", label: "CPF" },
  { key: "status", label: "Status" },
];

const rows = ref([
  {
    id: 1,
    nome: "Lucas Ferreira",
    cargo: "Gerente",
    telefone: "(99) 99999-0001",
    email: "lucas@empresa.com",
    cpf: "123.456.789-01",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Carla Mendes",
    cargo: "Analista",
    telefone: "(88) 88888-0002",
    email: "carla@empresa.com",
    cpf: "987.654.321-02",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Thiago Santos",
    cargo: "Supervisor",
    telefone: "(77) 77777-0003",
    email: "thiago@empresa.com",
    cpf: "456.789.123-03",
    status: "Inativo",
  },
  {
    id: 4,
    nome: "Fernanda Lima",
    cargo: "Assistente",
    telefone: "(66) 66666-0004",
    email: "fernanda@empresa.com",
    cpf: "321.654.987-04",
    status: "Ativo",
  },
  {
    id: 5,
    nome: "Rafael Oliveira",
    cargo: "Técnico",
    telefone: "(55) 55555-0005",
    email: "rafael@empresa.com",
    cpf: "789.123.456-05",
    status: "Ativo",
  },
  {
    id: 6,
    nome: "Patrícia Souza",
    cargo: "Coordenadora",
    telefone: "(44) 44444-0006",
    email: "patricia@empresa.com",
    cpf: "654.321.987-06",
    status: "Com licença",
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
  <p class="main-title text-2xl font-semibold">Funcionários Cadastrados</p>

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
