<script setup>
import { ref } from 'vue'
import ComplianceForm from '@/components/ComplianceForm.vue'
import ResultDisplay from '@/components/ResultDisplay.vue';

const response = ref(null)
</script>

<template>
  <div class="dashboard">
    <h1>HR Dashboard</h1>
    <ComplianceForm @submitForm="handleFormSubmit" />
    <ResultDisplay v-if="response" :response="response" />
  </div>
</template>

<style scoped>

</style>
