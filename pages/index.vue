<template>
  <div>
    <contact-c theme="indigo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactC from '~/components/contact/ContactC.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { ContactC },
})
</script>
