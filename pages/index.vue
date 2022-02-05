<template>
  <div>
    <contact-a theme="indigo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactA from '~/components/contact/ContactA.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { ContactA },
})
</script>
