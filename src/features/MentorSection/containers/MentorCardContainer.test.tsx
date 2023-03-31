import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MentorCardContainer from './MentorCardContainer';
import { cardData } from './MentorCardContainer';

describe('MentorCardContainer', () => {
  render(<MentorCardContainer />);

  it('should render MentorCardContainer title', () => {
    expect(screen.getByRole('heading')).toBeTruthy();
  });

  it(`should render ${cardData.length} MentorCards`, () => {
    expect(screen.getAllByTestId('MentorCard')).toHaveLength(cardData.length);
  });
});
