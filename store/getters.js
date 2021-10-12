export default {
  getTasks: (state) => {
    return state.tasks
  },
  getCompletedTasks: (state) => {
    return state.tasks.filter((task) => task.isCompleted)
  },
  getIncompletedTasks: (state) => {
    return state.tasks.filter((task) => !task.isCompleted)
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
