import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/find course:/i)).toBeInTheDocument();
  });

  test('typing in SearchBox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue('React')).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.getByDisplayValue(/react/i)).toBeInTheDocument();
  });

  test('search filter is working', () => {
    render(<App />);

    expect(screen.getByText(/vue/i)).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByDisplayValue(/vue/i)).toBeNull();
    expect(screen.getByText(/javascript/i)).toBeInTheDocument();
  });
});
