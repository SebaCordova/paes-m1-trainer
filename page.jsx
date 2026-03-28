import { useState } from "react";

export default function Home() {
  const [week, setWeek] = useState(0);
  const lessons = [
    {
      title: "Semana 1",
      content: "20% de 100 = 20",
      question: "¿Cuánto es 10% de 50?",
      answer: "5"
    },
    {
      title: "Semana 2",
      content: "x + 5 = 10 → x = 5",
      question: "x + 3 = 7",
      answer: "4"
    }
  ];

  const current = lessons[week];

  return (
    <div style={{ padding: 20 }}>
      <h1>PAES M1 Trainer 🚀</h1>

      <h2>{current.title}</h2>
      <p>{current.content}</p>

      <h3>Pregunta:</h3>
      <p>{current.question}</p>

      <button onClick={() => alert(current.answer)}>
        Ver respuesta
      </button>

      <br /><br />

      <button onClick={() => setWeek((week + 1) % lessons.length)}>
        Siguiente
      </button>
    </div>
  );
}
