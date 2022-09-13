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
          <form action="http://localhost:5173/" method="get" @submit.prevent>
            <p v-if="APIData.email" class="text-sm text-red-500">
              Email: {{ APIData.email[0] }}
            </p>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
              name="email"
              placeholder="Email (required)"
              v-model="submitForm.email"
            />

            <p v-if="APIData.password1" class="text-sm text-red-500">
              Password: {{ APIData.password1[0] }}
            </p>
            <input
              type="password"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
              name="password1"
              placeholder="Password (required)"
            />

            <p v-if="APIData.password2" class="text-sm text-red-500">
              Confirm password: {{ APIData.password2[0] }}
            </p>
            <input
              type="password"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
              name="password2"
              placeholder="Confirm password (required)"
            />

            <p v-if="APIData.user_name" class="text-sm text-red-500">
              User name: {{ APIData.user_name[0] }}
            </p>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
              name="user_name"
              placeholder="User name"
            />

            <p v-if="APIData.first_name" class="text-sm text-red-500">
              First name: {{ APIData.first_name[0] }}
            </p>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
              name="first_name"
              placeholder="First name"
            />

            <p v-if="APIData.last_name" class="text-sm text-red-500">
              Last name: {{ APIData.last_name[0] }}
            </p>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-4 hover:bg-gray-100"
              name="last_name"
              placeholder="Last name"
            />

            <button
              type="submit"
              name="create_account_button"
              value="clicked"
              class="w-full text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500"
              @click="getDataFromApi()"
            >
              Create Account
            </button>
          </form>

          <div class="text-center text-sm text-grey-dark mt-4">
            Already have an account?
            <a class="border-b border-green-500 text-green-500" href="/">
              Log in</a
            >.
          </div>
        </div>
        Odpowiedź:
        <div>
          {{ APIData }}
          email:
          {{ submitForm }}
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
    const submitForm = ref({
      email: "",
      password1: "",
      password2: "",
      user_name: "",
      first_name: "",
      last_name: "",
    });

    function getDataFromApi() {
      console.log("test API");
      getAPI
        .post("/api/v1/dj-rest-auth/registration/", submitForm)
        .then((response) => {
          console.log("Registration API has recived data");
          APIData.value = response.data;
          console.log("Data: ", APIData.value);
          console.log(`Status code: ${response.status}`);
        })
        .catch((err) => {
          console.log("Error response status:", err.response.status);
          console.log("Error message:", err.message);
          console.log("Error code:", err.code);
          console.log("Error:", err.response.data);
          APIData.value = err.response.data;
        });
    }

    return {
      APIData,
      getDataFromApi,
      submitForm,
    };
  },
};
</script>

<style></style>
