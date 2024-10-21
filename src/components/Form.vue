<script setup>
import { ref, computed, watch, defineEmits } from "vue";
import FormField from "./FormField.vue";
import ThankYou from "./ThankYou.vue";
import {
  validateName,
  validateCardNumber,
  validateExpMonth,
  validateExpYear,
  validateCVC,
} from "../validation";

// Déclarer l'émetteur d'événements
const emit = defineEmits(["updateFormData"]);

// Création de références locales pour chaque champ
const name = ref("");
const expMonth = ref("");
const expYear = ref("");
const cvc = ref("");

// Référence pour le numéro de carte non formaté
const cardNumberRaw = ref("");

// Propriété calculée pour le numéro de carte formaté
const cardNumber = computed({
  get() {
    return formatCardNumber(cardNumberRaw.value);
  },
  set(value) {
    cardNumberRaw.value = value.replace(/\D/g, "").slice(0, 16);
  },
});

// Surveiller les changements et émettre les mises à jour
watch(
  [name, cardNumberRaw, expMonth, expYear, cvc],
  () => {
    emit("updateFormData", {
      name: name.value,
      cardNumber: cardNumberRaw.value,
      expMonth: expMonth.value,
      expYear: expYear.value,
      cvc: cvc.value,
    });
  },
  { immediate: true }
);

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

// Fonction pour formater le numéro de carte
function formatCardNumber(value) {
  value = value.replace(/\D/g, "");
  return value.replace(/(.{4})/g, "$1 ").trim();
}

// Fonction pour soumettre le formulaire
const submitForm = () => {
  errors.value.name = !validateName(name.value);
  errors.value.cardNumber = !validateCardNumber(cardNumberRaw.value);
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
  cardNumberRaw.value = "";
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

  // Émettre l'événement pour mettre à jour le parent
  emit("updateFormData", {
    name: name.value,
    cardNumber: cardNumberRaw.value,
    expMonth: expMonth.value,
    expYear: expYear.value,
    cvc: cvc.value,
  });
};
</script>

<template>
  <div class="w-[327px] h-[328px] md:w-[381px]">
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
          class="tracking-[2px]"
        />

        <!-- CARD NUMBER -->
        <FormField
          v-model="cardNumber"
          label="CARD NUMBER"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          maxlength="19"
          :error="errors.cardNumber"
          errorMessage="Please enter a valid card number."
          class="tracking-[2px]"
        />

        <!-- EXPIRATION DATE ET CVC -->
        <div class="flex justify-between">
          <!-- Expiration Date -->
          <div class="flex flex-col">
            <label>EXP. DATE (MM/YY)</label>
            <div class="flex space-x-2 w-[152px] md:w-[170px]">
              <FormField
                v-model="expMonth"
                id="expMonth"
                placeholder="MM"
                maxlength="2"
                :error="errors.expMonth"
                errorMessage="Invalid month."
                class="tracking-[2px]"
              />
              <FormField
                v-model="expYear"
                id="expYear"
                placeholder="YY"
                maxlength="2"
                :error="errors.expYear"
                errorMessage="Invalid year."
                class="tracking-[2px]"
              />
            </div>
          </div>

          <!-- CVC -->
          <FormField
            v-model="cvc"
            label="CVC"
            id="cvc"
            placeholder="e.g. 123"
            maxlength="3"
            :error="errors.cvc"
            errorMessage="Invalid CVC."
            class="w-[164px] md:w-[191px] tracking-[2px]"
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
