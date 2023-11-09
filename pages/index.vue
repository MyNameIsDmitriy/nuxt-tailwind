<template>
  <div class="max-w-[1374px] px-[15px] mx-auto mt-20 tablet:mt-[176px]">
    <div
      class="flex flex-col desktop:flex-row justify-between items-center mb-24 tablet:mb-[240px]"
    >
      <div class="flex flex-col font-primary text-primary">
        <div class="flex flex-col max-w-[456px] mb-[16px] tablet:mb-[24px]">
          <h1
            class="text-3xl tablet:text-5xl tablet:leading-[64px] font-medium mb-[16px] tablet:mb-[24px]"
          >
            Международные автомобильные грузоперевозки
          </h1>
          <div class="text-xl tablet:text-2xl font-light">
            Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
            Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
          </div>
        </div>
        <LearnMoreButton
          class="self-start mb-[16px] tablet:mb-0"
          :pathToTransportaion="pathToTransportaion"
        />
      </div>
      <img src="~/assets/svg/index-page/stock.svg" alt="stock" />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
const pathToTransportaion = "/services/transportation";
</script>
