<script setup lang="ts"></script>

<template>
  <div id="home">
    <div class="banner">
      <div style="padding-top: 10vh; padding-bottom: 10vh" class="grid">
        <div class="col-12 lg:col-6" style="height: 33rem"></div>
        <div class="col-12 lg:col-6 flex">
          <!-- <div style="background-color: red; width: 30rem; height: 30rem"></div> -->
          <p class="main-text align-content-center">
            Lorem ipsum dolor sit amet 1985, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div style="height: 1600px; width: var(--viewport-width); background-color: red"></div>
  </div>
</template>

<style scoped>
.banner {
  font-size: 2rem;
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

