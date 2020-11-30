# Notes

## Survey Component Notes:
- I chose not to expand upon the functionality of the CheckButton component to keep it as dumb as possible. Since it is used in very different ways in Goals and Diet, I wanted to keep that functionality separate and handle the logic in each connector.
- In the Goals, it is intended functionality to be able to highlight 4 buttons in light blue as you are choosing them, and then not letting you choose a 4th until you un-click another goal.
- I kept currentStep and totalSteps in the survey store in case there is another survey. I also felt like it was okay to make totalSteps a hard-coded number because SurveyProgress is in this particular survey connectors. It would not be okay to do that in the ProgressBar component, because we want to keep reusable components as dumb as possible.
- I put the progress bar totalSteps number at 4, since there are 4 questions


## Future Improvements:
- I want to store data in state when using the "Back" button to populate former choices
- Add numbers to progress bar
- Hide progress bar on success page

