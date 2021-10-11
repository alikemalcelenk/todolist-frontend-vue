export default {
  REQUEST_GET_TASKS(state) {
    state.isLoadingGetTasks = true
  },
  REQUEST_GET_TASKS_SUCCESS(state, { tasks }) {
    state.tasks = tasks
    state.isLoadingGetTasks = false
  },
  REQUEST_CREATE_TASK(state) {
    state.isLoadingCreateTask = true
  },
  REQUEST_CREATE_TASK_SUCCESS(state, { task }) {
    state.tasks.unshift(task)
    state.isLoadingCreateTask = false
  },
  REQUEST_DELETE_TASK(state) {
    state.isLoadingDeleteTask = true
  },
  REQUEST_DELETE_TASK_SUCCESS(state, { taskId }) {
    const taskIndex = state.tasks.findIndex((task) => task._id === taskId)
    state.tasks.splice(taskIndex, 1)
    state.isLoadingDeleteTask = false
  }
}
