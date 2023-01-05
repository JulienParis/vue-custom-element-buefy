import Vue from 'vue'
import Vuex from 'vuex'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'
import './registerServiceWorker'

import { defaultStore } from './store'

import Buefy from 'buefy'
// DEPRECATED > Those css imports are injected as <link> tags into <head> in index.html
/* eslint import/no-duplicates: off */
// import 'buefy/dist/buefy.min.css'
// import '@mdi/font/css/materialdesignicons.min.css'

// Import css as raw strings for further injection in options.shadowCss
/* eslint import/no-webpack-loader-syntax: off */
import initCss from '!!raw-loader!./styles/initialize.css'
import buefyCss from '!!raw-loader!buefy/dist/buefy.min.css'
import materialDesignFonts from '!!raw-loader!@mdi/font/css/materialdesignicons.min.css'

import TestBuefy from './components/test-buefy.vue'
import TestBuefyBool from './components/test-buefy-bool.vue'

Vue.config.productionTip = false

console.log('>>> process.env : ', process.env)

// console.log('>>> initCss : ', initCss)
console.log('>>> buefyCss : ', buefyCss)
console.log('>>> materialDesignFonts : ', materialDesignFonts)

// install CSS framework - Buefy
Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})

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
  shadow: true,
  // shadowCss: `${buefyCss}`,
  shadowCss: `${buefyCss} ${materialDesignFonts} ${initCss}`,
  // shadowCss: `${buefyCss} ${materialDesignFonts}`,
  // shadowCss: `${buefyCss} ${initCss}`,
  beforeCreateVueInstance (root) {
    const rootNode = root.el.getRootNode()
    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode
    } else {
      root.shadowRoot = document.head
    }
    return root
  }
}

Vue.customElement('test-buefy-no-shadow', TestBuefy, { shadow: false })
Vue.customElement('test-buefy-no-css', TestBuefy, { shadow: true })
Vue.customElement('test-buefy', TestBuefy, options)

Vue.customElement('test-buefy-bool-no-shadow', TestBuefyBool, { shadow: false })
Vue.customElement('test-buefy-bool-no-css', TestBuefyBool, { shadow: true })
Vue.customElement('test-buefy-bool', TestBuefyBool, options)
