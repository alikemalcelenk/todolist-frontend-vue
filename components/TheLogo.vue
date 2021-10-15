<template>
  <NuxtLink to="/" class="nuxtLink">
    <BaseButton class="root">
      <LogoIcon class="icon" />
      <BaseText class="text">Todolist</BaseText>
    </BaseButton>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.nuxtLink {
  text-decoration: none;

  .root {
    @extend %flexCenter;
    background-color: transparent;
    cursor: pointer;

    .icon {
      height: 30px;
      width: 22px;
      color: $colour-g-blue;
    }

    .text {
      margin-left: 10px;
      font-size: 18px;
    }
  }
}
</style>
