interface ListProp {
  children: React.ReactNode;
}

export default function List({
  children
}: ListProp) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        border: "1px solid #ddd",
        borderRadius: 8,
        overflow: "hidden",
      }}>
      {children}
    </ul>
  )
}
