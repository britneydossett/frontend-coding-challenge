<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy'
          },
          improveFitness: {
            name: 'Fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health'
          },
          improveMood: {
            name: 'Mood'
          },
          improveSleep: {
            name: 'Sleep'
          },
          improveWeight: {
            name: 'Weight'
          }
        },
        selectedGoals: []
      }
    },
    mounted () {
      this.updateCurrentStep(2)
    },
    computed: {
      ...mapState('survey', ['name', 'goals'])
    },
    methods: {
      ...mapActions('survey', ['updateGoals', 'updateCurrentStep']),
      submit () {
        this.updateGoals(this.selectedGoals)
        this.$router.push('/diet')
      },
      back () {
        this.updateGoals(this.selectedGoals)
        this.$router.push('/name')
      },
      addGoalToArray (goal, key) {
        const selectedGoal = this.selectedGoals.indexOf(goal)
        // if selected goal already exists in the array, remove it from the array
        if (selectedGoal >= 0) {
          this.selectedGoals.splice(selectedGoal, 1)
        // if goals are not greater than 4 and doesn't match any in the array, add to selectedGoals array
        } else if (this.selectedGoals.length < 4 && selectedGoal < 0) {
          this.selectedGoals.push(goal)
        }
      },
      // if the goal in the for loop is in the selectedGoals array, give selected styling
      goalInArray (goal) {
        // linting error when using ternary
        if (this.selectedGoals.indexOf(goal) < 0) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button v-for="(goal, key) in goals" :selected="goalInArray(goal.name)" :value="goal.name" :key="key" :text="goal.name" @click.native="addGoalToArray(goal.name, key)"></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" :disabled="!selectedGoals.length" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
