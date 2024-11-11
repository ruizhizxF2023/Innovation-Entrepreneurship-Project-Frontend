import { defineStore } from 'pinia';

export const useRecordsStore = defineStore('records', {
  state: () => ({
    records: [],
    selectedRecord: null,
  }),
  actions: {
    addRecord(record) {
      this.records.unshift(record);
    },
    selectRecord(record) {
      this.selectedRecord = record;
      // console.log('selectedRecord:', this.selectedRecord);
    },
    clearRecords() {
      this.records = [];
      this.selectedRecord = null;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'records',
        storage: localStorage,
      },
    ],
  },
});
