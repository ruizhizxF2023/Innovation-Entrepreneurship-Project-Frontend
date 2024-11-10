<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';


const emit = defineEmits(['submitForm']);

const formData = reactive({
  candidate_name: '',
  resume: '',
  interview_transcript: '',
  job_description: '',
  company_policy: '',
  hiring_decision: 'Hiring',
  justification: ''
});

const formRef = ref(null);

const rules = {
  candidate_name: [
    { required: true, message: 'Please enter candidate name', trigger: 'blur' }
  ],
  resume: [
    { required: true, message: 'Please enter resume', trigger: 'blur' }
  ],
  interview_transcript: [
    { required: true, message: 'Please enter interview transcript', trigger: 'blur' }
  ],
  job_description: [
    { required: true, message: 'Please enter job description', trigger: 'blur' }
  ],
  company_policy: [
    { required: true, message: 'Please enter company policy', trigger: 'blur' }
  ],
  hiring_decision: [
    { required: true, message: 'Please select hiring decision', trigger: 'blur' }
  ],
  justification: [
    { required: true, message: 'Please enter justification', trigger: 'blur' }
  ]
};

const clearForm = () => {
  formRef.value.resetFields();
};

const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      emit('submitForm', formData);
      clearForm();
      ElMessage.success('Form submitted successfully!');
    } else {
      ElMessage.error('Please fill in the fields.');
    }
  });
};
</script>

<template>
  <div class="form-container">
    <el-form :model="formData" ref="formRef" label-width="150px" :rules>
      <el-form-item label="Candidate Name" prop="candidate_name">
        <el-input v-model="formData.candidate_name" placeholder="Enter candidate name"></el-input>
      </el-form-item>
      
      <el-form-item label="Resume" prop="resume">
        <el-input v-model="formData.resume" type="textarea" placeholder="Enter resume"></el-input>
      </el-form-item>

      <el-form-item label="Interview Transcript" prop="interview_transcript">
        <el-input v-model="formData.interview_transcript" type="textarea" placeholder="Enter interview transcript"></el-input>
      </el-form-item>

      <el-form-item label="Job Description" prop="job_description">
        <el-input v-model="formData.job_description" type="textarea" placeholder="Enter job description"></el-input>
      </el-form-item>

      <el-form-item label="Company Policy" prop="company_policy">
        <el-input v-model="formData.company_policy" type="textarea" placeholder="Enter company policy"></el-input>
      </el-form-item>

      <el-form-item label="Hiring Decision" prop="hiring_decision">
        <el-select v-model="formData.hiring_decision" placeholder="Select hiring decision">
          <el-option label="Hiring" value="Hiring"></el-option>
          <el-option label="Not hiring" value="Not hiring"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Justification" prop="justification">
        <el-input v-model="formData.justification" type="textarea" placeholder="Enter justification"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button @click="clearForm">Clear</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
:deep(textarea) {
  resize: none;
}

.form-container {
  padding: 1.5rem;
  width: 70%;
  min-width: 400px;
  max-height: 80vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.el-form {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

:deep(.el-form-item__label) {
  font-weight: bold;
}

:deep(.el-form-item__label) {
  white-space: nowrap;
}
</style>
