<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRecordsStore } from '@/stores/useRecordsStore';
import ComplianceForm from '@/components/ComplianceForm.vue';

const router = useRouter();
const recordsStore = useRecordsStore();

const handleFormSubmit = (formData) => {
  const score = Math.random() * 100;
  const explanation = score > 50 ? 'Passed compliance check' : 'Failed compliance check';
  const date = new Date().toLocaleDateString();
  recordsStore.addRecord({ ...formData, score, explanation, date });
  recordsStore.selectRecord(recordsStore.records[recordsStore.records.length - 1]);
  router.push('/records');
  // todo: send data to backend
}
</script>

<template>
  <main class="dashboard-container">
    <div class="left">
      <h1>Decision Compliance Evaluation</h1>
      <h2>Provide background information about the candidate and the job to evaluate your decision and justification</h2>
    </div>
    <div class="right">
      <ComplianceForm @submitForm="handleFormSubmit" />
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
