<template>
  <div>
    <p>
      <span :class="css">
        title :
      </span>
      <code>
        {{ title }}
      </code>
    </p>
    <p class="ml-6">
      <span>
        inject :
      </span>
      <code>
        {{ inject }}
      </code>
    </p>
  </div>
</template>

<script>

export default {
  name: 'ComponentTitle',
  props: {
    title: {
      default: 'home',
      type: String
    },
    inject: {
      default: true,
      type: Boolean
    },
    css: {
      default: '',
      type: String
    }
  }
}
</script>
