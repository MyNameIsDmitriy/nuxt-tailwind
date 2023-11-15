<template>
  <div class="max-w-container px-4 mx-auto mt-10 overflow-hidden">
    <header class="flex items-center justify-between">
      <NuxtLink class="font-logo text-5xl font-bold text-secondary" to="/">
        MITech
      </NuxtLink>

      <nav class="font-primary text-2xl font-normal text-navigate">
        <div class="tablet:hidden" @click="toggleMenu">
          <img
            v-if="!isPressed"
            src="../assets/svg/burger-open.svg"
            alt=""
            class="w-12 h-12 duration-300"
          />

          <img
            v-else
            src="../assets/svg/burger-close.svg"
            alt=""
            class="w-12 h-12 rotate-45"
          />
        </div>

        <ul
          class="fixed tablet:static flex flex-col tablet:flex-row items-center w-full bg-cultured/90 tablet:bg-cultured/0 z-20 list-none transition-all duration-300 overflow-x-hidden [&>li]:my-6 tablet:[&>li]:my-0 tablet:[&>li]:mr-12 [&>li]:transition-[text-shadow] [&>li]:duration-[0.1s]"
          :class="[!isPressed ? 'left-full' : 'left-0']"
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
import { onMounted, onUnmounted } from "vue";

let isPressed = ref(false);

const toggleMenu = () => {
  isPressed.value = !isPressed.value;
};
const closeMenu = () => {
  isPressed.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", closeMenu);
});
onUnmounted(() => {
  window.removeEventListener("scroll", closeMenu);
});
</script>
