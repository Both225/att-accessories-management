import TableRow from "./TableRow";

function TableListItems({ products = [] }) {
  return (
    <ul>
      {products.map((item) => (
        <TableRow item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default TableListItems;
