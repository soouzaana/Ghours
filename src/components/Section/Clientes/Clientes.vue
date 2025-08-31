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

const columns = [
  { key: "nome", label: "Nome Completo" },
  { key: "status", label: "Status" },
  { key: "telefone", label: "Telefone" },
  { key: "email", label: "Email" },
  { key: "cpf", label: "CPF" },
];

const rows = ref([
  {
    id: 1,
    nome: "Ana Souza",
    status: "Ativo",
    email: "ana@email.com",
    telefone: "(99) 99999-9999",
    cpf: "123.456.789-00",
  },
  {
    id: 2,
    nome: "João Silva",
    status: "Com reserva",
    email: "joao@email.com",
    telefone: "(88) 88888-8888",
    cpf: "987.654.321-00",
  },
  {
    id: 3,
    nome: "Maria Oliveira",
    status: "Inativo",
    email: "maria@email.com",
    telefone: "(77) 77777-7777",
    cpf: "456.789.123-11",
  },
  {
    id: 4,
    nome: "Carlos Pereira",
    status: "Ativo",
    email: "carlos@email.com",
    telefone: "(66) 66666-6666",
    cpf: "321.654.987-22",
  },
  {
    id: 5,
    nome: "Fernanda Lima",
    status: "Com reserva",
    email: "fernanda@email.com",
    telefone: "(55) 55555-5555",
    cpf: "789.123.456-33",
  },
  {
    id: 6,
    nome: "Rafael Santos",
    status: "Ativo",
    email: "rafael@email.com",
    telefone: "(44) 44444-4444",
    cpf: "654.321.987-44",
  },
]);

const actions = [
  {
    name: "editar",
    icon: IconEdit,
    handler: (row: any) => editCliente(row),
  },
  {
    name: "excluir",
    icon: IconExclude,
    handler: (row: any) => deleteCliente(row),
  },
];

function editCliente(cliente: any) {
  console.log("Editar:", cliente);
}

function deleteCliente(cliente: any) {
  console.log("Excluir:", cliente);
}
</script>

<template>
  <p class="main-title text-2xl font-semibold">Clientes Cadastrados</p>

  <div class="top-section">
    <TextField
      v-model="search"
      label="Pesquisar"
      placeholder="Digite algo..."
      class="flex-1"
    />
    <ButtonDefault><IconAdd /> </ButtonDefault>
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
