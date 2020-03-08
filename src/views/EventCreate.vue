<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <h1>{{ user.name }} is being used in here</h1>
    <h2>{{ user.id }}</h2>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user'])
  }
}
</script>

<style></style>
