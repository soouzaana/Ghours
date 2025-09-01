<script setup lang="ts">
import { ref } from "vue";
import TextField from "../../VV/TextField.vue";
import ButtonDefault from "../../UI/Button/Default/Default.vue";

const username = ref("Admin");
const email = ref("admin@ghours.com");
const password = ref("");

const notifications = ref({
  email: true,
  push: false,
});

const saveSettings = () => {
  console.log("Salvando configurações:", {
    username: username.value,
    email: email.value,
    password: password.value,
    notifications: notifications.value,
  });
  alert("Configurações salvas!");
};
</script>

<template>
  <div class="settings-container">
    <p class="main-title">Configurações</p>

    <section class="section">
      <h2>Perfil</h2>
      <TextField v-model="username" label="Nome de usuário" class="mb-3" />
      <TextField v-model="email" label="Email" class="mb-3" />
      <TextField
        v-model="password"
        label="Senha"
        type="password"
        class="mb-3"
      />
    </section>

    <section class="section">
      <h2>Notificações</h2>
      <label class="checkbox">
        <input type="checkbox" v-model="notifications.email" />
        Receber notificações por email
      </label>
      <label class="checkbox">
        <input type="checkbox" v-model="notifications.push" />
        Receber notificações push
      </label>
    </section>

    <div class="actions">
      <ButtonDefault @click="saveSettings">Salvar</ButtonDefault>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.main-title::before {
  content: "";
  width: 8px;
  height: 100%;
  border: 2px solid #e39b34;
  margin-right: 0.5rem;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
}

.mb-3 {
  margin-bottom: 10px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
}
</style>
