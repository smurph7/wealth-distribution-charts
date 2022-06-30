import { render, screen } from '@testing-library/react';
import App from './App';

function mockChart() {
  return <div data-testid="wealth-chart" />;
}

function mockBarChart() {
  return <div data-testid="wealth-by-age-bar-chart" />;
}

jest.mock('./wealth-distribution-pie-chart.tsx', () => ({
  __esModule: true,
  WealthDistributionPieChart: () => mockChart()
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
  const chart = screen.getByTestId(/wealth-chart/);
  expect(chart).toBeInTheDocument();
});

test('renders wealth by age bar chart', () => {
  render(<App />);
  const chart = screen.getByTestId(/wealth-by-age-bar-chart/);
  expect(chart).toBeInTheDocument();
});
