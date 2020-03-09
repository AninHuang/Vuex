<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <h1>{{ user.name }} is being used in here</h1>
    <h2>{{ user.id }}</h2>
    <p>{{ getEventById(2) }}</p>
    <div>
      <input type="number" v-model.number="incrementBy" />
      <button @click="ClickIncrement">Increment</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      incrementBy: 0
    }
  },
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user'])
  },
  methods: {
    ClickIncrement() {
      this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    }
  }
}
</script>

<style></style>
