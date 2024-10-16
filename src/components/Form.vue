<script setup>
import { ref, toRefs, defineProps } from "vue";

// Réception de la prop formData du composant parent
const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
});

// Création de références réactives pour chaque champ à partir de formData
const { name, cardNumber, expMonth, expYear, cvc } = toRefs(props.formData);

// Suivi des erreurs pour chaque champ
const errors = ref({
  name: false,
  cardNumber: false,
  expMonth: false,
  expYear: false,
  cvc: false,
});

// Validation du formulaire
const validateForm = () => {
  errors.value.name = !name.value;
  errors.value.cardNumber = !cardNumber.value || cardNumber.value.length < 16;
  errors.value.expMonth = !expMonth.value || expMonth.value.length !== 2;
  errors.value.expYear = !expYear.value || expYear.value.length !== 2;
  errors.value.cvc = !cvc.value || cvc.value.length < 3;

  // Retourne `true` si aucun champ n'a d'erreur
  return !Object.values(errors.value).includes(true);
};

// Soumission du formulaire
const submitForm = () => {
  if (validateForm()) {
    console.log("Formulaire envoyé avec succès !");
    // Ajouter la logique pour traiter la soumission ici
  } else {
    console.log("Formulaire invalide.");
  }
};
</script>

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
          v-model="name"
          id="name"
          placeholder="e.g. Jane Appleseed"
          :class="[
            'w-[381px] h-[45px] rounded-[9px] border pl-4 focus:outline-none focus:border-purple-500',
            errors.name ? 'border-red-500' : '',
          ]"
        />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1">
          Can't be blank
        </p>
      </div>

      <!-- CARD NUMBER  -->
      <div class="flex flex-col">
        <label for="cardNumber">CARDHOLDER NUMBER</label>
        <input
          v-model="cardNumber"
          id="cardNumber"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          :class="[
            'w-[381px] h-[45px] rounded-[9px] border pl-4 focus:outline-none focus:border-purple-500',
            errors.cardNumber ? 'border-red-500' : '',
          ]"
          maxlength="16"
        />
        <p v-if="errors.cardNumber" class="text-red-500 text-xs mt-1">
          Wrong format, numbers only
        </p>
      </div>

      <!-- EXPIRATION DATE -->
      <div class="flex justify-between">
        <div class="flex flex-col">
          <label for="expMonth" class="mb-2">EXP. DATE (MM/YY)</label>
          <div class="flex space-x-2">
            <!-- Champ MM -->
            <div class="flex flex-col">
              <input
                type="text"
                v-model="expMonth"
                id="expMonth"
                placeholder="MM"
                maxlength="2"
                :class="[
                  'w-[80px] h-[45px] rounded-[9px] border pl-4 focus:outline-none focus:border-purple-500',
                  errors.expMonth ? 'border-red-500' : '',
                ]"
              />
              <p v-if="errors.expMonth" class="text-red-500 text-xs mt-1">
                Can't be blank
              </p>
            </div>
            <!-- Champ YY -->
            <div class="flex flex-col">
              <input
                type="text"
                v-model="expYear"
                id="expYear"
                placeholder="YY"
                maxlength="2"
                :class="[
                  'w-[80px] h-[45px] rounded-[9px] border pl-4 focus:outline-none focus:border-purple-500',
                  errors.expYear ? 'border-red-500' : '',
                ]"
              />
              <p v-if="errors.expYear" class="text-red-500 text-xs mt-1">
                Can't be blank
              </p>
            </div>
          </div>
        </div>

        <!-- CVC -->
        <div class="flex flex-col">
          <label for="cvc">CVC</label>
          <input
            v-model="cvc"
            id="cvc"
            placeholder="e.g. 123"
            :class="[
              'w-[191px] h-[45px] mt-[9px] rounded-[9px] border pl-4 focus:outline-none focus:border-purple-500',
              errors.cvc ? 'border-red-500' : '',
            ]"
          />
          <p v-if="errors.cvc" class="text-red-500 text-xs mt-1">
            Can't be blank
          </p>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="rounded-[9px] bg-[#21092F] h-[53px] text-white"
      >
        Confirm
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Ajoute des styles personnalisés si nécessaire */
</style>
