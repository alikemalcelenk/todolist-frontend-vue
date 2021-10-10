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
              v-model="newTask"
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
            :class="inputControl ? 'updateButton' : 'updateButtonSoft'"
            @click.native="$emit('close')"
            >Update</BaseButton
          >
        </Box>
      </Box>
    </Box>
  </Box>
</template>

<script>
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
      newTask: this.task.description,
      inputControl: false
    }
  },
  watch: {
    newTask() {
      this.inputControl =
        this.newTask &&
        this.task.description !== this.newTask.trim() &&
        this.newTask.trim() !== ''
    }
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

        .penIcon {
          height: 26px;
          width: 22px;
          color: $--c-blue;
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
          background-color: $--c-soft-gray;
        }

        .inputBox {
          display: flex;
          padding: 15px 0px 15px 0px;
        }

        .input {
          display: flex;
          flex-grow: 1;
          padding: 10px 20px 10px 30px;
          border: 1px solid $--c-blue;
          border-radius: 5px;
          background-color: transparent;
          max-height: 400px;
          min-height: 15px;
          background-color: $--c-white;
          word-break: break-word;

          &::placeholder {
            color: $--c-mid-gray;
          }
        }
      }

      .footer {
        padding: 10px 0px 10px 0px;
        display: flex;
        justify-content: flex-end;

        .updateButton {
          padding: 4px 0px 4px 0px;
          width: 75px;
          background-color: $--c-blue;
          border-radius: 3px;
          cursor: pointer;
          color: $--c-white;
        }

        .updateButtonSoft {
          @extend .updateButton;
          opacity: 0.4;
          cursor: default;
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
