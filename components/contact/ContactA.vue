<template>
  <section class="text-gray-600 body-font relative dark:text-gray-400 dark:bg-gray-900">
    <div class="absolute inset-0 bg-gray-300 dark:bg-gray-900">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md dark:bg-gray-900"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-white">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            :class="`w-full bg-white rounded border border-gray-300 focus:border-${theme}-500 focus:ring-2 focus:ring-${theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-${theme}-900 dark:text-gray-100`"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
          <textarea
            id="message"
            name="message"
            :class="`w-full bg-white rounded border border-gray-300 focus:border-${theme}-500 focus:ring-2 focus:ring-${theme}-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-${theme}-900 dark:text-gray-100`"
          ></textarea>
        </div>
        <button
          :class="`text-white bg-${theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${theme}-600 rounded text-lg`"
        >
          Button
        </button>
        <p class="text-xs text-gray-500 mt-3 dark:text-gray-400 dark:text-opacity-90">
          Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
        </p>
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
