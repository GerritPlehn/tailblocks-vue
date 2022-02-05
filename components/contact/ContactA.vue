<template>
  <section class="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4) dark:opacity(0.16)"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      />
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 dark:shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600 dark:text-default">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div class="relative mb-4">
          <label htmlFor="email" class="leading-7 text-sm text-gray-600 dark:text-gray-400"> Email </label>
          <input
            id="email"
            type="email"
            name="email"
            :class="`w-full
            bg-white
            dark:bg-gray-800
            rounded
            border
            border-gray-300
            dark:border-gray-700
            focus:border-${theme}-500
            focus:ring-2
            focus:ring-${theme}-200
            dark:focus:ring-${theme}-900
            text-base
            outline-none
            text-gray-700
            dark:text-gray-100
            py-1
            px-3
            leading-8
            transition-colors
            duration-200
            ease-in-out`"
          />
        </div>
        <div class="relative mb-4">
          <label htmlFor="message" class="leading-7 text-sm text-gray-600 dark:text-gray-400"> Message </label>
          <textarea
            id="message"
            name="message"
            :class="`w-full
            bg-white
            dark:bg-gray-800
            rounded
            border
            border-gray-300
            dark:border-gray-700
            focus:border-${theme}-500
            focus:ring-2
            focus:ring-${theme}-200
            dark:focus:ring-${theme}-900
            h-32
            text-base
            outline-none
            text-gray-700
            dark:text-gray-100
            py-1
            px-3
            resize-none
            leading-6
            transition-colors
            duration-200
            ease-in-out`"
          ></textarea>
        </div>
        <button
          :class="`text-white
          bg-${theme}-500
          border-0
          py-2
          px-6
          focus:outline-none
          hover:bg-${theme}-600
          rounded
          text-lg`"
        >
          Button
        </button>
        <p class="text-xs text-gray-500 dark:text-gray-400 dark:text-opacity-90 mt-3">
          Chicharrones blog helvetica normcore ieland tousled brook viral artisan.
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
