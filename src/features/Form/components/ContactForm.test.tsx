import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  render(<ContactForm />);

  it('should render form', () => {
    expect(screen.getByRole('form')).toBeTruthy();
  });

  it('should render 3 inputs', () => {
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
  });

  it('should render subject label', () => {
    expect(screen.getByLabelText('Subject')).toBeTruthy();
  });

  it('should render email label', () => {
    expect(screen.getByLabelText('Email')).toBeTruthy();
  });

  it('should render message label', () => {
    expect(screen.getByLabelText('Message')).toBeTruthy();
  });

  it('should render form button', () => {
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('should show error messages when form is submitted without filled inputs', async () => {
    await screen.getByRole('button').click();

    await waitFor(() => {
      expect(screen.getByText('Subject must be at least 3 characters')).toBeTruthy();
      expect(screen.getByText('Email must be in a valid form')).toBeTruthy();
      expect(screen.getByText('Message must be at least 5 characters')).toBeTruthy();
    });
  });

  it('should send form with correct data', async () => {
    fireEvent.input(screen.getByLabelText('Subject'), {
      target: {
        value: 'this is a test question',
      },
    });

    fireEvent.input(screen.getByLabelText('Email'), {
      target: {
        value: 'email@example.com',
      },
    });

    fireEvent.input(screen.getByLabelText('Message'), {
      target: {
        value: 'this is a test message',
      },
    });

    await screen.getByRole('button').click();
    await waitFor(() => {
      expect(screen.getByTestId('FormModal')).toBeTruthy();
    });
  });
});
