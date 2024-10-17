<template>
  <div class="flex flex-col">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :class="inputClass"
      @input="updateValue"
    />
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

// Déclarer les props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  maxlength: {
    type: Number,
    default: null,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
});

// Déclarer l'émetteur d'événements
const emit = defineEmits(["update:modelValue"]);

// Calculer les classes CSS
const inputClass = computed(() => [
  "w-full h-[45px] rounded-[9px] border pl-4 focus:outline-none focus:border-purple-500",
  props.error ? "border-red-500" : "",
]);

// Méthode pour émettre l'événement de mise à jour
function updateValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>
