import { screen, render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AskMentorForm from './AskMentorForm';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('AskMentorForm', () => {
  render(
    <Provider store={store}>
      <AskMentorForm chosenLanguage={'js'} />
    </Provider>
  );

  it('should render form', () => {
    expect(screen.getByRole('form')).toBeTruthy();
  });

  it('should render textarea', () => {
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('should render form button', () => {
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('should show error message when form is submitted without text', async () => {
    await screen.getByRole('button').click();

    await waitFor(() => {
      expect(screen.getByText('Question must be at least 5 characters')).toBeTruthy();
    });
  });
});
