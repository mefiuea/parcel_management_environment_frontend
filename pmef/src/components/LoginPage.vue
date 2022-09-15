<template>
  <!-- root -->
  <div>
    <div class="min-h-0 flex flex-col mb-10">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div
          class="bg-white px-6 py-8 border-lime-700 border rounded-xl text-black w-full"
        >
          <h1 class="mb-8 text-3xl text-center">Log in</h1>
          <form action="http://localhost:5173/" method="get" @submit.prevent>
            <div
              v-if="APIDataError.non_field_errors"
              class="text-sm text-red-500"
            >
              Errors:
              <li
                v-for="item in APIDataError.non_field_errors"
                v-bind:key="item"
              >
                {{ item }}
              </li>
            </div>

            <div v-if="APIDataError.email" class="text-sm text-red-500">
              Email:
              <li v-for="item in APIDataError.email" v-bind:key="item">
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

            <div v-if="APIDataError.password" class="text-sm text-red-500">
              Password:
              <li v-for="item in APIDataError.password" v-bind:key="item">
                {{ item }}
              </li>
            </div>
            <input
              type="password"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="password"
              placeholder="Password (required)"
              v-model="submitForm.password"
            />

            <button
              type="submit"
              name="create_account_button"
              value="clicked"
              class="w-full text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500"
              @click="getDataFromApi()"
            >
              Log in
            </button>

            <button
              name="create_account_button"
              value="clicked"
              class="w-full text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500"
              @click="show()"
            >
              Show data
            </button>
          </form>
        </div>
        APIDataSuccess: {{ APIDataSuccess }}
        <br />
        APIDataError: {{ APIDataError }}
      </div>
    </div>
    <!-- root end -->
  </div>
</template>

<script>
import { ref } from "vue";
import { getAPI } from "../axios/axios-api.js";
import { useRouter } from "vue-router";
import { useTokenStore } from "../pinia/store.js";

export default {
  setup() {
    const router = useRouter();
    const tokenStore = useTokenStore();
    const APIDataError = ref("");
    const APIDataSuccess = ref("");
    const submitForm = ref({
      email: "",
      password: "",
    });
    let token = ref("");

    function getDataFromApi() {
      getAPI
        .post("/api/v1/dj-rest-auth/login/", submitForm.value)
        .then((response) => {
          APIDataSuccess.value = response.data;
          console.log("DATA success: ", APIDataSuccess.value);
          // pinia - store data (token) in session
          token = APIDataSuccess.value.key;
          tokenStore.setToken(token, submitForm.value.email);
          router
            .push({
              name: "MainPage",
            })
            .then(() => {
              router.go();
            });
        })
        .catch((err) => {
          tokenStore.removeToken();
          console.log("Error response status:", err.response.status);
          if (err.response.status === 0) {
            console.log("Network error - redirection");
            tokenStore.removeToken();
            router.push({
              name: "ServerError",
            });
          }
          console.log("Error message:", err.message);
          console.log("Error code:", err.code);
          console.log("Error data:", err.response.data);
          APIDataError.value = err.response.data;
        });
    }

    function show() {
      console.log("show token");
      token = sessionStorage.getItem("token");
      console.log("token: ", token, "typ: ", typeof token);
    }

    return {
      APIDataError,
      APIDataSuccess,
      getDataFromApi,
      submitForm,
      tokenStore,
      token,
      show,
    };
  },
};
</script>

<style></style>
