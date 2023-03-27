import { QuestionStateType, QuestionType, RequireOnly } from './questionSliceTypes';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

const initialState: QuestionStateType = {
  entities: [],
};

type DraftQuestionType = RequireOnly<QuestionType, 'question' | 'language'>;

const createQuestion = (draftState: DraftQuestionType) => {
  return {
    id: nanoid(),
    date: new Date().toLocaleString().replaceAll(',', ''),
    ...draftState,
  };
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<DraftQuestionType>) => {
      state.entities.push(createQuestion(action.payload));
    },
    removeQuestion: (state, action: PayloadAction<string>) => {
      const index = state.entities.findIndex((question) => question.id === action.payload);
      if (index !== -1) {
        state.entities.splice(index, 1);
      }
    },
  },
});

export const questionsReducer = questionSlice.reducer;
export const { addQuestion, removeQuestion } = questionSlice.actions;
// export default questionSlice;
