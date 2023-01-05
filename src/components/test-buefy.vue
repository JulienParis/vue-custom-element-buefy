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
          <componentTitle
            :title="title"
            :inject="injectCss"
            :css="'bg-colored mr-2'"/>
        </div>
        <div class="column is-4">
          <componentName :name="$options.name"/>
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

import { mapState, mapActions } from 'vuex'
import { mixinGlobal } from '@/mixins/global.js'

export default {
  name: 'TestBuefy',
  components: {
    componentTitle: () => import(/* webpackChunkName: "componentTitle" */ '@/components/nested/componentTitle.vue'),
    componentName: () => import(/* webpackChunkName: "componentName" */ '@/components/nested/componentName.vue')
  },
  mixins: [mixinGlobal],
  props: {
    title: {
      default: 'test',
      type: String
    },
    injectCss: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      customCssFile: 'styles/custom-css.css'
    }
  },
  computed: {
    ...mapState({
      bool: state => state.boolean
    })
  },
  mounted () {
    console.log('\nTestBuefy > mounted ...')
    this.addStyle(this.customCssFile)
  },
  methods: {
    ...mapActions({
      changeBool: 'changeBool'
    }),
    toggleBool () {
      this.changeBool(this.bool)
    }
  }
}
</script>
