<template>
  <NuxtLink :to="'/' + type" class="nuxtLink">
    <BaseButton
      :class="
        windowWidth < MOBILE_WIDTH_SIZE ? 'buttonMobile' : 'buttonDesktop'
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
import env from '../config/env'

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

  .buttonMobile {
    margin-left: 15px;
    background-color: transparent;
    cursor: pointer;

    .text {
      font-size: 14px;
    }

    .textSelected {
      color: $--c-blue;
    }
  }

  .buttonDesktop {
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
}
</style>
