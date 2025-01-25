function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
