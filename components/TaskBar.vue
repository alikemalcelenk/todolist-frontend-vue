<template>
  <Box class="root">
    <input
      v-model.trim="task"
      class="input"
      type="text"
      placeholder="Add a new task..."
      @keypress="onKeyPress"
    />
    <BaseButton v-if="task.length > 1" class="button" @click.native="addTask">
      <PlusIcon class="plusIcon" />
    </BaseButton>
  </Box>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    onKeyPress(event) {
      if (event.key === 'Enter' && this.task.trim() !== '') {
        this.addTask()
      }
    },
    addTask() {
      this.task = ''
      // console.log('add task')
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
    border: 1px solid $--c-blue;
    cursor: pointer;
    background-color: $--c-white;
    font-size: 14px;
    color: $--c-text;
  }

  .button {
    height: 100%;
    width: 60px;
    border-radius: 5px;
    cursor: pointer;
    background-color: $--c-blue;
    margin-left: 10px;

    .plusIcon {
      height: 15px;
      width: 15px;
      color: $--c-background;
    }
  }
}
</style>
