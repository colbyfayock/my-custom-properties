import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders and updates the custom properties controls', () => {
  render(<App />);

  const slider = screen.getByRole('slider');
  expect(slider).toHaveValue('40');
  expect(screen.getByRole('button', { name: 'blueviolet' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'red' })).toBeInTheDocument();

  fireEvent.change(slider, { target: { value: '65' } });
  expect(document.documentElement.style.getPropertyValue('--size-logo')).toBe('65vmin');

  fireEvent.click(screen.getByRole('button', { name: 'blueviolet' }));
  expect(document.documentElement.style.getPropertyValue('--color-logo')).toBe('blueviolet');

  fireEvent.click(screen.getByRole('button', { name: 'red' }));
  expect(document.documentElement.style.getPropertyValue('--color-logo')).toBe('red');
});
