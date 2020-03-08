<template>
  <div>
    <h1>Create an Event, {{ NamedUser.name }}</h1>
    <h1>{{ NamedUser.name }} is being used in here</h1>
    <h2>{{ NamedUser.id }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    NamedUser: 'user'
  })
}
</script>

<style></style>
