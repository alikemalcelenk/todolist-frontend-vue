<template>
  <Box class="layout">
    <NavigationButton
      type="completed"
      :selected="selectedPage === 'completed'"
    />
    <NavigationButton
      type="incompleted"
      :selected="selectedPage === 'incompleted'"
    />
  </Box>
</template>

<script>
export default {
  props: {
    selectedPage: {
      type: String,
      default: 'completed'
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
}
</style>
