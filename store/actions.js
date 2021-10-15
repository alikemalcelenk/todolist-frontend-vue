export default {
  async getTasks({ commit }) {
    try {
      await commit('GET_TASKS_REQUEST')
      const { tasks } = await this.$axios.$get()
      commit('GET_TASKS_SUCCESS', { tasks })
    } catch (e) {
      commit('ERROR_OCCURED')
    }
  },
  async createTask({ commit }, { description }) {
    try {
      await commit('CREATE_TASK_REQUEST')
      const { task } = await this.$axios.$post('', {
        description
      })
      commit('CREATE_TASK_SUCCESS', { task })
    } catch (e) {
      commit('ERROR_OCCURED')
    }
  },
  async deleteTask({ commit }, { taskId }) {
    try {
      await commit('DELETE_TASK_REQUEST')
      await this.$axios.$delete(`/${taskId}`)
      commit('DELETE_TASK_SUCCESS', { taskId })
    } catch (e) {
      commit('ERROR_OCCURED')
    }
  },
  async editTask({ commit }, { taskId, description }) {
    try {
      await commit('EDIT_TASK_REQUEST')
      await this.$axios.$put(`/${taskId}`, {
        description
      })
      commit('EDIT_TASK_SUCCESS', { taskId, description })
    } catch (e) {
      commit('ERROR_OCCURED')
    }
  },
  async switchCompletionOfTask({ commit }, { taskId, isCompleted }) {
    try {
      await this.$axios.$put(`/${taskId}`, {
        isCompleted: !isCompleted
      })
      commit('SWITCH_COMPLETION_OF_TASK_SUCCESS', {
        taskId
      })
    } catch (e) {
      commit('ERROR_OCCURED')
    }
  }
}
