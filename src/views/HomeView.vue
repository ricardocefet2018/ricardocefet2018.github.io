<script setup lang="ts"></script>

<template>
  <div id="home">
    <div class="banner">
      <div style="padding-top: 10vh; padding-bottom: 10vh" class="grid">
        <div class="col-12 lg:col-6" style="height: 33rem"></div>
        <div class="col-12 lg:col-6 flex">
          <!-- <div style="background-color: red; width: 30rem; height: 30rem"></div> -->
          <p class="main-text">
            Olá me chamo Ricardo Rocha. Sou programador de profissão, formado pelo CEFET-MG em
            Desenvolvimento de Sistemas, na turma de 2018. Do final de 2019 até o meio 2021
            trabalhei como programador, após este período foquei em um projeto pessoal que acabou
            virando meu emprego integral. Atualmente trabalho com desenvolvimento desktop usando
            TypeScript, Electron, Vue, C# e SQLite e desenvolvimento de APIs usando JavaScript,
            Node, ExpressJS e MongoDB.
          </p>
        </div>
      </div>
    </div>
    <div class="container-primary"></div>
  </div>
</template>

<style scoped>
.banner {
  font-size: 2rem;
}

.container-primary {
  height: 1600px;
  background-color: var(--p-primary-color);
  color: var(--p-button-primary-color);
  border-radius: var(--p-border-radius-sm);
}

@media screen and (max-width: 992px) {
  .main-text {
    width: 100%;
  }
}

@media screen and (min-width: 992px) {
  .main-text {
    width: 40rem;
  }
}
</style>

