<template>
  <div>
    <h1 :class="`text-${theme}-400`">hi {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'red',
    },
  },
  data() {
    return { userName: 'gerrit' }
  },
}
</script>

<style></style>
