<template>
  <div>
    <p>Test</p>
    <button
      class="
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      v-on:click="increment()"
    >
      Increment++
    </button>

    <button
      class="
        bg-red-500
        hover:bg-red-400
        text-white
        font-bold
        py-2
        px-4
        border-b-4 border-red-700
        hover:border-red-500
        rounded
      "
      v-on:click="decrement()"
    >
      Decrement--
    </button>
    <div class="m-6">
      <p class="text-9xl">Counter status: {{ counter }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";

// variables
const counter = ref(2022);

// functions
function increment() {
  counter.value++;
  console.log(`Counter value = ${counter.value}.`);
}

function decrement() {
  counter.value--;
  console.log(`Counter value = ${counter.value}.`);
}

// mounted
onMounted(() => {
  console.log(`Counter value = ${counter.value}.`);
});

</script>
