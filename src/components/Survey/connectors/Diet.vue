<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No'
          },
          coeliac: {
            name: 'Coeliac'
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat'
          },
          paleo: {
            name: 'Paleo'
          },
          pescatarian: {
            name: 'Pescatarian'
          },
          plantBased: {
            name: 'Plant-based'
          },
          other: {
            name: 'Other'
          }
        },
        selectedDiet: ''
      }
    },
    mounted () {
      this.updateCurrentStep(3)
    },
    computed: {
      ...mapState('survey', ['goals', 'diet'])
    },
    methods: {
      ...mapActions('survey', ['updateDiet', 'updateCurrentStep']),
      submit () {
        this.updateDiet(this.selectedDiet)
        this.$router.push('/dob')
      },
      back () {
        if (this.selectedDiet.length) {
          this.updateDiet(this.selectedDiet)
        }
        this.$router.push('/goals')
      },
      dietSelection (diet, key) {
        this.selectedDiet = diet
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__diet align-center">
        <h1>Do you follow a particular diet?</h1>
        <div class="spacer sp__top--sm"></div>
        <check-button v-for="(diet, key) in diets" :selected="selectedDiet === diet.name" :value="diet.name" :key="key" :text="diet.name" @click.native="dietSelection(diet.name, key)"></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" :disabled="!selectedDiet.length" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
