export const selectAnswers = state => state.surveys.answers;

export const selectFirstAnswerStatus = state => state.surveys.firstAnswerStatus;

export const selectSecondAnswerStatus = state =>
  state.surveys.secondAnswerStatus;

export const selectIsLoadingSending = state => state.surveys.isLoading;

export const selectError = state => state.surveys.error;
