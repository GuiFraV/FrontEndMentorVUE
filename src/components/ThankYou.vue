<template>
  <div
    class="flex flex-col items-center justify-center text-center h-[352px] w-full"
  >
    <img src="../assets/icon-complete.svg" alt="completed" class="mb-4" />
    <h2
      class="text-2xl font-bold mb-2 font-space-grotesk text-[28px] tracking-[3px] uppercase"
    >
      Thank you!
    </h2>
    <p class="text-gray-600 mb-4 font-space-grotesk text-[18px]">
      We've added your card details
    </p>
    <button
      @click="$emit('reset-form')"
      class="rounded-[9px] bg-[#21092F] text-white px-8 py-3 font-space-grotesk w-full"
    >
      Continue
    </button>
  </div>
</template>
