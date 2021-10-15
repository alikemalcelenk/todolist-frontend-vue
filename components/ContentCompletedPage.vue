<template>
  <Box
    class="homeContent"
    :style="
      windowWidth < MOBILE_WIDTH_SIZE
        ? '--home-content-padding: 0px 10px 0px 10px'
        : '--home-content-padding: 0px 40px 0px 40px'
    "
  >
    <Box class="listBox">
      <Box v-if="isLoadingGetTasks" class="listInnerCenterBox">
        <Spinner :size="40" color="blue" />
      </Box>

      <Box v-else-if="isErrorAnyRequest" class="listInnerCenterBox">
        <BaseText>
          An error occurred. Please refresh the page and try again.</BaseText
        >
      </Box>

      <Box v-else-if="completedTasks.length === 0" class="listInnerCenterBox">
        <BaseText> There aren't any completed tasks in our records. </BaseText>
      </Box>

      <Box v-else class="listInnerBox">
        <BaseText class="listTitle">Completed Tasks</BaseText>
        <TaskCard
          v-for="task in completedTasks"
          :key="task._id"
          :task="task"
          class="taskCard"
        />
      </Box>
    </Box>
  </Box>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

// config
import env from '@config/env'

export default {
  data() {
    return {
      MOBILE_WIDTH_SIZE: env.MOBILE_WIDTH_SIZE,
      windowWidth: process.client && window.innerWidth
    }
  },
  computed: {
    ...mapGetters({
      completedTasks: 'getCompletedTasks',
      isLoadingGetTasks: 'getIsLoadingGetTasks',
      isErrorAnyRequest: 'getIsErrorAnyRequest'
    })
  },
  created() {
    // if'i ekleme sebebim, datalar zaten store'da olduğu için sayfalarda gezinirken gereksiz API isteğnii engellemek.
    if (this.completedTasks.length === 0) this.getTasks()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    ...mapActions(['getTasks'])
  }
}
</script>

<style lang="scss" scoped>
.homeContent {
  @extend %flexColumn;
  justify-content: flex-start;
  align-items: center;
  padding: var(--home-content-padding);

  .taskBar {
    display: flex;
    width: 100%;
    max-width: 1000px;
    margin-top: 30px;
  }

  .listBox {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin-bottom: 30px;
    margin-top: 30px;

    .listInnerCenterBox {
      @extend %flexCenter;
      width: 100%;
      height: 100%;
    }

    .listInnerBox {
      @extend %flexColumn;
      width: 100%;

      .listTitle {
        width: 100%;
        margin-bottom: 10px;
        text-align: start;
        font-size: 18px;
      }

      .taskCard {
        margin-top: 20px;
      }
    }
  }
}
</style>
