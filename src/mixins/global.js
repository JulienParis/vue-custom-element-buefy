import createStyleLink from '@/utils/createStyleLink'

export const mixinGlobal = {
  methods: {
    createStyleLink,
    getRootNode () {
      const shadowRoot = this.$el.parentNode
      // console.log(`mixinGlobal > getRootNode > ${this.$options.name} > shadowRoot : `, shadowRoot)
      return shadowRoot
    },
    addStyle (url) {
      const componentName = this.$options.name
      const shadowRoot = this.getRootNode(componentName)
      console.log(`mixinGlobal > addStyle > ${componentName} > shadowRoot : `, shadowRoot)
      console.log(`mixinGlobal > addStyle > ${componentName} > url : `, url)
      console.log(`mixinGlobal > addStyle > ${componentName} > process.env : `, process.env)
      const fileUrl = `${process.env.BASE_URL}${url}`
      console.log(`mixinGlobal > addStyle > ${componentName} > fileUrl : `, fileUrl)
      this.createStyleLink(shadowRoot, fileUrl)
    }
  }
}
