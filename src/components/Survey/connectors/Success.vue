<script>
  import ThvButton from '@/components/Shared/Button'
  import image from '@/assets/images/thrivaling.png'
  import { mapState } from 'vuex'

  export default {
    name: 'Success',
    components: {
      ThvButton,
      image
    },
    data () {
      return {
        imageUrl: image
      }
    },
    computed: {
      ...mapState('survey', ['name', 'goals', 'diet', 'dob'])
    },
    methods: {
      submit () {
        this.$router.push('/name')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__success align-center">
        <img :src="imageUrl" class="survey-questions__success__image" />
        <div class="spacer sp__top--xs"></div>
        <h1>All done!</h1>
        <div class="spacer sp__top--xs"></div>
        <p class="body--small">Thank you for completing the survey. The following results have been submitted:</p>
        <div class="spacer sp__top--sm"></div>
        <div class="survey-questions__success__container">
          <div class="cell">
            <div class="survey-questions__success__align">
              <div class="survey-questions__success__name">
                <p class="survey-questions__success__category">Name</p>
                <div class="survey-questions__success__result">
                  {{ name }}
                </div>
              </div>
              <div class="spacer sp__top--xs"></div>
              <div class="survey-questions__success__goals">
                <p class="survey-questions__success__category">Goals</p>
                <div class="survey-questions__success__result">
                  {{ goals.flat().join(", ") }}
                </div>
              </div>
              <div class="spacer sp__top--xs"></div>
              <div class="survey-questions__success__diet">
                <p class="survey-questions__success__category">Diet</p>
                <div class="survey-questions__success__result">
                  {{ diet }}
                </div>
              </div>
              <div class="spacer sp__top--xs"></div>
              <div class="survey-questions__success__dob">
                <p class="survey-questions__success__category">DOB</p>
                <div class="survey-questions__success__result">
                  {{ new Intl.DateTimeFormat().format(new Date(dob)) }}
                </div>
              </div>
            </div>
            <div class="spacer sp__top--sm"></div>
            <thv-button class="survey-questions__success__button" element="button" size="large" @click="submit">Start over</thv-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang='css'>
  .survey-questions__success__image {
    max-height: 150px;
  }
  .survey-questions__success.align-center .body--small {
    max-width: 300px;
    margin: 0 auto;
  }
  .survey-questions__success__container {
    background: #fff;
    border: 1px solid #ced0d9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 30px 30px;
    max-width: 350px;
    border-radius: .25rem;
    box-shadow: 0 6px 20px rgba(61, 66, 80, .18);
  }
  .survey-questions__success__align {
    text-align: left;
  }
  .survey-questions__success__category {
    color: #99A2BF;
    font-weight: 200;
    font-size: 14px;
    line-height: 21px;
  }
  .survey-questions__success__result {
    color: #3D4250;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
  }
  .survey-questions__success__button .button.button--large.primary {
    width: 202px;
    height: 46px;
    font-weight: 200;
  }
</style>
