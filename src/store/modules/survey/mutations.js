export default {
  updateName (state, newName) {
    state.name = newName
  },
  updateGoals (state, newGoals) {
    state.goals = []
    state.goals.push(newGoals)
  },
  updateDiet (state, newDiet) {
    state.diet = newDiet
  },
  updateDob (state, newDob) {
    state.dob = newDob
  },
  updateCurrentStep (state, currentStep) {
    state.currentStep = currentStep
  }
}
