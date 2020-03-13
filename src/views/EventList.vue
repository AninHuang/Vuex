<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- Only show previous link if not on first page -->
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        ref="pre"
        >Pre Page</router-link
      >
    </template>
    <template v-if="hasNextPage">
      |
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        ref="next"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3, // perPage 設在此而不是在 data，表示 perPage 不會是響應式的
      page: this.page // Access computed page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.eventsTotal > this.page * this.perPage
    },
    ...mapState(['events', 'eventsTotal', 'user'])
  }
}
</script>
