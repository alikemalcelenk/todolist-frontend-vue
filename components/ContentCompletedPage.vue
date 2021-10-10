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
      <Box class="listInnerBox">
        <BaseText class="listTitle">Completed Tasks</BaseText>
        <TaskCard
          v-for="task in completedTasks"
          :key="task._id"
          :taskProp="task"
          class="taskCard"
        />
      </Box>
    </Box>
  </Box>
</template>

<script>
import exTasks from '../assets/exTasks'
import env from '../config/env'

export default {
  data() {
    return {
      completedTasks: exTasks.filter((task) => task.isCompleted === true),
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
.homeContent {
  display: flex;
  flex-direction: column;
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

    .listInnerBox {
      display: flex;
      flex-direction: column;
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
