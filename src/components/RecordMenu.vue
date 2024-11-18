<script setup>
import { useRecordsStore } from '../stores/useRecordsStore';

const recordsStore = useRecordsStore();

const selectRecord = (record) => {
  recordsStore.selectRecord(record);
};
</script>

<template>
  <div class="record-menu">
    <h3>Evaluation History</h3>
    <div v-if="recordsStore.records.length > 0" class="menu-items">
      <div
        v-for="record in recordsStore.records"
        :key="record.id"
        @click="selectRecord(record)"
        class="record-item"
      >
        {{ record.candidate_name }}
      </div>
    </div>
    <div v-else>
      <p>No History.</p>
    </div>
  </div>
</template>

<style scoped>
.record-menu {
  width: 20%;
  padding-right: 20px;
  border-right: 1px solid #ccc;
  height: 100%;
  overflow-y: auto;
}

.menu-items {
  margin-top: 10px;
}

.record-item {
  padding: 10px;
  cursor: pointer;
}

.record-item:hover {
  background-color: #f0f0f0;
}
</style>
