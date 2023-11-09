<template>
  <div class="max-w-container px-4 mx-auto mt-10 overflow-hidden">
    <header class="flex items-center justify-between">
      <NuxtLink class="font-logo text-5xl font-bold text-secondary" to="/">
        MITech
      </NuxtLink>

      <nav class="font-primary text-2xl font-normal text-navigate">
        <div class="tablet:hidden" @click="toggleMenu">
          <svg
            v-if="isPressed"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#2672ab"
            class="w-12 h-12 duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            v-if="!isPressed"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#2672ab"
            class="w-12 h-12 rotate-45"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>

        <ul
          class="fixed tablet:static flex flex-col tablet:flex-row items-center w-full bg-cultured/90 tablet:bg-cultured/0 z-20 list-none transition-all duration-300 overflow-x-hidden [&>li]:my-6 tablet:[&>li]:my-0 tablet:[&>li]:mr-12 [&>li]:transition-[text-shadow] [&>li]:duration-[0.1s]"
          :class="[isPressed ? 'left-full' : 'left-0']"
        >
          <li
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
          >
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
          >
            <NuxtLink to="/about">О нас</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
          >
            <NuxtLink to="/services">Услуги</NuxtLink>
          </li>
          <li
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] last:mr-0"
          >
            <NuxtLink to="/contacts">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
let isPressed = ref(true);
// let scrollPosition = ref(window.scrollY);

// created(() => {
//   if (process.client) {
//     console.log(window.scrollY);
//   }
// });

const toggleMenu = () => {
  isPressed.value = !isPressed.value;
};
// if (scrollPosition != window.scrollY) isPressed.value = true;
</script>
