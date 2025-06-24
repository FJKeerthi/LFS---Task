import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather app', () => {
  render(<App />);
  // Test for weather-related content instead of generic React content
  const weatherElements = screen.getByText(/weather|forecast/i);
  expect(weatherElements).toBeInTheDocument();
});
