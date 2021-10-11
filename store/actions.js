export default {
  async getTasks({ commit }) {
    try {
      await commit('REQUEST_GET_TASKS')
      const { tasks } = await this.$axios.$get()
      commit('REQUEST_GET_TASKS_SUCCESS', { tasks })
    } catch (e) {
      console.log(e)
    }
  },
  async createTask({ commit }, { taskDescription }) {
    try {
      await commit('REQUEST_CREATE_TASK')
      const { task } = await this.$axios.$post('', {
        description: taskDescription
      })
      commit('REQUEST_CREATE_TASK_SUCCESS', { task })
    } catch (e) {
      console.log(e)
    }
  }
}
