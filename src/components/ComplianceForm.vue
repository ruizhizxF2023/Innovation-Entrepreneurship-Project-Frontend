<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['submitForm']);

const formData = reactive({
  resume: '',
  interview_transcript: '',
  job_description: '',
  company_policy: '',
  hiring_decision: 'Hiring',
  justification: ''
});

const clearForm = () => {
  formData.resume = '';
  formData.interview_transcript = '';
  formData.job_description = '';
  formData.company_policy = '';
  formData.hiring_decision = 'Hiring';
  formData.justification = '';
};

const submitForm = () => {
  emit('submitForm', formData);
  clearForm();
};
</script>

<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="resume">Resume:</label>
        <textarea v-model="formData.resume" id="resume" required></textarea>
      </div>
      <div>
        <label for="interview_transcript">Interview Transcript:</label>
        <textarea v-model="formData.interview_transcript" id="interview_transcript" required></textarea>
      </div>
      <div>
        <label for="job_description">Job Description:</label>
        <textarea v-model="formData.job_description" id="job_description" required></textarea>
      </div>
      <div>
        <label for="company_policy">Company Policy:</label>
        <textarea v-model="formData.company_policy" id="company_policy" required></textarea>
      </div>
      <div>
        <label for="hiring_decision">Hiring Decision:</label>
        <select v-model="formData.hiring_decision" id="hiring_decision" required>
          <option value="Hiring">Hiring</option>
          <option value="Not hiring">Not hiring</option>
        </select>
      </div>
      <div>
        <label for="justification">Justification:</label>
        <textarea v-model="formData.justification" id="justification" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>