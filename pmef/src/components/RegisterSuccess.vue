<template>
  <!-- root -->
  <div class="container mx-auto">
    <div
      class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md m-4"
      role="alert"
    >
      <div class="flex">
        <div class="m-2">
          <img
            src="../assets/images/success_icon.svg"
            alt="Success icon"
            class="w-8"
          />
        </div>
        <div>
          <p class="font-bold">Registration was successful!</p>
          <div>
            <p class="text-sm">
              A message has been sent to your email. It contains a link to
              activate your account. Thank you for registering. You can go to
              <router-link
                :to="{ name: 'MainPage' }"
                class="border-b border-green-500 text-green-500"
              >
                log in</router-link
              >
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end root -->
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
