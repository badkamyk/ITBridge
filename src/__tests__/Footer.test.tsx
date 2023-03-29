import { beforeEach, describe, expect, it } from 'vitest';
import Footer, { socialLinks } from '../layouts/components/Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render social links', () => {
    socialLinks.forEach((link) => {
      expect(screen.getByTestId(link.title + 'Icon')).toBeTruthy();
    });
  });

  it('should render footer text', () => {
    const date = new Date().getFullYear();
    expect(screen.getAllByText(`ITBRIDGE © ${date}`)).toBeTruthy();
  });
});
