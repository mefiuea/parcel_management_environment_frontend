<template>
  <div>
    <nav>
        <!-- Desktop Menu -->
        <div class="border-b-2 border-lime-700">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-between">
                    <!-- menu -->
                    <div class="flex space-x-4">
                        <!-- logo -->
                            <a href="" class="flex items-center py-1">
                                <img src="../assets/pme_icon.png" class="" width="50px" height="50px" alt="Logo">
                                <!-- <img src="../assets/pme_text.png" class="logo mt-2" width="300px" height="100px" alt="text"> -->
                                <p class="pme-logo px-4 text-lime-700">Parcel Management Environment</p>
                            </a>
                        <!-- menu -->
                        <div class="hidden md:flex items-center px-2">
                            <a href="/" class="py-2 px-4 hover:text-green-500 rounded-full font-bold">Home</a>
                            <a href="/" class="py-0 px-4 hover:text-green-500">About</a>
                            <a href="/" class="py-0 px-4 hover:text-green-500">Contact</a>
                        </div>
                    </div>
                    <!-- login -->
                    <div class="hidden md:flex items-center px-2 space-x-2">
                        <a href="/" class="py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500">Login</a>
                        <a href="/" class="py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500">Register</a>
                    </div>
                    <!-- button show mobile menu -->
                    <div class="md:hidden flex items-center">
                        <button @click="showMobileMenu = !showMobileMenu" class="py-0 px-2">
                            <!-- <img src="../assets/dropdown_icon.png" width="25px" height="25px" alt="Drop down menu"> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden" :class="{ hidden: showMobileMenu }">
            <a href="/" class="block py-2 px-4 hover:bg-green-500">Home</a>
            <a href="/" class="block py-2 px-4 hover:bg-green-500">About</a>
            <a href="/" class="block py-2 px-4 hover:bg-green-500">Contact</a>
        </div>
    </nav>
    <div class="p-8 text-2xl font-extrabold text-center">Content</div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const showMobileMenu = ref(true)
</script>

<style>
</style>