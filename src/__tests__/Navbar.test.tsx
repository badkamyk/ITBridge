import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../layouts/components/Navbar';
import { pages } from '../layouts/components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it('should render navbar links', () => {
    pages.forEach((page) => {
      expect(screen.getAllByText(page.title)).toBeTruthy();
    });
  });

  it('should render mobile button icon', () => {
    expect(screen.getAllByTestId('MenuIcon')).toBeTruthy();
  });

  it('should render navbar title', () => {
    expect(screen.getAllByText('ITBRIDGE')).toBeTruthy();
  });

  it('should render navbar logo', () => {
    expect(screen.getAllByTestId('AdbIcon')).toBeTruthy();
  });

  it('should render Questions tooltip', () => {
    expect(screen.getAllByTestId('PsychologyAltIcon')).toBeTruthy();
  });
});
