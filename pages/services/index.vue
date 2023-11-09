<template>
  <div class="max-w-container px-4 mx-auto mt-20">
    <div class="text-base font-normal font-primary text-primary mb-28">
      <div>
        <h2 class="text-[40px] leading-[53px] mb-6">Разнообразие услуг</h2>
        <p class="font-light leading-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          massa eget egestas purus. Vitae turpis massa sed elementum tempus
          egestas. Dui sapien eget mi proin. Sed risus ultricies tristique nulla
          aliquet. Elementum tempus egestas sed sed. Cursus risus at ultrices mi
          tempus imperdiet nulla malesuada pellentesque. Congue nisi vitae
          suscipit tellus mauris a. Hac habitasse platea dictumst vestibulum.
          Cursus euismod quis viverra nibh cras pulvinar mattis. Nibh tortor id
          aliquet lectus proin nibh nisl condimentum. A diam sollicitudin tempor
          id eu nisl nunc. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
          amet. Ac ut consequat semper viverra nam. Amet volutpat consequat
          mauris nunc. Mauris pharetra et ultrices neque ornare aenean.
        </p>
      </div>
      <div
        class="flex flex-col desktop:flex-row justify-between items-center desktop:items-baseline relative [&>*]:mb-24 last:[&>*]:mb-0"
      >
        <div class="flex flex-col items-center relative max-w-[432px] mt-36">
          <img
            class="absolute top-[-14%]"
            src="~/assets/svg/services-pages/bus.svg"
            alt="a bus"
          />
          <div
            class="flex flex-col items-center justify-items-center max-w-[440px] px-5 last:[&>*]:mb-6 border-0 rounded-[16px] shadow-normal"
          >
            <h3 class="text-[23px] leading-[30px] text-center mt-32 mb-2">
              Международные автомобильные грузоперевозки
            </h3>
            <p class="font-light mb-6">
              Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
              Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
            </p>

            <LearnMoreButton :pathToTransportaion="pathToTransportaion" />
          </div>
        </div>

        <div class="flex flex-col items-center relative max-w-[432px]">
          <img
            class="absolute top-[-16%]"
            src="~/assets/svg/services-pages/opened_bus.svg"
            alt="a bus"
          />
          <div
            class="flex flex-col items-center justify-items-center max-w-[440px] px-5 last:[&>*]:mb-6 border-0 rounded-[16px] shadow-normal"
          >
            <h3 class="text-[23px] leading-[30px] text-center mt-32 mb-2">
              <p>Экспедирование</p>
              <p>грузов</p>
            </h3>
            <p class="font-light mb-6">
              Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
              Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
            </p>

            <LearnMoreButton :pathToFreightForwading="pathToFreightForwading" />
          </div>
        </div>

        <div class="flex flex-col items-center relative max-w-[432px]">
          <img
            class="absolute top-[-22%]"
            src="~/assets/svg/services-pages/developing.svg"
            alt="developing"
          />
          <div
            class="flex flex-col items-center justify-items-center max-w-[440px] px-5 last:[&>*]:mb-6 border-0 rounded-[16px] shadow-normal"
          >
            <h3 class="text-[23px] leading-[30px] text-center mt-32 mb-2">
              Разработка ПО для транспортных компаний
            </h3>
            <p class="font-light mb-6">
              Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
              Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
            </p>

            <LearnMoreButton
              :pathToSoftwareDevelopment="pathToSoftwareDevelopment"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
const pathToTransportaion = "/services/transportation";
const pathToFreightForwading = "/services/freight-forwarding";
const pathToSoftwareDevelopment = "/services/software-development";
</script>
