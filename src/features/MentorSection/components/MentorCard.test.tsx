import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MentorCard from './MentorCard';

describe('MentorCard', () => {
  render(<MentorCard description={'description'} name={'name'} imgSrc={'url'} />);

  it('should render MentorCard', () => {
    expect(screen.getByTestId('MentorCard')).toBeTruthy();
  });

  it('should render MentorCard name', () => {
    expect(screen.getByText('name')).toBeTruthy();
  });

  it('should render MentorCard description', () => {
    expect(screen.getByText('description')).toBeTruthy();
  });
});
