export default {
  getTasks: (state) => {
    return state.tasks
  },
  getIsLoadingGetTasks: (state) => {
    return state.isLoadingGetTasks
  },
  getIsLoadingCreateTask: (state) => {
    return state.isLoadingCreateTask
  }
}
