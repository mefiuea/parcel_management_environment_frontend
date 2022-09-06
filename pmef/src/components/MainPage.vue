<template>
  <div>
    <div
      class="
        max-w-screen-lg
        bg-white
        rounded-xl
        border-lime-700 border
        overflow-hidden
        mx-4
      "
    >
      <div class="md:flex">
        <div class="md:shrink-0 px-4 py-4">
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/question_circle_icon.png"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8 grow">
          <div
            class="uppercase tracking-wide text-4xl font-semibold text-center"
          >
            What is it about?
          </div>
          <div class="mt-4 text-justify">
            <span class="pme-logo text-lime-700">Parcel Management System</span>
            is a system for managing parcels in your home. It allows you to
            create virtual parcels that can be combined with real parcels, so
            you can stay organized. Please see below how you can use the system
            in a few simple steps, thanks to which you will no longer have to
            remember where your items are.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref, toRefs } from "vue";

export default {
  props: {},

  setup(props) {
    // variables
    const counter = ref(2022);
    const testFunction = test();

    // functions
    function increment() {
      counter.value++;
      console.log(`Counter value = ${counter.value}.`);
    }

    function decrement() {
      counter.value--;
      console.log(`Counter value = ${counter.value}.`);
    }

    function test() {
      console.log("TEST");
    }

    return {
      counter,
      increment,
      decrement,
      testFunction,
    };
  },

  // mounted
  // mounted() {
  //   console.log(`Counter value = ${counter.value}.`);
  // },
};
</script>
