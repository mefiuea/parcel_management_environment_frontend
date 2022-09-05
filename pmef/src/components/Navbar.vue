<template>
  <div>
    <nav class="pb-4">
        <!-- Desktop Menu -->
        <div class="border-b-2 border-lime-700" :class="{ 'border-none': !showMobileMenu }">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-between">
                    <!-- menu -->
                    <div class="flex space-x-4">
                        <!-- logo -->
                            <a href="" class="flex items-center py-1">
                                <img src="../assets/pme_icon.png" class="" width="50px" height="50px" alt="Logo">
                                <p class="pme-logo px-4 text-lime-700 hidden sm:flex">Parcel Management Environment</p>
                                <p class="pme-logo px-4 text-lime-700 hidden ss:flex sm:hidden">PME</p>
                            </a>
                        <!-- menu -->
                        <div class="hidden md:flex items-center px-2">
                            <a href="/" class="py-2 px-4 hover:text-green-500 font-bold">Home</a>
                            <a href="/" class="py-0 px-4 hover:text-green-500">About</a>
                            <a href="/" class="py-0 px-4 hover:text-green-500">Contact</a>
                        </div>
                    </div>
                    <!-- login / register -->
                    <div class="flex items-center px-2 space-x-2" :class="{ hidden: !showMobileMenu }">
                        <a href="/" class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500">Login</a>
                        <a href="/" class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500">Register</a>
                    </div>
                    <!-- button show mobile menu -->
                    <div class="md:hidden flex items-center">
                        <button @click="showMobileMenu = !showMobileMenu" class="py-0 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden border-b-2 border-lime-700" :class="{ hidden: showMobileMenu }">
            <a href="/" class="duration-300 block py-2 px-4 hover:bg-green-500 font-bold">Home</a>
            <a href="/" class="duration-300 block py-2 px-4 hover:bg-green-500">About</a>
            <a href="/" class="duration-300 block py-2 px-4 hover:bg-green-500">Contact</a>
            <div class="py-4 space-x-2">
                <a href="/" class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500">Login</a>
                <a href="/" class="duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500">Register</a>
            </div>
        </div>
    </nav>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const showMobileMenu = ref(true)
</script>

<style>
</style>
