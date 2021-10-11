<template>
  <Box class="root">
    <ModalEdit
      v-if="showEditModal"
      :task="task"
      @close="showEditModal = false"
    />
    <ModalDelete
      v-if="showDeleteModal"
      :task="task"
      @close="showDeleteModal = false"
    />

    <BaseButton class="leftContent" @click.native="setCompleted">
      <Box v-if="task.isCompleted" class="circleCheckIconBox">
        <CircleCheckIcon />
      </Box>

      <Box v-else class="emptyCheckBox" />
    </BaseButton>

    <Box class="midContent">
      <BaseText
        :class="task.isCompleted ? 'taskText' : 'taskTextNotCompleted'"
        >{{ task.description }}</BaseText
      >

      <BaseText v-if="windowWidth < TABLET_WIDTH_SIZE" class="dateText">{{
        createdTime(task.created_at)
      }}</BaseText>
    </Box>

    <Box class="rightContent">
      <BaseText v-if="windowWidth >= TABLET_WIDTH_SIZE" class="dateText">{{
        createdTime(task.created_at)
      }}</BaseText>
      <BaseButton class="iconButton" @click.native="editTask">
        <PenIcon class="penIcon" />
      </BaseButton>

      <BaseButton class="iconButton" @click.native="deleteTask">
        <WastebasketIcon class="wastebasketIcon" />
      </BaseButton>
    </Box>
  </Box>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// config
import env from '../config/env'

// utils
import createdTimeCalculator from '../utils/createdTimeCalculator'

export default {
  props: {
    task: {
      type: Object,
      default() {
        return {
          _id: '1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isCompleted: true,
          created_at: new Date('2021-09-18T15:10:18.164+00:00')
        }
      }
    }
  },
  data() {
    return {
      windowWidth: process.client && window.innerWidth,
      TABLET_WIDTH_SIZE: env.TABLET_WIDTH_SIZE,
      showEditModal: false,
      showDeleteModal: false
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    ...mapActions(['switchCompletionOfTask']),
    setCompleted() {
      this.switchCompletionOfTask({
        taskId: this.task._id,
        isCompleted: this.task.isCompleted
      })
    },
    editTask() {
      this.showEditModal = true
    },
    deleteTask() {
      this.showDeleteModal = true
    },
    createdTime(createdAt) {
      return createdTimeCalculator({ createdAt })
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  width: 100%;

  .leftContent {
    background-color: transparent;
    height: 26px;
    width: 26px;

    .circleCheckIconBox {
      height: 26px;
      width: 26px;
      color: $--c-black;
      cursor: pointer;
    }

    .emptyCheckBox {
      height: 22px;
      width: 22px;
      border: 2px solid;
      border-color: $--c-black;
      border-radius: 999px;
      flex-shrink: 0;
      cursor: pointer;
    }
  }

  .midContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 10px;
    word-break: break-all;
    white-space: pre-wrap;

    .taskText {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: line-through $--c-green;
      -webkit-text-decoration: line-through $--c-green;
    }

    .taskTextNotCompleted {
      @extend .taskText;
      text-decoration: none;
      -webkit-text-decoration: none;
    }
  }

  .rightContent {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    .iconButton {
      background-color: transparent;
      cursor: pointer;
    }

    .penIcon {
      height: 26px;
      width: 26px;
      margin-right: 10px;
      color: $--c-blue;
    }

    .wastebasketIcon {
      height: 26px;
      width: 22px;
      color: $--c-blue;
    }
  }

  .dateText {
    margin-right: 10px;
    font-size: 12px;
    color: $--c-mid-gray;
    font-family: SFProDisplay-RegularItalic;
  }
}
</style>
