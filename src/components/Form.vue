<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- CARD NAME -->
      <div>
        <label for="name">CARDHOLDER NAME</label>
        <input
          v-model="formData.name"
          id="name"
          placeholder="e.g. Jane Appleseed"
          required
        />
      </div>

      <!-- CARD NUMBER  -->

      <div>
        <label for="cardNumber">CARDHOLDER NUMBER</label>
        <input
          v-model="formData.cardNumber"
          id="cardNumber"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
      </div>

      <!-- EXPIRATION DATE -->
      <div>
        <div>
          <label for="expMonth">EXP.DATE</label>
          <input
            type="month"
            v-model="formData.expMonth"
            id="expMonth"
            placeholder="MM"
            maxlength="2"
            required
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
          />
        </div>
      </div>

      <!-- CVC -->
      <div>
        <label for="cvc">CVC</label>
        <input v-model="formData.cvc" id="cvc" placeholder="e.g.123" />
      </div>

      <button type="submit">Confirm</button>
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
