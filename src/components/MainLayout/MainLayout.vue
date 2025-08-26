<script setup>
import Sidebar from "./../Sidebar/Sidebar.vue";
import Bell from "../Icons/Bell.vue";

const pageName = "Nome da página acessada";
</script>

<template>
  <Sidebar />
  <header class="header">
    <p class="page-title">{{ pageName }}</p>
    <div class="header-right">
      <Bell class="icon-bell" />
      <div class="logo">Logo</div>
    </div>
  </header>
  <div class="main-area">
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  box-sizing: border-box;
}

.main-area {
  margin-left: 80px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.page-title {
  font-size: 1.2rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-bell {
  width: 22px;
  height: 22px;
  cursor: pointer;
  color: #e39b34;
}

.logo {
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
}

.content {
  flex: 1;
  padding: 1.5rem 4rem;
  overflow-y: auto;
}
</style>
