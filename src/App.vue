<script setup>
import Form from "./components/Form.vue";
import frontCard from "./assets/bg-card-front.png";
import backCard from "./assets/bg-card-back.png";
</script>

<template>
  <div
    class="bg-hero-pattern relative bg-contain bg-no-repeat flex justify-center items-center h-screen bg-gray-100"
  >
    <div
      class="flex flex-col justify-between absolute left-[164px] h-[541px] w-[527px]"
    >
      <div>
        <img :src="frontCard" alt="Front Credit Card" />
      </div>
      <div class="absolute right-0 bottom-0">
        <img :src="backCard" alt="Back Credit Card" />
      </div>
    </div>

    <Form />
  </div>
</template>
