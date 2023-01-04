<template>
  <div
    class="container">
    <!-- WIDGET -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/buefy/dist/buefy.min.css">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">

    <div class="columns is-multiline px-3">
      <div class="column is-12 has-text-centered">
        component <code>TestBuefy</code>
      </div>
      <div class="column is-4">
        <span class="bg-colored">
          title :
        </span>
        <code>{{ title }}</code>
      </div>
      <div class="column is-4">
        <b-button
          expanded
          icon-left="cursor-default-click-outline"
          @click="toggleBool">
          Click Me
        </b-button>
      </div>
      <div class="column is-4">
        bool: <code>{{ bool }}</code>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'TestBuefy',
  props: {
    title: {
      default: 'test',
      type: String
    }
  },
  data () {
    return {
      bool: false
    }
  },
  beforeMount () {
    this.toggleBool()
  },
  methods: {
    ...mapActions({
      setBool: 'setBool'
    }),
    toggleBool () {
      this.bool = !this.bool
      this.setBool(this.bool)
    }
  }
}

// <style>
//   .bg-colored {
//     background-color: green;
//     color: white;
//   }
// </style>
</script>
