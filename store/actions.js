export default {
  async getTasks({ commit, $axios }) {
    try {
      await commit('REQUEST_GET_TASKS')
      const { tasks } = await this.$axios.$get()
      commit('REQUEST_GET_TASKS_SUCCESS', { tasks })
    } catch (e) {
      console.log(e)
    }
  }
}
