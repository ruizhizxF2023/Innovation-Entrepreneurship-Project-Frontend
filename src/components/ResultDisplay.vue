<script setup>
const props = defineProps({
  response: Object
});
</script>

<template>
  <div class="result-display">
    <h2>Evaluation Result</h2>
    <p><strong>Score:</strong> {{ response.score }}</p>
    <p><strong>Explanation:</strong> {{ response.explanation }}</p>
  </div>
</template>
