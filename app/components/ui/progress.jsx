export function Progress({ value }) {
  return (
    <div>
      Progreso: {Math.round(value)}%
    </div>
  );
}
