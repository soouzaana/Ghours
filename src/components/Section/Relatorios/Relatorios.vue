<script setup lang="ts">
import { ref } from 'vue';
import TextField from '../../VV/TextField.vue';
import ButtonDefault from '../../UI/Button/Default/Default.vue';
import IconEye from '../../Icons/Eye.vue';
import DataTable from '../../UI/DataTable/DataTable.vue';
import IconPDF from '../../Icons/PDF.vue';
import IconExcel from '../../Icons/Excel.vue';

const search = ref("");

const columns = [
  { key: "agendamento", label: "Data de agendamento" },
  { key: "reserva", label: "Data de reserva" },
  { key: "quadra", label: "Nome da quadra" },
  { key: "cliente", label: "Nome do cliente" },
  { key: "telefone", label: "Telefone do cliente" },
  { key: "duracao", label: "Duração da reserva" },
  { key: "tipo", label: "Tipo de quadra" },
  { key: "status", label: "Status" },
];

const rows = ref([
  {
    id: 1,
    agendamento: "2025-09-02 10:00",
    reserva: "2025-08-30 14:00",
    quadra: "Quadra 1",
    cliente: "Lucas Ferreira",
    telefone: "(99) 99999-0001",
    duracao: "1h",
    tipo: "Futebol Society",
    status: "Confirmado",
  },
  {
    id: 2,
    agendamento: "2025-09-03 16:00",
    reserva: "2025-08-31 09:20",
    quadra: "Quadra 2",
    cliente: "Amanda Silva",
    telefone: "(99) 99999-0002",
    duracao: "2h",
    tipo: "Futebol Society",
    status: "Pendente",
  },
  {
    id: 3,
    agendamento: "2025-09-05 18:30",
    reserva: "2025-09-01 11:45",
    quadra: "Quadra 3",
    cliente: "Carlos Eduardo",
    telefone: "(99) 99999-0003",
    duracao: "1h30",
    tipo: "Futebol Society",
    status: "Cancelado",
  },
  {
    id: 4,
    agendamento: "2025-09-06 08:00",
    reserva: "2025-09-01 16:10",
    quadra: "Quadra 4",
    cliente: "Fernanda Gomes",
    telefone: "(99) 99999-0004",
    duracao: "1h",
    tipo: "Vôlei de praia",
    status: "Confirmado",
  },
  {
    id: 5,
    agendamento: "2025-09-06 19:00",
    reserva: "2025-09-02 13:00",
    quadra: "Quadra 1",
    cliente: "Marcos Lima",
    telefone: "(99) 99999-0005",
    duracao: "2h",
    tipo: "Vôlei de praia",
    status: "Confirmado",
  }
]);
</script>

<template>
  <p class="main-title text-2xl font-semibold">Relatório de Agendamento de Quadras</p>

  <div class="container flex">
    <TextField
      v-model="search"
      label="Pesquisar"
      placeholder="Digite algo..."
      class="flex-1"
    />

    <TextField
      v-model="search"
      label="Pesquisar"
      placeholder="Digite algo..."
      class="flex-1"
    />

    <TextField
      v-model="search"
      label="Pesquisar"
      placeholder="Digite algo..."
      class="flex-1"
    />

    <ButtonDefault>GERAR RELATÓRIO <IconEye /></ButtonDefault>
  </div>

  <DataTable :columns="columns" :rows="rows" />

  <div class="buttons-section">
    <ButtonDefault>EXPORTAR PARA PDF <IconPDF /></ButtonDefault>
  <ButtonDefault>EXPORTAR PARA EXCEL <IconExcel /></ButtonDefault>
  </div>
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

.container {
  gap: 1rem;
}

.buttons-section{
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: end;
}
</style>
