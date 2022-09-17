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
          <h1 class="mb-8 text-3xl text-center">Cars registration</h1>
          <form action="http://localhost:5173/" method="get" @submit.prevent>
            <input
              type="text"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="brand"
              placeholder="Brand (required)"
            />

            <input
              type="password"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="model"
              placeholder="Model (required)"
            />

            <input
              type="password"
              class="block border border-lime-700 w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
              name="registration_number"
              placeholder="Registration number (required)"
            />

            <button
              type="submit"
              name="create_account_button"
              value="clicked"
              class="w-full text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold border-2 border-green-500 hover:bg-green-500"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- root end -->
  </div>
</template>
