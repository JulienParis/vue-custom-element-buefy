import Vue from 'vue'
import Vuex from 'vuex'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'
import './registerServiceWorker'

import { defaultStore } from './store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

import TestBuefy from './components/test-buefy.vue'
import TestBuefyBool from './components/test-buefy-bool.vue'

Vue.config.productionTip = false

// install CSS framework - Buefy
Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})

// install ApexCharts
// Vue.use(VueApexCharts)
// Vue.component('ApexChart', VueApexCharts)

// install Vuex (store)
Vue.use(Vuex)

const store = new Vuex.Store({
  ...defaultStore
})
TestBuefy.store = store
TestBuefyBool.store = store

// install web component
Vue.use(vueCustomElement)

// const options = { shadow: true }
const options = {
  // shadow: true
  // shadow: true,
  // beforeCreateVueInstance (root) {
  //   const rootNode = root.el.getRootNode()
  //   if (rootNode instanceof ShadowRoot) {
  //     root.shadowRoot = rootNode
  //   } else {
  //     root.shadowRoot = document.head
  //   }
  //   return root
  // }
}
// TestBuefy.buefy = buefy
// TestBuefyBool.buefy = buefy

Vue.customElement('test-buefy', TestBuefy, options)
Vue.customElement('test-buefy-bool', TestBuefyBool, options)
