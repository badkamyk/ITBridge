import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Table from './Table';
import { rows } from './Table';

describe('Table', () => {
  render(<Table />);

  it('should render Table', () => {
    expect(screen.getAllByRole('table')).toBeTruthy();
  });

  it(`should render ${rows.length} rows`, () => {
    expect(screen.getAllByRole('row')).toHaveLength(rows.length + 1);
  });

  it(`should render 3 columns`, () => {
    expect(screen.getAllByRole('columnheader')).toHaveLength(4);
  });
});
