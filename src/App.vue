<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <router-link to="/">
      <h1>HR Hiring Compliance Dashboard</h1>
    </router-link>
    <nav>
      <router-link to="/records">Records</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
  </header>
  <div class="layout">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #1cb4f4, #1454de);
  color: white;
  padding: 0.5rem 1rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0.5rem 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.layout {
  flex: 1;
  display: flex;
  height: 100%;
  min-height: 500px;
}
</style>
