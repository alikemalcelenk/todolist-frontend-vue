<template>
  <BaseButton class="button">
    <BaseText
      v-if="type === 'completed'"
      class="text"
      :class="selected && 'textSelected'"
      >Completed</BaseText
    >
    <BaseText v-else class="text" :class="selected && 'textSelected'"
      >Incompleted</BaseText
    >
  </BaseButton>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'home'
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  width: fit-content;

  .text {
    font-size: 14px;
  }

  .textSelected {
    color: $--c-blue;
  }

  &:hover {
    color: $--c-blue;
    background-color: $--c-blue-10;
  }
}
</style>
