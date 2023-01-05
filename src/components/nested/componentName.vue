<template>
  <div>
    <span>
      component :
    </span>
    <code>
      {{ name }}
    </code>
  </div>
</template>

<script>

export default {
  name: 'ComponentName',
  props: {
    name: {
      default: 'home',
      type: String
    }
  }
}
</script>
