<template>
  <NuxtLink :to="'/' + type" class="nuxtLink">
    <BaseButton
      :class="
        windowWidth < MOBILE_WIDTH_SIZE ? 'button--mobile' : 'button--desktop'
      "
    >
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
  </NuxtLink>
</template>

<script>
import env from '@config/env'

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
.nuxtLink {
  text-decoration: none;

  .button {
    cursor: pointer;
    background-color: transparent;

    .text {
      font-size: 14px;
    }

    .textSelected {
      color: $colour-g-blue;
    }

    &--desktop {
      padding: 10px 20px 10px 20px;
      border-radius: 5px;
      width: fit-content;

      &:hover {
        background-color: $colour-g-blue-10;
      }

      &:hover .text {
        color: $colour-g-blue;
      }
    }

    &--mobile {
      margin-left: 15px;
    }
  }
}
</style>
