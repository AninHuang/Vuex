<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <h1>{{ userName }} is being used in here</h1>
    <h2>{{ userID }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      userName() {
        return this.$store.state.user.name
      },
      userID() {
        return this.$store.state.user.id
      }
    }
  }
</script>

<style>

</style>
