<template>
  <div>
    <div class="container max-w-3xl mx-auto bg-green-200 rounded-xl p-4">
      <h1 class="text-center text-lg mb-4">
        <span class="font-bold">Date:</span> 2022-09-15
      </h1>
      <h1 class="text-center text-lg mb-4">
        <span class="font-bold">Subject:</span> Lorem Ipsum
      </h1>
      <div class="grid grid-cols-2">
        <!-- text -->
        <div class="flex">
          <img src="../assets/images/profile_icon.svg" alt="Profile picture" />
          <span class="ml-2">User <span class="font-bold">User</span></span>
        </div>
        <div class="text-right invisible">Pusto</div>
        <div class="rounded-xl bg-gray-100 mt-4 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet interdum velit, at ornare lorem. Donec ultrices magna ac nulla
            bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
          </p>
        </div>
        <div class="text-right invisible">Pusto</div>
        <div class="text-left invisible">Pusto</div>
        <div class="flex justify-end">
          <div class="flex">
            <img
              src="../assets/images/profile_icon.svg"
              alt="Profile picture"
            />
            <span class="ml-2"
              >Stacy <span class="font-bold">Arreola</span></span
            >
          </div>
        </div>
        <div class="text-left invisible">Pusto</div>
        <div class="rounded-xl bg-gray-100 mt-4 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet interdum velit, at ornare lorem. Donec ultrices magna ac nulla
            bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
          </p>
        </div>

        <!-- text -->
        <div class="flex">
          <img src="../assets/images/profile_icon.svg" alt="Profile picture" />
          <span class="ml-2">User <span class="font-bold">User</span></span>
        </div>
        <div class="text-right invisible">Pusto</div>
        <div class="rounded-xl bg-gray-100 mt-4 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet interdum velit, at ornare lorem. Donec ultrices magna ac nulla
            bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
          </p>
        </div>
        <div class="text-right invisible">Pusto</div>
        <div class="text-left invisible">Pusto</div>
        <div class="flex justify-end">
          <div class="flex">
            <img
              src="../assets/images/profile_icon.svg"
              alt="Profile picture"
            />
            <span class="ml-2"
              >Stacy <span class="font-bold">Arreola</span></span
            >
          </div>
        </div>
        <div class="text-left invisible">Pusto</div>
        <div class="rounded-xl bg-gray-100 mt-4 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet interdum velit, at ornare lorem. Donec ultrices magna ac nulla
            bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
          </p>
        </div>
      </div>
      <div class="border border-black mt-4 mb-4"></div>
      <textarea
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Your message"
      ></textarea>
      <div class="flex justify-start">
        <button
          type="submit"
          name="create_account_button"
          value="clicked"
          class="mt-2 text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold bg-white hover:bg-green-500"
        >
          Send message
        </button>
      </div>
    </div>
  </div>
</template>
