<template>
  <Box class="root">
    <LogoIcon class="icon" />
    <BaseText class="text">Todolist</BaseText>
  </Box>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;

  .icon {
    height: 30px;
    width: 22px;
    color: $--c-blue;
  }

  .text {
    margin-left: 10px;
    font-size: 18px;
  }
}
</style>
