<script setup>
import Form from "./components/Form.vue";
import frontCard from "./assets/bg-card-front.png";
import backCard from "./assets/bg-card-back.png";
import { ref } from "vue";

// Données réactives du formulaire avec valeurs par défaut
const formData = ref({
  name: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: "",
});

// Valeurs par défaut à afficher sur les cartes si les champs sont vides
const defaultValues = {
  name: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  expMonth: "00",
  expYear: "00",
  cvc: "000",
};
</script>

<template>
  <div
    class="relative bg-hero-pattern-mobile h-full border border-red-500 md:bg-hero-pattern md:bg-contain md:bg-no-repeat flex flex-col justify-center items-center md:h-screen md:flex-row"
  >
    <!-- Les cartes, visibles seulement sur les écrans md et plus grands -->
    <div
      class="hidden lg:flex flex-col justify-between absolute left-[164px] top-[187px] h-[541px] w-[527px] z-10"
    >
      <!-- Carte de devant -->
      <div>
        <img
          :src="frontCard"
          alt="Front Credit Card"
          class="relative"
        >
          <div class="w-[84px] h-[47px] flex justify-between items-center absolute top-[28px] left-[32px]">
            <div class="bg-white h-[47px] w-[47px] rounded-full"></div>
            <div class="border border-white h-[21.15px] w-[21.15px] rounded-full"></div>
          </div>

          <!-- Afficher le numéro de carte formaté ou valeur par défaut -->
          <div class="absolute h-[36px] w-[372px] text-white text-[28px] flex items-center font-space-grotesk top-[139px] left-[32px] tracking-[3px]">
            {{ formData.cardNumber || defaultValues.cardNumber }}
          </div>

          <!-- Afficher le nom du titulaire ou valeur par défaut -->
          <div class="absolute h-[18px] w-[138px] flex items-center text-white font-space-grotesk tracking-[1px] top-[200.5px] left-[32px]">
            {{ formData.name || defaultValues.name }}
          </div>

          <!-- Afficher la date d'expiration ou valeur par défaut -->
          <div class="absolute h-[18px] w-[49px] flex items-center text-white font-space-grotesk tracking-[1px] top-[200.5px] left-[366px]">
            {{ (formData.expMonth || defaultValues.expMonth) }}/{{ (formData.expYear || defaultValues.expYear) }}
          </div>
        </img>
      </div>

      <!-- Carte de derrière -->
      <div class="absolute right-0 bottom-0">
        <img :src="backCard" alt="Back Credit Card" class="relative">
          <!-- Afficher le CVC ou valeur par défaut -->
          <div class="text-white w-[32px] h-[18px] flex items-center justify-center absolute right-[57px] top-[111px] font-space-grotesk text-[14px] tracking-[1px]">
            {{ formData.cvc || defaultValues.cvc }}
          </div>
        </img>
      </div>
    </div>

    <!-- Le composant Form gère l'affichage du formulaire ou du message de remerciement -->
    <div
      class="border border-blue-500 bottom-0 w-full h-full bg-white flex justify-center items-center md:w-2/3 md:absolute md:right-0 z-0"
    >
      <Form :formData="formData" />
    </div>
  </div>
</template>


