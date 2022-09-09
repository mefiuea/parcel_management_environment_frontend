<template>
  <!-- root -->
  <div class="">
    <!-- card about -->
    <div
      class="max-w-screen-lg mx-auto bg-white rounded-xl border-lime-700 border overflow-hidden mb-4 hover:bg-green-100 duration-500"
    >
      <div class="md:flex items-center">
        <div class="md:shrink-0 px-4 py-4">
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/question_circle_icon.png"
            alt="Question mark image"
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
    <!-- card step1 -->
    <div
      class="max-w-screen-lg mx-auto bg-white rounded-xl border-lime-700 border overflow-hidden mb-4 hover:bg-green-100 duration-500"
    >
      <div class="md:flex items-center">
        <div class="p-8 grow">
          <div>
            <div
              class="uppercase tracking-wide text-4xl font-semibold text-center"
            >
              Create a package
            </div>
            <div class="mt-4 text-center">
              Gather the things you want to pack, place them inside box and
              close it.
            </div>
          </div>
        </div>
        <div class="md:shrink-0 px-4 py-4">
          <div class="text-center font-mono font-bold text-2xl">Step 1</div>
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/step1.png"
            alt="Open box image"
          />
        </div>
      </div>
    </div>
    <!-- card step2 -->
    <div
      class="max-w-screen-lg mx-auto bg-white rounded-xl border-lime-700 border overflow-hidden mb-4 hover:bg-green-100 duration-500"
    >
      <div class="md:flex items-center">
        <div class="md:shrink-0 px-4 py-4">
          <div class="text-center font-mono font-bold text-2xl">Step 2</div>
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/step2.png"
            alt="Box with padlock image"
          />
        </div>
        <div class="p-8 grow">
          <div>
            <div
              class="uppercase tracking-wide text-4xl font-semibold text-center"
            >
              Log in to your account
            </div>
            <div class="mt-4 text-center">
              If you do not have an account yet, register on the site. Just
              enter your email and password and confirm your account by clicking
              on the link sent by email.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card step3 -->
    <div
      class="max-w-screen-lg mx-auto bg-white rounded-xl border-lime-700 border overflow-hidden mb-4 hover:bg-green-100 duration-500"
    >
      <div class="md:flex items-center">
        <div class="p-8 grow">
          <div>
            <div
              class="uppercase tracking-wide text-4xl font-semibold text-center"
            >
              Click
              <a
                href="/"
                class="duration-300 py-2 px-4 rounded-full text-black border-2 border-green-500 hover:bg-green-500 text-xs align-middle"
                >Add package</a
              >
              in the menu
            </div>
            <div class="mt-4 text-center">
              Fill out the form with information about the package (e.g. package
              name or package contents). Save this information using the button.
              At this point, package will be saved to the system and QR code
              will be generated, which you can download and print.
            </div>
          </div>
        </div>
        <div class="md:shrink-0 px-4 py-4">
          <div class="text-center font-mono font-bold text-2xl">Step 3</div>
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/step3.png"
            alt="Printer image"
          />
        </div>
      </div>
    </div>
    <!-- card step4 -->
    <div
      class="max-w-screen-lg mx-auto bg-white rounded-xl border-lime-700 border overflow-hidden mb-4 hover:bg-green-100 duration-500"
    >
      <div class="md:flex items-center">
        <div class="md:shrink-0 px-4 py-4">
          <div class="text-center font-mono font-bold text-2xl">Step 4</div>
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/step4.png"
            alt="Box with QR code image"
          />
        </div>
        <div class="p-8 grow">
          <div>
            <div
              class="uppercase tracking-wide text-4xl font-semibold text-center"
            >
              QR code
            </div>
            <div class="mt-4 text-center">
              Now you can glue printed QR code to your package.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card step5 -->
    <div
      class="max-w-screen-lg mx-auto bg-white rounded-xl border-lime-700 border overflow-hidden mb-20 hover:bg-green-100 duration-500"
    >
      <div class="md:flex items-center">
        <div class="p-8 grow">
          <div>
            <div
              class="uppercase tracking-wide text-4xl font-semibold text-center"
            >
              Finish
            </div>
            <div class="mt-4 text-center">
              Now you can put your package away. Thanks to the QR code, you
              always have access to information about the package (its
              contents). All you have to do is scan code with your phone and get
              information about package.
            </div>
          </div>
        </div>
        <div class="md:shrink-0 px-4 py-4">
          <div class="text-center font-mono font-bold text-2xl">Step 5</div>
          <img
            class="h-48 w-full object-contain md:h-full md:w-48"
            src="../assets/images/step5.png"
            alt="Truck image"
          />
        </div>
      </div>
    </div>
    <!-- root end -->
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

<style></style>
