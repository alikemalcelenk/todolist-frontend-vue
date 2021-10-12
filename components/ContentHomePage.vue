<template>
  <Box
    class="homeContent"
    :style="
      windowWidth < MOBILE_WIDTH_SIZE
        ? '--home-content-padding: 0px 10px 0px 10px'
        : '--home-content-padding: 0px 40px 0px 40px'
    "
  >
    <TaskBar class="taskBar" />
    <Box class="listBox">
      <Box v-if="isLoadingGetTasks" class="listInnerCenterBox">
        <Spinner :size="40" color="blue" />
      </Box>

      <Box v-else-if="isErrorAnyRequest" class="listInnerCenterBox">
        <BaseText>
          An error occurred. Please refresh the page and try again.
        </BaseText>
      </Box>

      <Box v-else-if="tasks.length === 0" class="listInnerCenterBox">
        <BaseText>
          There aren't any tasks in our records. Please add a new task.
        </BaseText>
      </Box>

      <Box v-else class="listInnerBox">
        <BaseText class="listTitle">All Tasks</BaseText>
        <TaskCard
          v-for="task in tasks"
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
import env from '../config/env'

export default {
  data() {
    return {
      MOBILE_WIDTH_SIZE: env.MOBILE_WIDTH_SIZE,
      windowWidth: process.client && window.innerWidth
    }
  },
  computed: {
    ...mapGetters({
      tasks: 'getTasks',
      isLoadingGetTasks: 'getIsLoadingGetTasks',
      isErrorAnyRequest: 'getIsErrorAnyRequest'
    })
  },
  created() {
    // if'i ekleme sebebim, datalar zaten store'da olduğu için sayfalarda gezinirken gereksiz API isteğnii engellemek.
    if (this.tasks.length === 0) this.getTasks()
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

    .listInnerCenterBox {
      @extend %flexCenter;
      width: 100%;
      height: 100%;
    }

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
