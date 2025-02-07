<script setup lang="ts">
import { Toolbar } from 'primevue';
import { RouterView } from 'vue-router';
import IconR from './components/icons/IconR.vue';
</script>

<template>
  <Toolbar>
    <template #start>
      <IconR size="3rem" />
    </template>
    <template #end> </template>
  </Toolbar>
  <RouterView />
</template>

<style scoped></style>

