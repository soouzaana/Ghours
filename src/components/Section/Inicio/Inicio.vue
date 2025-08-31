<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "../../MainLayout/MainLayout.vue";
import TextField from "../../VV/TextField.vue";
import ButtonDefault from "../../UI/Button/Default/Default.vue";
import IconAdd from "../../Icons/Add.vue";

const search = ref("");
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
      <ButtonDefault><IconAdd></IconAdd> </ButtonDefault>
    </div>
  </MainLayout>
</template>

<style scoped>
.main-title::before {
  content: "";
  width: 8px;
  height: 100%;
  border: 2px solid #e39b34;
  margin-right: 0.5rem;
}

.top-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30rem;
  margin-top: 2rem;
}
</style>
