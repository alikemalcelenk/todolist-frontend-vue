<template>
  <Box class="modalMask">
    <Box class="modalWrapper">
      <Box class="modalContainer">
        <Box class="header">
          <PenIcon class="penIcon" />
          <BaseText class="title">Edit Task</BaseText>
        </Box>

        <Box class="content">
          <Box class="line" />
          <Box class="inputBox">
            <textarea
              v-model="newTaskDescription"
              class="input"
              rows="5"
              maxLength="600"
              placeholder="Edit task..."
            />
          </Box>
          <Box class="line" />
        </Box>

        <Box class="footer">
          <BaseButton class="cancelButton" @click.native="$emit('close')"
            >Cancel</BaseButton
          >
          <BaseButton
            :class="inputControl ? 'editButton' : 'editButtonSoft'"
            @click.native="
              editTask({ taskId: task._id, description: newTaskDescription })
            "
          >
            <Spinner v-if="isLoadingEditTask" :size="10" color="white" />
            <BaseText v-else class="editButtonText">Edit</BaseText>
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
  data() {
    return {
      newTaskDescription: this.task.description,
      inputControl: false
    }
  },
  computed: {
    ...mapGetters({
      isLoadingEditTask: 'getIsLoadingEditTask'
    })
  },
  watch: {
    newTaskDescription() {
      this.inputControl =
        this.newTaskDescription &&
        this.task.description !== this.newTaskDescription.trim() &&
        this.newTaskDescription.trim() !== ''
    },
    isLoadingEditTask() {
      if (this.isLoadingEditTask === false) {
        this.$emit('close')
      }
    }
  },
  methods: {
    ...mapActions(['editTask'])
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
      @extend %flexColumn;
      padding: 10px 40px 10px 40px;
      border: 1px solid $colour-g-soft-gray;
      border-radius: 5px;
      background-color: $colour-g-background;
      margin: 10px 20px 10px 20px;
      max-width: 500px;
      min-width: 250px;
      width: 100%;

      .header {
        display: flex;
        align-items: center;
        padding: 15px 0px 15px 0px;

        .penIcon {
          height: 26px;
          width: 22px;
          color: $colour-g-blue;
          margin-right: 8px;
        }

        .title {
          font-size: 14px;
          font-family: SFProDisplay-SemiBold;
        }
      }

      .content {
        .line {
          display: flex;
          height: 1px;
          width: 100%;
          background-color: $colour-g-soft-gray;
        }

        .inputBox {
          display: flex;
          padding: 15px 0px 15px 0px;
        }

        .input {
          display: flex;
          flex-grow: 1;
          padding: 10px 20px 10px 30px;
          border: 1px solid $colour-g-blue;
          border-radius: 5px;
          background-color: transparent;
          max-height: 400px;
          min-height: 15px;
          background-color: $colour-g-white;
          word-break: break-word;

          &::placeholder {
            color: $colour-g-mid-gray;
          }
        }
      }

      .footer {
        padding: 10px 0px 10px 0px;
        display: flex;
        justify-content: flex-end;

        .editButton {
          padding: 4px 0px 4px 0px;
          width: 75px;
          background-color: $colour-g-blue;
          border-radius: 3px;
          cursor: pointer;

          .editButtonText {
            color: $colour-g-white;
          }
        }

        .editButtonSoft {
          @extend .editButton;
          opacity: 0.4;
          cursor: default;
        }

        .cancelButton {
          margin-right: 10px;
          padding: 4px 14px 4px 14px;
          border: 1px solid $colour-g-black;
          background-color: transparent;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
