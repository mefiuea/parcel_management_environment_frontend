import { defineStore } from "pinia";
import { useSessionStorage } from "@vueuse/core";

export const useTokenStore = defineStore("tokenStore", {
  state: () => {
    // variables
    return {
      token: useSessionStorage('token', ""),
      isAuthenticated: useSessionStorage('isAuthenticated', false),
      userEmail: useSessionStorage('user', ""),
    };
  },

  getters: {},

  actions: {
    setToken(token, userEmail) {
      this.token = token;
      this.isAuthenticated = true;
      this.userEmail = userEmail;
    },
    removeToken() {
      this.token = "";
      this.isAuthenticated = false;
      this.userEmail = "";
    },
  },
});
