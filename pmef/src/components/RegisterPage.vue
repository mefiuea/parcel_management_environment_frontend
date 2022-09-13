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
            <div v-if="APIData.email" class="text-sm text-red-500">
              Email:
              <li v-for="item in APIData.email" v-bind:key="item">
                {{ item }}
              </li>
            </div>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="email"
              placeholder="Email (required)"
              v-model="submitForm.email"
            />

            <div
              :class="{
                'border-2': APIData.non_field_errors,
                'border-dashed': APIData.non_field_errors,
                'border-red-500': APIData.non_field_errors,
              }"
            >
              <!-- class="border-2 border-dashed border-red-500" -->
              <div v-if="APIData.password1" class="text-sm text-red-500">
                Password:
                <li v-for="item in APIData.password1" v-bind:key="item">
                  {{ item }}
                </li>
              </div>
              <div v-if="APIData.non_field_errors" class="text-sm text-red-500">
                {{ APIData.non_field_errors[0] }}
              </div>
              <input
                type="password"
                class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
                name="password1"
                placeholder="Password (required)"
                v-model="submitForm.password1"
              />

              <div v-if="APIData.password2" class="text-sm text-red-500">
                Confirm password:
                <li v-for="item in APIData.password2" v-bind:key="item">
                  {{ item }}
                </li>
              </div>
              <input
                type="password"
                class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
                name="password2"
                placeholder="Confirm password (required)"
                v-model="submitForm.password2"
              />
            </div>

            <div v-if="APIData.user_name" class="text-sm text-red-500">
              User name:
              <li v-for="item in APIData.user_name" v-bind:key="item">
                {{ item }}
              </li>
            </div>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="user_name"
              placeholder="User name"
              v-model="submitForm.user_name"
            />

            <div v-if="APIData.first_name" class="text-sm text-red-500">
              First name:
              <li v-for="item in APIData.first_name" v-bind:key="item">
                {{ item }}
              </li>
            </div>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="first_name"
              placeholder="First name"
              v-model="submitForm.first_name"
            />

            <div v-if="APIData.last_name" class="text-sm text-red-500">
              Last name:
              <li v-for="item in APIData.last_name" v-bind:key="item">
                {{ item }}
              </li>
            </div>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="last_name"
              placeholder="Last name"
              v-model="submitForm.last_name"
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
          {{ APIDataSuccess }}
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
    const APIDataSuccess = ref('pusto');
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
        .post("/api/v1/dj-rest-auth/registration/", submitForm.value)
        .then((response) => {
          console.log("Registration API has recived data");
          APIDataSuccess.value = response.data;
          console.log("Data: ", APIDataSuccess.value);
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
      APIDataSuccess,
      getDataFromApi,
      submitForm,
    };
  },
};
</script>

<style></style>
