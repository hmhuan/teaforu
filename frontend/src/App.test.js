import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My github profile link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Github Profile/i);
  expect(linkElement).toBeInTheDocument();
});
