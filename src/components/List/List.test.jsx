import { render, screen } from '@testing-library/react';
import List from './List';

const data = ['html', 'css', 'js'];

describe('List component', () => {
  test('List renders', () => {
    render(<List items={data} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/html/i)).toBeInTheDocument();
  });

  test('List renders without data', () => {
    render(<List />);

    expect(screen.queryByRole('list')).toBeNull();
  });
});
