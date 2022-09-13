<template>
  <div>
    <nav class="pb-10">
      <!-- Desktop Menu -->
      <div
        class="border-b-2 border-lime-700"
        :class="{ 'border-none': !showMobileMenu }"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between">
            <!-- menu -->
            <div class="flex space-x-4">
              <!-- logo -->
              <router-link
                :to="{ name: 'MP' }"
                class="flex items-center py-1"
              >
                <img
                  src="../assets/images/pme_icon.png"
                  class="max-h-12"
                  alt="Logo"
                />
                <p class="pme-logo px-4 text-lime-700 hidden sm:flex">
                  Parcel Management Environment
                </p>
                <p class="pme-logo px-4 text-lime-700 hidden ss:flex sm:hidden">
                  PME
                </p>
              </router-link>
              <!-- menu -->
              <div class="hidden md:flex items-center px-2">
                <router-link
                  :to="{ name: 'MP' }"
                  class="py-2 px-4 hover:text-green-500 font-bold"
                  >Home</router-link
                >
                <router-link to="/" class="py-0 px-4 hover:text-green-500"
                  >About</router-link
                >
                <router-link to="/" class="py-0 px-4 hover:text-green-500"
                  >Contact</router-link
                >
              </div>
            </div>
            <!-- login / register -->
            <div
              class="flex items-center px-2 space-x-2"
              :class="{ hidden: !showMobileMenu }"
            >
              <router-link
                to="/"
                class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500"
                >Login</router-link
              >
              <router-link
                :to="{ name: 'RP' }"
                class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500"
                >Register</router-link
              >
            </div>
            <!-- button show mobile menu -->
            <div class="md:hidden flex items-center">
              <button
                @click="showMobileMenu = !showMobileMenu"
                class="py-0 px-2"
              >
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
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        class="md:hidden border-b-2 border-lime-700"
        :class="{ hidden: showMobileMenu }"
      >
        <router-link
          :to="{ name: 'MP' }"
          class="block mx-4 my-4 hover:text-green-500 font-bold"
          >Home</router-link
        >
        <router-link to="/" class="block mx-4 my-4 hover:text-green-500"
          >About</router-link
        >
        <router-link to="/" class="block mx-4 my-4 hover:text-green-500"
          >Contact</router-link
        >
        <div class="py-4 space-x-2 mx-4">
          <router-link
            to="/"
            class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500"
            >Login</router-link
          >
          <router-link
            :to="{ name: 'RP' }"
            class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500"
            >Register</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showMobileMenu = ref(true);
</script>

<style></style>
