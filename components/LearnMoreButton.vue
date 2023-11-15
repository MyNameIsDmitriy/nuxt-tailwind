<template>
  <NuxtLink
    class="justify-self-center"
    :to="
      pathToTransportaion || pathToFreightForwading || pathToSoftwareDevelopment
    "
  >
    <button
      class="flex items-center px-8 py-[1.125rem] rounded-lg bg-button hover:text-[#FFFFFF] active:translate-y-[-3px] active:shadow-xl"
    >
      <p class="pr-2">Узнать больше</p>
      <img class="w-6 h-6" src="../assets/svg/arrow.svg" alt="arrow-right" />
    </button>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  pathToTransportaion: String,
  pathToFreightForwading: String,
  pathToSoftwareDevelopment: String,
});
</script>
