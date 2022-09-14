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

            <div
              :class="{
                'border-2': APIDataError.non_field_errors,
                'border-dashed': APIDataError.non_field_errors,
                'border-red-500': APIDataError.non_field_errors,
              }"
            >
              <!-- class="border-2 border-dashed border-red-500" -->
              <div v-if="APIDataError.password1" class="text-sm text-red-500">
                Password:
                <li v-for="item in APIDataError.password1" v-bind:key="item">
                  {{ item }}
                </li>
              </div>
              <div
                v-if="APIDataError.non_field_errors"
                class="text-sm text-red-500"
              >
                {{ APIDataError.non_field_errors[0] }}
              </div>
              <input
                type="password"
                class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
                name="password1"
                placeholder="Password (required)"
                v-model="submitForm.password1"
              />

              <div v-if="APIDataError.password2" class="text-sm text-red-500">
                Confirm password:
                <li v-for="item in APIDataError.password2" v-bind:key="item">
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

            <div v-if="APIDataError.user_name" class="text-sm text-red-500">
              User name:
              <li v-for="item in APIDataError.user_name" v-bind:key="item">
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

            <div v-if="APIDataError.first_name" class="text-sm text-red-500">
              First name:
              <li v-for="item in APIDataError.first_name" v-bind:key="item">
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

            <div v-if="APIDataError.last_name" class="text-sm text-red-500">
              Last name:
              <li v-for="item in APIDataError.last_name" v-bind:key="item">
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

            <!-- Submit button if -->
            <button
              v-if="!loading"
              type="submit"
              name="create_account_button"
              value="clicked"
              class="w-full text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-red-500 hover:bg-red-500"
              @click="getDataFromApi()"
            >
              Create Account
            </button>
            <!-- else -->
            <div v-else class="text-center">
              <div role="status">
                <svg
                  class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <div>
                  <span class="">Loading...</span>
                </div>
              </div>
            </div>
          </form>

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
import { useRouter } from "vue-router";

export default {
  props: {},

  setup(props) {
    const APIDataError = ref("");
    const APIDataSuccess = ref("");
    const submitForm = ref({
      email: "",
      password1: "",
      password2: "",
      user_name: "",
      first_name: "",
      last_name: "",
    });
    const loading = ref(false);
    const router = useRouter();

    function getDataFromApi() {
      loading.value = true;
      getAPI
        .post("/api/v1/dj-rest-auth/registration/", submitForm.value)
        .then((response) => {
          loading.value = true;
          APIDataSuccess.value = response.data;
          router.push({
            name: "MP",
          });
        })
        .catch((err) => {
          loading.value = false;
          console.log("Error response status:", err.response.status);
          console.log("Error message:", err.message);
          console.log("Error code:", err.code);
          console.log("Error:", err.response.data);
          APIDataError.value = err.response.data;
        });
    }

    return {
      APIDataError,
      APIDataSuccess,
      getDataFromApi,
      submitForm,
      loading,
    };
  },
};
</script>

<style></style>
