<template>
  <NuxtLink
    class="justify-self-center"
    :to="
      pathToTransportaion || pathToFreightForwading || pathToSoftwareDevelopment
    "
  >
    <button
      class="flex items-center px-8 py-[18px] rounded-[8px] bg-button hover:text-[#FFFFFF] active:translate-y-[-3px] active:shadow-xl"
    >
      <p class="pr-2">Узнать больше</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
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
