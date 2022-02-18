<template>
  <section class="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 dark:text-white">
          Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
        </h1>
        <button
          :class="`flex-shrink-0 text-white bg-${theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${theme}-600 rounded text-lg mt-10 sm:mt-0`"
        >
          Button
        </button>
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
