<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <h1>{{ userName }} is being used in here</h1>
    <h2>{{ userID }}</h2>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      userName: state => state.user.name,
      userID: state => state.user.id
    })
  }
</script>

<style>

</style>
