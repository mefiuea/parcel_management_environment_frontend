<template>
  <!-- root -->
  <div>
    <div class="min-h-0 flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div
          class="bg-white px-6 py-8 border-lime-700 border rounded-xl text-black w-full"
        >
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
            name="password1"
            placeholder="Password"
          />
          <input
            type="password"
            class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
            name="password2"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            name="create_account_button"
            value="clicked"
            class="w-full text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500"
            @click="getDataFromApi"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            Already have an account?
            <a class="border-b border-green-500 text-green-500" href="/">
              Log in</a
            >.
          </div>
        </div>
      </div>
    </div>
    <!-- root end -->
  </div>
</template>

<script>
import { onMounted, onUpdated, ref, toRefs } from "vue";
import { getAPI } from "../axios/axios-api.js";

export default {
  props: {},

  setup(props) {
    const APIData = ref([]);

    function getDataFromApi() {
      console.log("test API");
    }

    return {
      APIData,
      getDataFromApi,
    };
  },
};
</script>

<style></style>
