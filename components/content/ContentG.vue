<template>
  <section class="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 dark:text-white">Buy YouTube Videos</h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
          </p>
          <button
            :class="`flex mx-auto mt-6 text-white bg-${theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${theme}-600 rounded`"
          >
            Button
          </button>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 dark:text-white">The Catalyzer</h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
          </p>
          <button
            :class="`flex mx-auto mt-6 text-white bg-${theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${theme}-600 rounded`"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'red',
    },
  },
}
</script>

<style></style>
