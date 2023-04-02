import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import QuestionsContainer from './QuestionsContainer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { addQuestion } from '../../store/questionSlice';

describe('QuestionContainer', () => {
  render(
    <Provider store={store}>
      <QuestionsContainer />
    </Provider>
  );

  store.dispatch(addQuestion({ question: 'This is first question', language: 'js', answer: 'This is an answer' }));
  store.dispatch(addQuestion({ question: 'This is second a question', language: 'js' }));

  it('should render container heading', () => {
    expect(screen.getByText('Your recently asked questions')).toBeTruthy();
  });

  it('should render 2 question cards', () => {
    expect(screen.getAllByTestId('QuestionCard')).toHaveLength(2);
  });

  it('should render an answer placeholder', () => {
    expect(screen.getByText('We will answer this question soon 😊')).toBeTruthy();
  });

  it('should render an answer', () => {
    expect(screen.getByText('This is an answer')).toBeTruthy();
  });

  it('should render a question', () => {
    expect(screen.getByText('This is first question')).toBeTruthy();
  });
});
