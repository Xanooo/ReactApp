import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className="list-group-item active"
            onClick={handleClick}
            key={items}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
