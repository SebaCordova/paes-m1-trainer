export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: 10, border: "1px solid #ccc" }}>
      {children}
    </button>
  );
}
