import { render, screen } from '@testing-library/react';
import { Component } from './page.tsx';

test('renders learn react link', () => {
  render(<Component />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
