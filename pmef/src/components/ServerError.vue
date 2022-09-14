<template>
  <!-- root -->
  <div class="container mx-auto">
    <div
      class="bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md m-4"
      role="alert"
    >
      <div class="flex">
        <div class="m-2">
          <img
            src="../assets/images/error_icon.svg"
            alt="Success icon"
            class="w-8"
          />
        </div>
        <div>
          <p class="font-bold">Something went wrong.</p>
          <div>
            <p class="text-sm">
              Apparently, there are problems with server. Please try again later
              or contact administration.
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
