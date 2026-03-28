export function Card({ children }) {
  return <div style={{ border: "1px solid #ddd", padding: 10 }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
