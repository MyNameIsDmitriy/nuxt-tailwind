<template>
  <div class="max-w-[1470px] px-[15px] mx-auto">
    <header class="flex items-center justify-between">
      <NuxtLink class="font-logo text-5xl font-bold text-secondary" to="/">
        MITech
      </NuxtLink>

      <nav class="font-primary text-2xl font-normal text-navigate">
        <ul
          class="flex items-center list-none m-0 p-0 [&>li]:mr-[48px] [&>li]:transition-[text-shadow] [&>li]:duration-[0.1s]"
        >
          <li class="active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li class="active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            <NuxtLink to="/">О&#160;нас</NuxtLink>
          </li>
          <li class="active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            <NuxtLink to="/">Услуги</NuxtLink>
          </li>
          <li class="active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] last:mr-0">
            <NuxtLink to="/">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
