<template>
  <div class="widget-wrapper">
    <!-- DEPRECATED -->
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
            :css="'mr-2'"/>
        </div>
        <div class="column is-3">
          <componentName :name="$options.name"/>
        </div>
        <div class="column is-3">
          <span class="bg-colored">
            bool :
          </span>
          <code>{{ bool }}</code>
        </div>
        <div class="column is-3">
          <span class="bg-colored">
            icon :
          </span>
          <b-icon :icon="bool ? 'home' : 'home-outline'"/>
        </div>
        <div class="column is-3">
          <nestedComponent :icon="bool ? 'github' : 'gitlab'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { mixinGlobal } from '@/mixins/global.js'

export default {
  name: 'TestBuefyBool',
  components: {
    componentTitle: () => import(/* webpackChunkName: "componentTitle" */ '@/components/nested/componentTitle.vue'),
    componentName: () => import(/* webpackChunkName: "componentName" */ '@/components/nested/componentName.vue'),
    nestedComponent: () => import(/* webpackChunkName: "nestedComponent" */ '@/components/nested/nestedComponent.vue')
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
  computed: {
    ...mapState({
      bool: state => state.boolean
    })
  },
  mounted () {
    console.log('\nTestBuefyBool > beforeCreate ...')
    this.getRootNode()
  }
}
</script>
