import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LanguagesDescription from './LanguagesDescription';
import { languageData } from './LanguagesDescription';

describe('LanguagesDescription', () => {
  render(<LanguagesDescription />);

  it('should render LanguagesDescription heading', () => {
    expect(screen.getByRole('heading')).toBeTruthy();
  });

  it('should render LanguagesDescription paragraph', () => {
    expect(
      screen.getByText(
        "There's nothing more frustrating than opening an interview prep book, only to find a bunch of solutions in a programming language that you don't know. That's why all of our questions come with complete written solutions in 9 popular languages."
      )
    ).toBeTruthy();
  });

  it(`should render ${languageData.length} LanguagesDescription items`, () => {
    expect(screen.getAllByTestId('LanguageDescription')).toHaveLength(languageData.length);
  });
});
