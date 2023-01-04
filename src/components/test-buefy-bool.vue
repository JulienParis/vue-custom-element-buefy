<template>
  <div
    class="container">
    <link
      rel="stylesheet"
      href="https://unpkg.com/buefy/dist/buefy.min.css">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
    <!-- WIDGET -->
    <div class="columns is-multiline px-3">
      <div class="column is-12 has-text-centered">
        component <code>TestBuefyBool</code>
      </div>
      <div class="column is-4">
        title : <code>{{ title }}</code>
      </div>
      <div class="column is-4">
        bool: <code>{{ bool }}</code>
      </div>
      <div class="column is-4">
        test icon:
        <b-icon icon="home"/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'TestBuefyBool',
  props: {
    title: {
      default: 'test',
      type: String
    }
  },
  computed: {
    ...mapState({
      bool: state => state.boolean
    })
  }
}
</script>
