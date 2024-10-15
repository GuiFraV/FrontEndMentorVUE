<script setup>
import Form from "./components/Form.vue";
import frontCard from "./assets/bg-card-front.png";
import backCard from "./assets/bg-card-back.png";
</script>

<template>
  <div
    class="bg-hero-pattern bg-contain bg-no-repeat flex justify-center items-center h-screen bg-gray-100"
  >
    <div>
      <img :src="frontCard" alt="Front Credit Card" />
    </div>
    <div>
      <img :src="backCard" alt="Back Credit Card" />
    </div>
    <Form />
  </div>
</template>
