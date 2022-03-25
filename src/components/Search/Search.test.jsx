import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';

const onChange = jest.fn();

describe('Search component', () => {
  test('renders search component', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  test('renders without childrens', () => {
    render(<Search value="" onChange={onChange}></Search>);

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  test('renders without placeholder', () => {
    render(<Search value="" onChange={onChange}></Search>);

    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  test('custom  placeholder', () => {
    render(
      <Search value="" placeholder="find post" onChange={onChange}></Search>
    );

    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
  });

  test('onChange works', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  });

  test('dimamyc styles works', () => {
    render(<Search value="abc" onChange={onChange} />);

    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText(/search/i)).toHaveClass('label');
  });

  test('search snapshot', () => {
    const view = render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    expect(view).toMatchSnapshot();
  });
});
