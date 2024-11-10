<script setup>
import { useRecordsStore } from '../stores/useRecordsStore';

const recordsStore = useRecordsStore();

const selectRecord = (record) => {
  recordsStore.selectRecord(record);
};
</script>

<template>
  <div class="record-menu">
    <h3>Record List</h3>
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
      <p>No record available.</p>
    </div>
  </div>
</template>

<style scoped>
.record-menu {
  width: 25%;
  padding-right: 20px;
  border-right: 1px solid #ccc;
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
