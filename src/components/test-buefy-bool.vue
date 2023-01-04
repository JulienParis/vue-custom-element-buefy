<template>
  <div
    class="container">
    <!-- WIDGET -->
    <div class="columns is-multiline">
      <div class="column is-12 has-text-centered">
        component <code>TestBuefyBool</code>
      </div>
      <div class="column is-4">
        title : <code>{{ title }}</code>
      </div>
      <div class="column is-4">
        bool: <code>{{ bool }}</code>
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
