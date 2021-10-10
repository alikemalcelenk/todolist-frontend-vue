<template>
  <Box
    class="header"
    :style="
      windowWidth < MOBILE_WIDTH_SIZE
        ? '--home-content-padding: 0px 10px 0px 10px'
        : '--home-content-padding: 0px 40px 0px 40px'
    "
  >
    <TheLogo />
    <Navigation :selectedPage="selectedPage" />
  </Box>
</template>

<script>
import env from '../config/env'

export default {
  props: {
    selectedPage: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      MOBILE_WIDTH_SIZE: env.MOBILE_WIDTH_SIZE,
      windowWidth: process.client && window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: var(--home-content-padding);
  border-bottom: 1px solid $--c-soft-gray;
  background-color: $--c-white;
}
</style>
