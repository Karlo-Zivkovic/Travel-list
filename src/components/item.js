export default function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
        type="checkbox"
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
