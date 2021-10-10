<template>
  <Box class="root">
    <slot />
  </Box>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  min-width: 300px;
}
</style>
