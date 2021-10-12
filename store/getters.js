export default {
  getTasks: (state) => {
    return state.tasks
  },
  getIsLoadingGetTasks: (state) => {
    return state.isLoadingGetTasks
  },
  getIsLoadingCreateTask: (state) => {
    return state.isLoadingCreateTask
  },
  getIsLoadingDeleteTask: (state) => {
    return state.isLoadingDeleteTask
  },
  getIsLoadingEditTask: (state) => {
    return state.isLoadingEditTask
  },
  getIsErrorAnyRequest: (state) => {
    return state.isErrorAnyRequest
  }
}
