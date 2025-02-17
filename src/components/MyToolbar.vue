<template>
  <Toolbar class="sticky top-0">
    <template #start>
      <img
        src="../assets/logo.png"
        alt="logo"
        :class="route.name == 'home' ? 'animated-logo' : ''"
        id="logo"
      />
    </template>
    <template #center></template>
    <template #end> </template>
  </Toolbar>
</template>

<script setup lang="ts">
import { Toolbar } from 'primevue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .animated-logo {
    animation: fitIcon linear;
    animation-timeline: scroll();
    animation-range-start: entry 0px;
    animation-range-end: entry 590px;
  }
}

@media screen and (max-width: 992px) {
  .animated-logo {
    animation: fitIconSmallScreens linear;
    animation-timeline: scroll();
    animation-range-start: entry 0px;
    animation-range-end: entry 590px;
  }
}

@keyframes fitIcon {
  0% {
    scale: 10;
    transform: translateX(2vw) translateY(2.4rem) rotate(120deg);
  }
  100% {
    scale: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
  }
}

@keyframes fitIconSmallScreens {
  0% {
    scale: 10;
    transform: translateX(4.5vw) translateY(2.4rem) rotate(120deg);
  }
  100% {
    scale: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
  }
}

#logo {
  width: 3rem;
  height: 3rem;
}
</style>
