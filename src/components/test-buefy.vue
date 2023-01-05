<template>
  <div class="widget-wrapper">
    <!-- <link
      rel="stylesheet"
      href="https://unpkg.com/buefy/dist/buefy.min.css"> -->
    <!-- <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"> -->
    <!-- WIDGET -->
    <div
      class="container">
      <div class="columns is-multiline px-3">
        <div class="column is-12 has-text-centered">
          component : <code>TestBuefy</code>
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
          bool : <code>{{ bool }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mixinGlobal } from '@/mixins/global.js'

export default {
  name: 'TestBuefy',
  mixins: [mixinGlobal],
  props: {
    title: {
      default: 'test',
      type: String
    }
  },
  data () {
    return {
      bool: false,
      customCssFile: 'styles/custom-css.css'
    }
  },
  mounted () {
    console.log('\nTestBuefy > beforeCreate ...')
    this.addStyle(this.customCssFile)
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
</script>
