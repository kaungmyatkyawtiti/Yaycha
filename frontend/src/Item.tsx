import type { Yaycha } from './types/yaycha'

interface ItemProps {
  item: Yaycha;
  onDelete: (id: string) => void;
}

export default function Item({
  item,
  onDelete,
}: ItemProps) {

  return (
    <li
      style={{
        padding: 10,
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>
        <small>{item.content}</small>
        <b>{item.name}</b>
      </span>
      <button
        type="button"
        onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  )
}
