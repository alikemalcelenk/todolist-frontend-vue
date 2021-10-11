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
  async createTask({ commit }, { description }) {
    try {
      await commit('REQUEST_CREATE_TASK')
      const { task } = await this.$axios.$post('', {
        description
      })
      commit('REQUEST_CREATE_TASK_SUCCESS', { task })
    } catch (e) {
      console.log(e)
    }
  },
  async deleteTask({ commit }, { taskId }) {
    try {
      await commit('REQUEST_DELETE_TASK')
      await this.$axios.$delete(`/${taskId}`)
      commit('REQUEST_DELETE_TASK_SUCCESS', { taskId })
    } catch (e) {
      console.log(e)
    }
  },
  async editTask({ commit }, { taskId, description }) {
    try {
      await commit('REQUEST_EDIT_TASK')
      await this.$axios.$put(`/${taskId}`, {
        description
      })
      commit('REQUEST_EDIT_TASK_SUCCESS', { taskId, description })
    } catch (e) {
      console.log(e)
    }
  }
}
