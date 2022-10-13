import { defineStore } from "pinia";
import { useSessionStorage } from "@vueuse/core";

export const useTokenStore = defineStore("tokenStore", {
  state: () => {
    // variables
    return {
      // token: useSessionStorage('token', ""),
      // token: $cookies.set("token", ""),
      token: "",
      // isAuthenticated: useSessionStorage('isAuthenticated', false),
      // isAuthenticated: $cookies.set("isAuthenticated", false),
      isAuthenticated: "",
      // userEmail: useSessionStorage('user', ""),
      // userEmail: $cookies.set("user", ""),
      userEmail: "",
    };
  },

  getters: {},

  actions: {
    setToken(token, userEmail) {
      // this.token = token;
      this.token = $cookies.set("token", token);
      // this.isAuthenticated = true;
      this.isAuthenticated = $cookies.set("isAuthenticated", true);
      // this.userEmail = userEmail;
      this.userEmail = $cookies.set("user", userEmail);
    },
    removeToken() {
      this.token = "";
      this.isAuthenticated = false;
      this.userEmail = "";
    },
  },
});
