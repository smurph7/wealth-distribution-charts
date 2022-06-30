import { render, screen } from '@testing-library/react';
import App from './App';

function mockPieChart() {
  return <div data-testid="wealth-by-percentile-pie-chart" />;
}

function mockBarChart() {
  return <div data-testid="wealth-by-age-bar-chart" />;
}

jest.mock('./wealth-distribution-by-percentile.tsx', () => ({
  __esModule: true,
  WealthDistributionByPercentile: () => mockPieChart()
}));

jest.mock('./wealth-distribution-by-age.tsx', () => ({
  __esModule: true,
  WealthDistributionByAge: () => mockBarChart()
}));

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Wealth Distribution in Ireland/);
  expect(heading).toBeInTheDocument();
});

test('renders wealth pie chart', () => {
  render(<App />);
  const chart = screen.getByTestId(/wealth-by-percentile-pie-chart/);
  expect(chart).toBeInTheDocument();
});

test('renders wealth by age bar chart', () => {
  render(<App />);
  const chart = screen.getByTestId(/wealth-by-age-bar-chart/);
  expect(chart).toBeInTheDocument();
});
