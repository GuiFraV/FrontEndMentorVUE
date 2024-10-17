<script setup>
import { ref, toRefs, defineProps } from "vue";
import FormField from "./FormField.vue";
import ThankYou from "./ThankYou.vue";
import {
  validateName,
  validateCardNumber,
  validateExpMonth,
  validateExpYear,
  validateCVC,
} from "../validation";
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

// État pour déterminer si le formulaire a été soumis
const isFormSubmitted = ref(false);

// Fonction pour soumettre le formulaire
const submitForm = () => {
  errors.value.name = !validateName(name.value);
  errors.value.cardNumber = !validateCardNumber(cardNumber.value);
  errors.value.expMonth = !validateExpMonth(expMonth.value);
  errors.value.expYear = !validateExpYear(expYear.value);
  errors.value.cvc = !validateCVC(cvc.value);

  if (Object.values(errors.value).every((error) => !error)) {
    isFormSubmitted.value = true;
  } else {
    console.log("Formulaire invalide.");
  }
};

// Fonction pour réinitialiser le formulaire
const resetForm = () => {
  isFormSubmitted.value = false;
  name.value = "";
  cardNumber.value = "";
  expMonth.value = "";
  expYear.value = "";
  cvc.value = "";
  errors.value = {
    name: false,
    cardNumber: false,
    expMonth: false,
    expYear: false,
    cvc: false,
  };
};
</script>

<template>
  <div class="absolute top-[275px] right-[527px] w-[381px]">
    <div v-if="!isFormSubmitted" class="h-[352px]">
      <form
        @submit.prevent="submitForm"
        class="flex flex-col justify-between font-space-grotesk font-medium h-full"
      >
        <!-- CARD NAME -->
        <FormField
          v-model="name"
          label="CARDHOLDER NAME"
          id="name"
          placeholder="e.g. Jane Appleseed"
          :error="errors.name"
          errorMessage="Please enter a valid name."
        />

        <!-- CARD NUMBER -->
        <FormField
          v-model="cardNumber"
          label="CARDHOLDER NUMBER"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          maxlength="19"
          :error="errors.cardNumber"
          errorMessage="Please enter a valid card number."
        />

        <!-- EXPIRATION DATE ET CVC -->
        <div class="flex justify-between">
          <!-- Expiration Date -->
          <div class="flex flex-col">
            <label>EXP. DATE (MM/YY)</label>
            <div class="flex space-x-2">
              <FormField
                v-model="expMonth"
                id="expMonth"
                placeholder="MM"
                maxlength="2"
                :error="errors.expMonth"
                errorMessage="Invalid month."
              />
              <FormField
                v-model="expYear"
                id="expYear"
                placeholder="YY"
                maxlength="2"
                :error="errors.expYear"
                errorMessage="Invalid year."
              />
            </div>
          </div>

          <!-- CVC -->
          <FormField
            v-model="cvc"
            label="CVC"
            id="cvc"
            placeholder="e.g. 123"
            :error="errors.cvc"
            errorMessage="Invalid CVC."
          />
        </div>

        <!-- Bouton Submit -->
        <button
          type="submit"
          class="rounded-[9px] bg-[#21092F] h-[53px] text-white"
        >
          Confirm
        </button>
      </form>
    </div>

    <!-- Afficher le composant ThankYou si `isFormSubmitted` est true -->
    <ThankYou v-else @reset-form="resetForm" />
  </div>
</template>
