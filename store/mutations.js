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
  }
}
