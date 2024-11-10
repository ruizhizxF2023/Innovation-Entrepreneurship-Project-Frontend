<script setup>
import { useRecordsStore } from '../stores/useRecordsStore';
import RecordMenu from '../components/RecordMenu.vue';
import ResultDisplay from '../components/ResultDisplay.vue';

const recordsStore = useRecordsStore();

const handleRecordSelected = (record) => {
  recordsStore.selectRecord(record);
};
</script>

<template>
  <div class="records-view">
    <div class="records-container">
      <RecordMenu @recordSelected="handleRecordSelected" />
      <ResultDisplay />
    </div>
  </div>
</template>

<style scoped>
.records-view {
  padding: 20px;
  width: 100%;
}
.records-container {
  height: 100%;
  display: flex;
  gap: 20px;
}
</style>
