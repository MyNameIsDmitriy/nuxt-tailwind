<template>
  <div class="max-w-[1374px] px-[15px] mx-auto mt-[176px]">
    <div
      class="flex max-[1340px]:flex-col justify-between items-center mb-[240px]"
    >
      <div class="flex flex-col font-primary text-primary">
        <div class="flex flex-col max-w-[456px] mb-[24px]">
          <h1 class="text-5xl font-medium leading-[64px] mb-[24px]">
            Международные автомобильные грузоперевозки
          </h1>
          <div class="text-2xl font-light">
            Текст заглушка для сео о&#160;чем угодно. Бла-бла-бла и&#160;всякое
            разное. Текст заглушка для сео о&#160;чем угодно. Бла-бла-бла
            и&#160;всякое разное.
          </div>
        </div>
        <LearnMoreButton
          class="self-start"
          :pathToTransportaion="pathToTransportaion"
        />
      </div>
      <img src="~/assets/svg/stock.svg" alt="stock" />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
const pathToTransportaion = "/services/transportation";
</script>
