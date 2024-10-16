<template>
  <div class="w-[381px] h-[352px] ml-[349px]">
    <form
      @submit.prevent="submitForm"
      class="h-full flex flex-col justify-between font-space-grotesk font-medium"
    >
      <!-- CARD NAME -->
      <div class="flex flex-col">
        <label for="name">CARDHOLDER NAME</label>
        <input
          v-model="formData.name"
          id="name"
          placeholder="e.g. Jane Appleseed"
          required
          class="w-[381px] h-[45px] rounded-[9px] border pl-4"
        />
      </div>

      <!-- CARD NUMBER  -->

      <div class="flex flex-col">
        <label for="cardNumber">CARDHOLDER NUMBER</label>
        <input
          v-model="formData.cardNumber"
          id="cardNumber"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          required
          class="w-[381px] h-[45px] rounded-[9px] border pl-4"
        />
      </div>

      <!-- EXPIRATION DATE -->
      <div class="flex justify-between">
        <div class="flex w-[170px] h-[69px]">
          <div>
            <label for="expMonth">EXP.DATE</label>
            <input
              type="number"
              v-model="formData.expMonth"
              id="expMonth"
              placeholder="MM"
              maxlength="2"
              required
              class="w-[80px] h-[45px] mt-[9px] rounded-[9px] border pl-4"
            />
          </div>
          <div>
            <label for="expYear">EXP.DATE</label>
            <input
              type="number"
              v-model="formData.expYear"
              id="expYear"
              placeholder="YY"
              maxlength="2"
              required
              class="w-[80px] h-[45px] mt-[9px] rounded-[9px] border pl-4"
            />
          </div>
        </div>

        <!-- CVC -->
        <div class="flex flex-col">
          <label for="cvc">CVC</label>
          <input
            v-model="formData.cvc"
            id="cvc"
            placeholder="e.g.123"
            class="w-[191px] h-[45px] mt-[9px] rounded-[9px] border pl-4"
          />
        </div>
      </div>

      <button
        type="submit"
        class="rounded-[9px] bg-[#21092F] h-[53px] text-white"
      >
        Confirm
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: "",
});

const submitForm = () => {
  console.log("envoyé");
};
</script>
