<template>
  <Box class="modalMask">
    <Box class="modalWrapper">
      <Box class="modalContainer">
        <Box class="header">
          <WastebasketIcon class="wastebasketIcon" />
          <BaseText class="title"
            >Are you sure you want to delete this task?</BaseText
          >
        </Box>

        <Box class="content">
          <Box class="line" />
          <Box class="contentInnerBox">
            <BaseText>
              Task to delete:
              <BaseText class="descriptionTaskName">{{
                task.description
              }}</BaseText>
            </BaseText>
          </Box>
          <Box class="line" />
        </Box>

        <Box class="footer">
          <BaseButton class="cancelButton" @click.native="$emit('close')"
            >Cancel</BaseButton
          >
          <BaseButton
            class="deleteButton"
            @click.native="deleteTask({ taskId: task._id })"
          >
            <Spinner v-if="isLoadingDeleteTask" :size="10" color="white" />
            <BaseText v-else class="deleteButtonText">Delete</BaseText>
          </BaseButton>
        </Box>
      </Box>
    </Box>
  </Box>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({
      isLoadingDeleteTask: 'getIsLoadingDeleteTask'
    })
  },
  watch: {
    isLoadingDeleteTask() {
      if (this.isLoadingDeleteTask === false) {
        this.$emit('close')
      }
    }
  },
  methods: {
    ...mapActions(['deleteTask'])
  }
}
</script>

<style lang="scss" scoped>
.modalMask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;

  .modalWrapper {
    @extend %flexCenter;
    height: 100%;

    .modalContainer {
      display: flex;
      flex-direction: column;
      padding: 10px 40px 10px 40px;
      border: 1px solid $--c-soft-gray;
      border-radius: 5px;
      background-color: $--c-background;
      margin: 10px 20px 10px 20px;
      max-width: 500px;
      min-width: 250px;
      width: 100%;

      .header {
        display: flex;
        align-items: center;
        padding: 15px 0px 15px 0px;

        .wastebasketIcon {
          height: 26px;
          width: 22px;
          color: $--c-blue;
          margin-right: 8px;
        }

        .title {
          font-family: SFProDisplay-SemiBold;
        }
      }

      .content {
        .line {
          display: flex;
          height: 1px;
          width: 100%;
          background-color: $--c-soft-gray;
        }

        .contentInnerBox {
          padding: 15px 0px 15px 0px;
        }

        .descriptionTaskName {
          font-family: SFProDisplay-RegularItalic;
          word-break: break-all;
          white-space: pre-wrap;
        }
      }

      .footer {
        padding: 10px 0px 10px 0px;
        display: flex;
        justify-content: flex-end;

        .deleteButton {
          padding: 4px 0px 4px 0px;
          width: 75px;
          background-color: $--c-blue;
          border-radius: 3px;
          cursor: pointer;

          .deleteButtonText {
            color: $--c-white;
          }
        }

        .cancelButton {
          margin-right: 10px;
          padding: 4px 14px 4px 14px;
          border: 1px solid $--c-black;
          background-color: transparent;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
