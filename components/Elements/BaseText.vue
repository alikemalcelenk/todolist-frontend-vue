<template>
  <component :is="tag" class="text">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'span'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  color: $colour-g-text;
}
</style>
