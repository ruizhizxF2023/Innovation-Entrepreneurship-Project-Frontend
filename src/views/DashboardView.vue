<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRecordsStore } from '@/stores/useRecordsStore';
import ComplianceForm from '@/components/ComplianceForm.vue';
import { ElMessage } from 'element-plus';

const router = useRouter();
const recordsStore = useRecordsStore();

const loading = ref(false);

const handleFormSubmit = (formData) => {
  loading.value = true;
  fetch('http://127.0.0.1:8080/compliance/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to evaluate compliance.');
    }
    return response.json();
  }).then(data => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    recordsStore.addRecord({ ...formData, score: data.score, explanation: data.explanation, date, time });
    recordsStore.selectRecord(recordsStore.records[0]);
    router.push('/records');
  }).catch((error) => {
    ElMessage.error(error.message);
  }).finally(() => {
    loading.value = false;
  });
}
</script>

<template>
  <main class="dashboard-container">
    <div class="left">
      <h1>Decision Compliance Evaluation</h1>
      <h2>Provide background information about the candidate and the job to evaluate your decision and justification</h2>
    </div>
    <div class="right">
      <ComplianceForm :loading @submitForm="handleFormSubmit" />
    </div>
  </main>
</template>

<style scoped>
.dashboard-container {
  padding: 20px;
  flex: 1;
  display: flex;
  background-image: url("bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.left {
  flex-basis: 50%;
  max-width: 500px;
  padding: 10% 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.right {
  flex-basis: 50%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #1cb4f4;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>
