<template>
  <div>
    <blog-c theme="indigo" />
    <blog-b theme="red" />
    <blog-a theme="yellow" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BlogA from '~/components/BlogA.vue'
import BlogB from '~/components/BlogB.vue'
import BlogC from '~/components/BlogC.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { BlogB, BlogA, BlogC },
})
</script>
