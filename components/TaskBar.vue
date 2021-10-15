<template>
  <Box class="root">
    <input
      v-model.trim="taskDescription"
      class="input"
      type="text"
      placeholder="Add a new task..."
      @keypress="onKeyPress"
    />
    <BaseButton
      v-if="taskDescription.length > 0"
      class="button"
      @click.native="addTask"
    >
      <Spinner v-if="isLoadingCreateTask" :size="10" color="white" />
      <PlusIcon v-else class="plusIcon" />
    </BaseButton>
  </Box>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      taskDescription: ''
    }
  },
  computed: {
    ...mapGetters({
      isLoadingCreateTask: 'getIsLoadingCreateTask'
    })
  },
  watch: {
    isLoadingCreateTask() {
      if (this.isLoadingCreateTask === false) {
        this.taskDescription = ''
      }
    }
  },
  methods: {
    ...mapActions(['createTask']),
    onKeyPress(event) {
      if (event.key === 'Enter' && this.taskDescription.trim() !== '') {
        this.addTask()
      }
    },
    addTask() {
      this.createTask({ description: this.taskDescription })
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  @extend %flexCenter;
  height: 35px;

  .input {
    width: 100%;
    height: 35px;
    padding: 0px 20px 0px 20px;
    border-radius: 5px;
    border: 1px solid $colour-g-blue;
    cursor: pointer;
    background-color: $colour-g-white;
    font-size: 14px;
    color: $colour-g-text;
  }

  .button {
    height: 100%;
    width: 60px;
    border-radius: 5px;
    cursor: pointer;
    background-color: $colour-g-blue;
    margin-left: 10px;

    .plusIcon {
      height: 15px;
      width: 15px;
      color: $colour-g-background;
    }
  }
}
</style>
