<template>
  <div>
    <span class="bg-colored-nested">
      icon :
    </span>
    <b-icon :icon="icon"/>
  </div>
</template>

<script>
import { mixinGlobal } from '@/mixins/global.js'

export default {
  name: 'NestedComponent',
  mixins: [mixinGlobal],
  props: {
    icon: {
      default: 'home',
      type: String
    }
  },
  data () {
    return {
      customCssFile: 'styles/custom-css-nested.css'
    }
  },
  mounted () {
    console.log('\nNestedComponent > beforeCreate ...')
    // this.getRootNode()
    this.addStyle(this.customCssFile)
  }
}
</script>
