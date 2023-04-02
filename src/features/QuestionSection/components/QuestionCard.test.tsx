import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import QuestionCard from './QuestionCard';
import { QuestionType } from '../../store/questionSliceTypes';

describe('QuestionCard', () => {
  const question: QuestionType = {
    id: '1',
    question: 'this is a question',
    language: 'js',
    answer: 'this is an answer',
    date: new Date().toLocaleString().replaceAll(',', ''),
  };
  render(<QuestionCard {...question} />);

  it('should render QuestionCard', () => {
    expect(screen.getByTestId('QuestionCard')).toBeTruthy();
  });

  it('should render language svg', () => {
    expect(screen.getByTestId('LanguageIcon')).toBeTruthy();
  });

  it('should render question', () => {
    expect(screen.getByText(question.question)).toBeTruthy();
  });

  it('should render answer', () => {
    question.answer && expect(screen.getByText(question.answer)).toBeTruthy();
  });
});
