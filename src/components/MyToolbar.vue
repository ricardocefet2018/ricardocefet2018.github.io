<template>
  <div class="sticky shadow-5" style="top: -1px; padding-top: 1px" ref="toolbar">
    <Toolbar class="" :class="{ fitted }">
      <template #start>
        <img
          src="../assets/logo.png"
          alt="logo"
          :class="route.name == 'home' ? 'animated-logo' : ''"
          id="logo"
          @click="router.push('/')"
        />
      </template>
      <template #center>
        <Button
          variant="text"
          @click="router.push('/')"
          :class="route.name == 'home' ? 'active' : ''"
        >
          <span class="material-symbols-outlined"> home </span>
          HOME
        </Button>
        <Button
          variant="text"
          @click="router.push('/about')"
          :class="route.name == 'projects' ? 'active' : ''"
        >
          <span class="material-symbols-outlined"> build_circle </span>
          PROJETOS
        </Button>
      </template>
      <template #end>
        <Button @click="toggleDarkMode">
          <span class="material-symbols-outlined" v-if="!darktheme">dark_mode</span>
          <span class="material-symbols-outlined" v-if="darktheme">light_mode</span>
        </Button>
      </template>
    </Toolbar>
  </div>
</template>

<script setup lang="ts">
import { Button, Toolbar } from 'primevue';
import { onMounted, ref, useTemplateRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const darktheme = ref(true);
const toolbar = useTemplateRef('toolbar');
const fitted = ref(false);

const observer = new IntersectionObserver(
  ([e]) => {
    fitted.value = e.intersectionRatio < 1;
  },
  { threshold: [1] },
);

onMounted(() => {
  if (!document.documentElement.classList.contains('dark-theme')) {
    darktheme.value = false;
  }
  observer.observe(toolbar.value!);
});

function toggleDarkMode() {
  darktheme.value = !darktheme.value;
  document.documentElement.classList.toggle('dark-theme');
}
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
    animation: fitIconSM linear;
    animation-timeline: scroll();
    animation-range-start: entry 0px;
    animation-range-end: entry 590px;
  }
}

@keyframes fitIcon {
  0% {
    scale: 10;
    transform: translateX(2vw) translateY(2.4rem) rotate(120deg);
    box-shadow:
      1px 0px 7px rgba(0, 0, 0, 0.1),
      4px -2px 5px -2px rgba(0, 0, 0, 0.12),
      9px -5px 15px -5px rgba(0, 0, 0, 0.2);
  }
  100% {
    scale: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
    box-shadow:
      0px 1px 7px rgba(0, 0, 0, 0.1),
      0px 4px 5px -2px rgba(0, 0, 0, 0.12),
      0px 10px 15px -5px rgba(0, 0, 0, 0.2);
  }
}

@keyframes fitIconSM {
  0% {
    scale: 10;
    transform: translateX(4.5vw) translateY(2.4rem) rotate(120deg);
    box-shadow:
      1px 0px 7px rgba(0, 0, 0, 0.1),
      4px -2px 5px -2px rgba(0, 0, 0, 0.12),
      9px -5px 15px -5px rgba(0, 0, 0, 0.2);
  }
  100% {
    scale: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
    box-shadow:
      0px 1px 7px rgba(0, 0, 0, 0.1),
      0px 4px 5px -2px rgba(0, 0, 0, 0.12),
      0px 10px 15px -5px rgba(0, 0, 0, 0.2);
  }
}

#logo {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 60%;
  box-shadow:
    0px 1px 7px rgba(0, 0, 0, 0.1),
    0px 4px 5px -2px rgba(0, 0, 0, 0.12),
    0px 10px 15px -5px rgba(0, 0, 0, 0.2);
}

.active {
  background-color: var(--p-button-text-primary-active-background) !important;
}

.fitted {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>
