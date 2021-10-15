export default {
  GET_TASKS_REQUEST(state) {
    state.isLoadingGetTasks = true
  },
  GET_TASKS_SUCCESS(state, { tasks }) {
    state.tasks = tasks
    state.isLoadingGetTasks = false
  },
  CREATE_TASK_REQUEST(state) {
    state.isLoadingCreateTask = true
  },
  CREATE_TASK_SUCCESS(state, { task }) {
    state.tasks.unshift(task)
    state.isLoadingCreateTask = false
  },
  DELETE_TASK_REQUEST(state) {
    state.isLoadingDeleteTask = true
  },
  DELETE_TASK_SUCCESS(state, { taskId }) {
    const taskIndex = state.tasks.findIndex((task) => task._id === taskId)
    state.tasks.splice(taskIndex, 1)
    state.isLoadingDeleteTask = false
  },
  EDIT_TASK_REQUEST(state) {
    state.isLoadingEditTask = true
  },
  EDIT_TASK_SUCCESS(state, { taskId, description }) {
    const taskIndex = state.tasks.findIndex((task) => task._id === taskId)
    state.tasks[taskIndex].description = description
    state.isLoadingEditTask = false
  },
  SWITCH_COMPLETION_OF_TASK_SUCCESS(state, { taskId }) {
    const taskIndex = state.tasks.findIndex((task) => task._id === taskId)
    state.tasks[taskIndex].isCompleted = !state.tasks[taskIndex].isCompleted
  },
  ERROR_OCCURED(state) {
    state.isLoadingGetTasks = false
    state.isLoadingCreateTask = false
    state.isLoadingDeleteTask = false
    state.isLoadingEditTask = false
    state.isErrorAnyRequest = true
  }
}
