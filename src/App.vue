<template>
  <div
    class="relative bg-hero-pattern-mobile h-full md:bg-hero-pattern md:bg-contain md:bg-no-repeat flex flex-col justify-center items-center md:h-screen md:flex-row"
  >
    <!-- Les cartes -->
    <div
      class="h-[251px] w-[343px] top-[32px] md:hidden lg:flex flex-col justify-between absolute md:left-[164px] md:top-[187px] md:h-[541px] md:w-[527px] z-10"
    >
      <!-- Carte de devant -->
      <div class="relative h-[251px]">
        <!-- Utiliser une balise <div> avec l'image en arrière-plan -->
        <div
          class="absolute bottom-0 lg:relative lg:h-[245px] lg:w-[447px] w-[286px] h-[157px] bg-no-repeat bg-cover"
          :style="{ backgroundImage: `url(${frontCard})` }"
        >
          <!-- Logos sur la carte -->
          <div
            class="left-[19px] bottom-[108.6px] w-[54px] h-[30px] lg:w-[84px] lg:h-[47px] flex justify-between items-center absolute lg:top-[28px] lg:left-[32px]"
          >
            <div
              class="bg-white h-[30px] w-[30px] lg:h-[47px] lg:w-[47px] rounded-full"
            ></div>
            <div
              class="border border-white w-[13px] h-[13px] lg:h-[21.15px] lg:w-[21.15px] rounded-full"
            ></div>
          </div>

          <!-- Afficher le numéro de carte formaté ou valeur par défaut -->
          <div
            class="absolute bottom-[48.6px] left-[19px] text-[18px] tracking-[2px] lg:h-[36px] lg:w-[372px] text-white lg:text-[28px] flex items-center font-space-grotesk lg:top-[139px] lg:left-[32px] lg:tracking-[3px]"
          >
            {{ formattedCardNumber }}
          </div>

          <!-- Afficher le nom du titulaire ou valeur par défaut -->
          <div
            class="absolute h-[11px] w-[89px] text-[9px] lg:text-[14px] bottom-[20.6px] left-[19px] lg:h-[18px] lg:w-[138px] flex items-center text-white font-space-grotesk tracking-[1px] lg:top-[200.5px] lg:left-[32px]"
          >
            {{ formData.name || defaultValues.name }}
          </div>

          <!-- Afficher la date d'expiration ou valeur par défaut -->
          <div
            class="absolute text-[9px] lg:text-[14px] bottom-[20.6px] left-[232.11px] lg:h-[18px] lg:w-[49px] flex items-center text-white font-space-grotesk tracking-[1px] lg:top-[200.5px] lg:left-[366px]"
          >
            {{ formattedExpDate }}
          </div>
        </div>
      </div>

      <!-- Carte de derrière -->
      <div
        id="back-card"
        class="h-[157px] w-[286px] lg:h-[245px] lg:w-[447px] lg:absolute lg:right-0 bottom-0 relative"
      >
        <!-- Utiliser une balise <div> avec l'image en arrière-plan -->
        <div
          class="w-full h-full bg-no-repeat bg-cover"
          :style="{ backgroundImage: `url(${backCard})` }"
        >
          <!-- Afficher le CVC ou valeur par défaut -->
          <div
            class="text-white lg:w-[32px] lg:h-[18px] flex items-center justify-center absolute right-[37.2px] top-[70px] lg:right-[57px] lg:top-[111px] font-space-grotesk text-[9px] lg:text-[14px] tracking-[1px]"
          >
            {{ formData.cvc || defaultValues.cvc }}
          </div>
        </div>
      </div>
    </div>

    <!-- Le composant Form -->
    <div
      class="w-full bottom-0 h-3/5 md:h-screen md:bottom-0 bg-white flex justify-center items-center md:w-2/3 absolute md:right-0 z-0"
    >
      <Form @updateFormData="updateFormData" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Form from "./components/Form.vue";
import frontCard from "./assets/bg-card-front.png";
import backCard from "./assets/bg-card-back.png";

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

// Fonction pour mettre à jour formData avec les données du formulaire
function updateFormData(updatedData) {
  formData.value = { ...formData.value, ...updatedData };
}

// Fonction pour formater le numéro de carte pour l'affichage
function formatCardNumber(value) {
  value = value.replace(/\D/g, "");
  return value.replace(/(.{4})/g, "$1 ").trim();
}

// Propriété calculée pour le numéro de carte formaté
const formattedCardNumber = computed(() => {
  return formatCardNumber(
    formData.value.cardNumber || defaultValues.cardNumber
  );
});

// Propriété calculée pour la date d'expiration formatée
const formattedExpDate = computed(() => {
  const month = formData.value.expMonth || defaultValues.expMonth;
  const year = formData.value.expYear || defaultValues.expYear;
  return `${month}/${year}`;
});
</script>

<style>
@media (max-width: 770px) {
  #back-card {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -10;
  }
}
</style>
