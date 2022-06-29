import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

function mockChart() {
  return <div data-testid="wealth-chart" />;
}

jest.mock('./wealth-distribution-pie-chart.tsx', () => ({
  __esModule: true,
  WealthDistributionPieChart: () => mockChart()
}));

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Wealth Distribution in Ireland/);
  expect(heading).toBeInTheDocument();
});

test('renders wealth pie chart', () => {
  render(<App />);
  const chart = screen.getByTestId(/wealth-chart/);
  expect(chart).toBeInTheDocument();
});
