import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';
export const selectMemoizedQuestions = createSelector(
  (state: RootState) => state.questions.entities,
  (questions) => {
    return questions;
  }
);
