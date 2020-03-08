<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <h1>{{ user.name }} is being used in here</h1>
    <h2>{{ user.id }}</h2>
    <p>There are {{ catLength }} in categories</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user'])
  }
}
</script>

<style></style>
