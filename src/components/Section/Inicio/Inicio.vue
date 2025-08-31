<script setup>
import { Form } from "vee-validate";
import MainLayout from "../../MainLayout/MainLayout.vue";
import router from "../../../router";
import TextField from "../../VV/TextField.vue";
</script>

<template>
  <MainLayout>
    <p class="main-title text-2xl font-semibold mb-4">Agendamento</p>
    <div class="top-section">
      <TextField
        v-model="search"
        label="Pesquisar"
        placeholder="Digite algo..."
      />
    </div>
  </MainLayout>
</template>

<style scoped>
.main-title::before {
  content: "";
  border: 2px solid #e39b34;
  margin-right: 0.5rem;
  height: auto;
}
</style>
