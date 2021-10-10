<template>
  <Box class="header">
    <TheLogo />
    <Navigation :selectedPage="selectedPage" />
  </Box>
</template>

<script>
export default {
  props: {
    selectedPage: {
      type: String,
      default: 'home'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0px 40px 0px 40px;
  background-color: $--c-background;
  border-bottom: 1px solid $--c-soft-gray;
}
</style>
