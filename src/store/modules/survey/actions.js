import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context, data) {
    const body = { user: data }
    const config = { headers: { 'content-type': 'application/json' } }
    let response = await axios.post(`${API_URL}/users`, body, config)
    return response.status
  },
  updateName ({ commit }, newName) {
    commit('updateName', newName)
  },
  updateGoals ({ commit }, goals) {
    commit('updateGoals', goals)
  },
  updateDiet ({ commit }, diet) {
    commit('updateDiet', diet)
  },
  updateDob ({ commit }, dob) {
    commit('updateDob', dob)
  },
  updateCurrentStep ({ commit }, currentStep) {
    commit('updateCurrentStep', currentStep)
  }
}
