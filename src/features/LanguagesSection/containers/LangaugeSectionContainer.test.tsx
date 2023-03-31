import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LanguageSectionContainer from './LanguageSectionContainer';
import { languageData } from '../components/LanguagesDescription';
+describe('LanguageSectionContainer', () => {
  render(<LanguageSectionContainer />);

  it('should render LanguageSectionContainer', () => {
    expect(screen.getByTestId('LanguageSectionContainer')).toBeTruthy();
  });

  it(`should render ${languageData.length} LanguageSectionContainer items`, () => {
    expect(screen.getAllByTestId('LanguageDescription')).toHaveLength(languageData.length);
  });

  it('should render Cube', () => {
    expect(screen.getByTestId('Cube')).toBeTruthy();
  });
});
