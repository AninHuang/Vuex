<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <h1>{{ user.name }} is being used in here</h1>
    <h2>{{ user.id }}</h2>
    <h2>{{ localComputed }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    // Not useful for accessing length in multiple places
    catLength() {
      return this.$store.state.categories.length
    },
    ...mapState(['user'])
  }
}
</script>

<style></style>
