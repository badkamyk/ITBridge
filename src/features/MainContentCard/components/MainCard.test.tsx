import { screen, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import MainCard from './MainCard';
import { BrowserRouter } from 'react-router-dom';
import BugReportIcon from '@mui/icons-material/BugReport';

describe('MainCard', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MainCard title={'title'} description={'description'} icon={<BugReportIcon className="card-svg" />} />
      </BrowserRouter>
    );
  });

  it('should render MainCard', () => {
    expect(screen.getAllByTestId('MainCard')).toBeTruthy();
  });

  it('should render MainCard title', () => {
    expect(screen.getAllByText('title')).toBeTruthy();
  });

  it('should render MainCard description', () => {
    expect(screen.getAllByText('description')).toBeTruthy();
  });

  it('should render MainCard icon', () => {
    expect(screen.getAllByTestId('BugReportIcon')).toBeTruthy();
  });

  it('should render MainCard button', () => {
    expect(screen.getAllByText('Learn More')).toBeTruthy();
  });
});
