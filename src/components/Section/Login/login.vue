<script setup>
import MainLayout from "../../MainLayout/MainLayout.vue";
</script>

<template>
  <MainLayout>
  <div class="container">
    <div class="login-box">
      <div class="form-section">
        <h2>Bem-vindo!</h2>
        <form>
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" required>
          
          <label for="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required>
          
          <div class="remember">
            <input type="checkbox" id="lembrar">
            <label for="lembrar">Lembrar de mim</label>
          </div>
          
          <div class="buttons">
            <button type="submit" class="login-btn">LOGIN</button>
            <button type="button" class="signup-btn">Cadastrar-se</button>
          </div>
        </form>
      </div>
      <div class="logo-section">
        <img src="Imagem/zyon_arena-removebg-preview.png" alt="Logo Zyon Arena">
      </div>
    </div>
  </div>

  <!--body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #E39B34;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: #fff; 
  border-radius: 10px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  max-width: 800px;
  width: 100%;
  justify-content: flex-start;
  gap: 40px;
}

.login-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.form-section {
  max-width: 500px;
  margin-right: 40px;
  margin-left: 40px;
}

h2 {
  font-size: 40px;
  margin-bottom: 30px;
  color: #333;
}

form label {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

form input[type="text"],
form input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.remember {
  margin: 15px 0;
  font-size: 14px;
  display: flex;
  align-items: center; 
  gap: 5px;            
  cursor: pointer;
}

.buttons {
  display: flex;
  gap: 10px;
}

.login-btn {
  background-color: #e5982c;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.signup-btn {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #cc8b31;
}

.signup-btn:hover {
  background-color: #f2f2f2;
}

.logo-section img {
  width: 350px; 
  margin-left: 10px; 
  transform: translateX(-20px); 
} -->
  </MainLayout>
</template>