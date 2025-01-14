<template>
  <nav class="flex justify-between items-center p-4 mx-[80px]">
    <NuxtLink to="#" class="logo-button">
      <nuxt-img
        src="/its-logo.png"
        alt="IT Squarehub Logo"
        width="280"
        height="35"
      ></nuxt-img>
    </NuxtLink>
    <ul class="list-none flex gap-12 font-semibold mt-[15px]">
      <li>
        <NuxtLink
          to="/"
          @click="closeMenu"
          class="hover:underline underline-offset-8"
          exact-active-class="underline underline-offset-8"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/careers"
          @click="closeMenu"
          class="hover:underline underline-offset-8"
          exact-active-class="underline underline-offset-8"
          >Careers</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/blogs"
          @click="closeMenu"
          class="hover:underline underline-offset-8"
          exact-active-class="underline underline-offset-8"
          >Blogs</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/contact"
          @click="closeMenu"
          class="hover:underline underline-offset-8"
          exact-active-class="underline underline-offset-8"
          >Contact Us</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/about"
          @click="closeMenu"
          class="hover:underline underline-offset-8"
          exact-active-class="underline underline-offset-8"
          >About Us</NuxtLink
        >
      </li>
    </ul>
  </nav>
  <hr class="mx-[55px] border-b-[3px] border-solid border-[#6AD2FF]" />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    return { menuOpen, toggleMenu, closeMenu };
  },
};
</script>

<style scoped></style>
