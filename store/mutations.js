export default {
  REQUEST_GET_TASKS(state) {
    state.wereTasksFetched = false
  },
  REQUEST_GET_TASKS_SUCCESS(state, { tasks }) {
    state.tasks = tasks
    state.wereTasksFetched = true
  }
}
