<template>
  <div class="max-w-[1374px] px-[15px] mx-auto mt-[104px]">
    <div class="font-primary text-base font-light text-primary mb-[120px]">
      <div
        class="grid gap-[16px] grid-cols-3 max-[780px]:grid-cols-1 [&>*]:max-[780px]:justify-self-center mb-10"
      >
        <div class="relative max-w-[437px]">
          <img
            class="absolute top-[-5%] right-[2%]"
            src="~/assets/svg/about-page/number_one.svg"
            alt="number one"
          />
          <div
            class="flex flex-col min-h-[269px] border-0 rounded-[10px] bg-greenCard"
          >
            <img
              class="max-w-[157px] pl-2 pt-3"
              src="~/assets/svg/about-page/calendar.svg"
              alt="calendar"
            />
            <p class="px-6 py-5">
              Работаем с&#160;2008 года. Отзыв клиента&#160;1. Бла-бла-бла.
              Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята.
              Работаем дальше
            </p>
          </div>
        </div>
        <div class="relative max-w-[437px]">
          <img
            class="absolute top-[-5%] right-[2%]"
            src="~/assets/svg/about-page/number_two.svg"
            alt="number two"
          />
          <div
            class="flex flex-col min-h-[269px] border-0 rounded-[10px] bg-purpleCard"
          >
            <img
              class="max-w-[152px] pl-2 pt-3"
              src="~/assets/svg/about-page/todo.svg"
              alt="calendar"
            />
            <p class="px-6 py-5">
              Выполнено 100500 успешных перевозок. Отзыв клиента&#160;1.
              Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые
              ребята. Работаем дальше
            </p>
          </div>
        </div>
        <div class="relative max-w-[437px]">
          <img
            class="absolute top-[-5%] right-[2%]"
            src="~/assets/svg/about-page/number_three.svg"
            alt="number three"
          />
          <div
            class="flex flex-col min-h-[269px] border-0 rounded-[10px] bg-pinkCard"
          >
            <img
              class="max-w-[110px] pl-2 pt-3"
              src="~/assets/svg/about-page/planet.svg"
              alt="calendar"
            />
            <p class="px-6 py-5">
              Еще один занимательный факт.Работаем с&#160;2008 года. Отзыв
              клиента&#160;1. Бла-бла-бла. Крутые ребята. Работаем дальше.
              Бла-бла-бла. Крутые ребята. Работаем дальше
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex max-[1370px]:flex-col max-[1370px]:items-center justify-between last:max-[1370px]:[&>*]:mt-[40px]"
      >
        <div
          class="flex flex-col justify-between items-center max-w-[664px] max-[670px]:max-w-[384px] min-[670px]:px-[56px] pt-[40px] pb-[60px] rounded-[14px] shadow-normal"
        >
          <h3 class="mb-[29px] text-[40px] leading-[53px] font-medium">
            Наши клиенты
          </h3>

          <Swiper
            class="w-full"
            :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            :loop="true"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :keyboard="true"
            :grab-cursor="true"
          >
            <div class="max-[670px]:hidden slider-navigation">
              <img
                class="swiper-button-prev"
                src="~/assets/svg/about-page/arrow_left.svg"
                alt="arrow left"
              />
              <img
                class="swiper-button-next"
                src="~/assets/svg/about-page/arrow_right.svg"
                alt="arrow right"
              />
            </div>

            <SwiperSlide v-for="client in sliderClients">
              <div class="flex justify-center items-center">
                <div
                  class="flex flex-col items-center w-[384px] h-[207px] mb-[16px] mx-[32px]"
                >
                  <img
                    class="w-[80px] h-[80px]"
                    :src="client.img"
                    alt="client"
                  />

                  <h4 class="pb-[8px] text-2xl font-normal">
                    {{ client.name }}
                  </h4>
                  <p class="leading-[21px] text-center">
                    {{ client.message }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          class="flex flex-col justify-between items-center max-w-[664px] max-[670px]:max-w-[384px] min-[670px]:px-[56px] pt-[40px] pb-[60px] rounded-[14px] shadow-normal"
        >
          <h3 class="mb-[29px] text-[40px] leading-[53px] font-medium">
            Наши партнеры
          </h3>

          <Swiper
            class="w-full"
            :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            :loop="true"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :keyboard="true"
            :grab-cursor="true"
          >
            <div class="max-[670px]:hidden slider-navigation">
              <img
                class="swiper-button-prev"
                src="~/assets/svg/about-page/arrow_left.svg"
                alt="arrow left"
              />
              <img
                class="swiper-button-next"
                src="~/assets/svg/about-page/arrow_right.svg"
                alt="arrow right"
              />
            </div>

            <SwiperSlide v-for="partner in sliderPartners">
              <div class="flex justify-center items-center">
                <div
                  class="flex flex-col items-center w-[384px] h-[207px] mb-[16px] mx-[32px]"
                >
                  <img
                    class="w-[80px] h-[80px]"
                    :src="partner.img"
                    alt="partner"
                  />

                  <h4 class="pb-[8px] text-2xl font-normal">
                    {{ partner.name }}
                  </h4>
                  <p class="leading-[21px] text-center">
                    {{ partner.message }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
const sliderClients = {
  ClientOne: {
    img: "./clientSample.svg",
    name: "Название клиента",
    message:
      "Отзыв клиента 1. Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше",
  },
  ClientTwo: {
    img: "./clientSample.svg",
    name: "Название клиента",
    message:
      "Отзыв клиента 2. Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше",
  },
  ClientThree: {
    img: "./clientSample.svg",
    name: "Название клиента",
    message:
      "Отзыв клиента 3. Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше",
  },
};

const sliderPartners = {
  ClientOne: {
    img: "./partnerSample.svg",
    name: "Название партнера",
    message:
      "Отзыв партера 1. Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше",
  },
  ClientTwo: {
    img: "./partnerSample.svg",
    name: "Название партнера",
    message:
      "Отзыв партера 2. Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше",
  },
  ClientThree: {
    img: "./partnerSample.svg",
    name: "Название партнера",
    message:
      "Отзыв партера 3. Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше",
  },
};
</script>
