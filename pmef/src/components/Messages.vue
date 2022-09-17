<template>
  <div>
    <div
      class="container max-w-7xl mx-auto grid grid-cols-2 gap-8 border border-lime-700 rounded-xl p-4"
    >
      <div>
        <p class="text-center text-3xl mb-4">list of started conversations:</p>
        <div class="bg-green-200 rounded-xl p-4 mb-4">
          <div class="grid grid-cols-2">
            <div class="flex">
              <img
                src="../assets/images/profile_icon.svg"
                alt="Profile picture"
              />
              <span class="ml-2"
                >Timothy <span class="font-bold">Greenspan</span></span
              >
            </div>
            <div class="flex justify-end">
              <span class=""
                ><span class="font-bold">Date:</span> 2022-09-17</span
              >
            </div>
          </div>
          <div class="rounded-xl bg-gray-100 mt-4 p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet interdum velit, at ornare lorem. Donec ultrices magna ac
              nulla bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
            </p>
          </div>
        </div>
        <!-- ------ -->
        <div class="bg-green-200 rounded-xl p-4 mb-4">
          <div class="grid grid-cols-2">
            <div class="flex">
              <img
                src="../assets/images/profile_icon.svg"
                alt="Profile picture"
              />
              <span class="ml-2"
                >Stacy <span class="font-bold">Arreola</span></span
              >
            </div>
            <div class="flex justify-end">
              <span class=""
                ><span class="font-bold">Date:</span> 2022-09-15</span
              >
            </div>
          </div>
          <div class="rounded-xl bg-gray-100 mt-4 p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet interdum velit, at ornare lorem. Donec ultrices magna ac
              nulla bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
            </p>
          </div>
        </div>
        <!-- ------ -->
        <div class="bg-green-200 rounded-xl p-4 mb-4">
          <div class="grid grid-cols-2">
            <div class="flex">
              <img
                src="../assets/images/profile_icon.svg"
                alt="Profile picture"
              />
              <span class="ml-2"
                >James <span class="font-bold">Tran</span></span
              >
            </div>
            <div class="flex justify-end">
              <span class=""
                ><span class="font-bold">Date:</span> 2022-09-14</span
              >
            </div>
          </div>
          <div class="rounded-xl bg-gray-100 mt-4 p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet interdum velit, at ornare lorem. Donec ultrices magna ac
              nulla bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
            </p>
          </div>
        </div>
        <!-- ------ -->
        <div class="bg-green-200 rounded-xl p-4 mb-4">
          <div class="grid grid-cols-2">
            <div class="flex">
              <img
                src="../assets/images/profile_icon.svg"
                alt="Profile picture"
              />
              <span class="ml-2"
                >Flora <span class="font-bold">Rosario</span></span
              >
            </div>
            <div class="flex justify-end">
              <span class=""
                ><span class="font-bold">Date:</span> 2021-07-02</span
              >
            </div>
          </div>
          <div class="rounded-xl bg-gray-100 mt-4 p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet interdum velit, at ornare lorem. Donec ultrices magna ac
              nulla bibendum tincidunt. Sed sed vehicula enim, at tempor tellus.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center text-3xl mb-4">New conversation:</p>
        <div class="bg-orange-200 rounded-xl p-4 mb-4">
          <div class="grid grid-cols-2">
            <div class="flex">
              <input
                type="text"
                class="block w-full p-3 rounded-xl mb-2 mt-2 hover:bg-gray-100"
                name="registration number"
                placeholder="Registration number"
              />
            </div>
            <div class="flex justify-end">
              <button
                type="submit"
                name="create_account_button"
                value="clicked"
                class="text-center hover:bg-green-dark focus:outline-none my-1 duration-300 py-2 px-4 rounded-full text-black font-bold bg-white hover:bg-green-500"
              >
                Send message
              </button>
            </div>
            <div class="block w-full p-3 rounded-xl mb-2 mt-2 bg-white">
              <span class="text-gray-400"
                >List of persons with this registration number:</span
              >
              <div class="flex">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <li class="list-none">John</li>
              </div>
              <div class="flex">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <li class="list-none">Robert</li>
              </div>
            </div>
          </div>
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
