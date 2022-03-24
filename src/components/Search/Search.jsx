import classes from './Search.module.css';

import cn from 'classnames';

const Search = (props) => {
  const {
    value,
    onChange,
    children = 'Search',
    placeholder = 'search ...',
  } = props;

  return (
    <label className={classes.label}>
      {children}
      <input
        className={cn({
          [classes.input]: true,
          [classes.filled]: value.length,
        })}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Search;
