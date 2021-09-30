<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.button {
  @extend %flexCenter;
}
</style>
