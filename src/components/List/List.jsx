const List = (props) => {
  const { items = [] } = props;

  if (!items.length) return null;

  return (
    <ul>
      {items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
