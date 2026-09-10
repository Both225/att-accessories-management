import TableRow from "./TableRow";

function TableListItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <TableRow item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default TableListItems;
