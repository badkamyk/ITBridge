import { screen, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ChooseLanguageCard from './ChooseLangaugeCard';

describe('ChooseLanguageCard chosen by user', () => {
  render(<ChooseLanguageCard setChosenLanguage={vi.fn()} chosenLanguage={'js'} name="js" image="image" />);

  it('should render ChooseLanguageCard', () => {
    expect(screen.getByTestId('ChooseLanguageCard')).toBeTruthy();
  });

  it('should render card img', () => {
    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('should render svg in the corner', () => {
    expect(screen.getByTestId('TaskAltIcon')).toBeTruthy();
  });
});
