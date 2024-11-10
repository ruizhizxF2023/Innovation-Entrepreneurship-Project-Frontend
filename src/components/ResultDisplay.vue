<script setup>
import { useRecordsStore } from '../stores/useRecordsStore';

const recordsStore = useRecordsStore();
</script>

<template>
  <div class="result-display">
    <h3>Record Details</h3>

    <div v-if="recordsStore.selectedRecord">
      <div class="ai-analysis">
        <h4>Compliance Evaluation</h4>
        <p><strong>Score:</strong> {{ recordsStore.selectedRecord.score }}</p>
        <p><strong>Explanation:</strong> {{ recordsStore.selectedRecord.explanation }}</p>
      </div>

      <div class="record-details">
        <h4>Form Submission Details</h4>
        <p><strong>Candidate Name:</strong> {{ recordsStore.selectedRecord.candidate_name }}</p>
        <p><strong>Date:</strong> {{ recordsStore.selectedRecord.date }}</p>
        <p><strong>Resume:</strong> {{ recordsStore.selectedRecord.resume }}</p>
        <p><strong>Interview Transcript:</strong> {{ recordsStore.selectedRecord.interview_transcript }}</p>
        <p><strong>Job Description:</strong> {{ recordsStore.selectedRecord.job_description }}</p>
        <p><strong>Company Policy:</strong> {{ recordsStore.selectedRecord.company_policy }}</p>
        <p><strong>Hiring Decision:</strong> {{ recordsStore.selectedRecord.hiring_decision }}</p>
        <p><strong>Justification:</strong> {{ recordsStore.selectedRecord.justification }}</p>
      </div>
    </div>

    <div v-else>
      <p>Please select a record to view the details.</p>
    </div>
  </div>
</template>

<style scoped>
.result-display {
  flex: 1;
  padding: 20px;
}

.ai-analysis {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.record-details {
  padding: 10px;
}
</style>
