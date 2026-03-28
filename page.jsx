import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// ---- CONTENIDO SEMANAL (MVP + PROGRAMA REAL) ----
const lessons = [
  {
    title: "Semana 1 - Porcentajes y Razones",
    theory: "Los porcentajes representan partes de un total. Ej: 20% = 20/100",
    challenge: "Un producto cuesta $200 y tiene 15% de descuento. ¿Precio final?",
    solution: "15% de 200 = 30 → Precio final = 170",
    quiz: {
      q: "¿Cuánto es el 25% de 80?",
      options: ["10", "20", "25"],
      answer: 1,
      explanation: "25% = 0.25 → 0.25 × 80 = 20",
    },
  },
  {
    title: "Semana 2 - Fracciones y Decimales",
    theory: "Las fracciones representan partes de un todo. Se pueden convertir a decimal.",
    challenge: "Convierte 3/4 a decimal",
    solution: "3 ÷ 4 = 0.75",
    quiz: {
      q: "¿Cuál es 1/2 en decimal?",
      options: ["0.2", "0.5", "1.2"],
      answer: 1,
      explanation: "1 ÷ 2 = 0.5",
    },
  },
  {
    title: "Semana 3 - Ecuaciones",
    theory: "Resolver ecuaciones es encontrar el valor de la incógnita.",
    challenge: "x + 8 = 15",
    solution: "x = 7",
    quiz: {
      q: "Si 2x = 10, x = ?",
      options: ["2", "5", "10"],
      answer: 1,
      explanation: "Dividir por 2 → x = 5",
    },
  },
  {
    title: "Semana 4 - Función Lineal",
    theory: "Una función lineal tiene forma y = mx + b",
    challenge: "Si y = 2x + 1, ¿cuánto vale y cuando x = 3?",
    solution: "y = 2(3) + 1 = 7",
    quiz: {
      q: "Pendiente de y = 5x + 2",
      options: ["2", "5", "7"],
      answer: 1,
      explanation: "m = 5",
    },
  },
  {
    title: "Semana 5 - Geometría Básica",
    theory: "Área de un rectángulo = base × altura",
    challenge: "Rectángulo de base 5 y altura 4",
    solution: "Área = 20",
    quiz: {
      q: "Área de un cuadrado lado 3",
      options: ["6", "9", "12"],
      answer: 1,
      explanation: "3 × 3 = 9",
    },
  },
];

export default function App() {
  const [week, setWeek] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const current = lessons[week];

  const handleAnswer = (i) => {
    if (!answered) {
      if (i === current.quiz.answer) {
        setScore(score + 1);
      }
      setAnswered(true);
    }
  };

  const nextWeek = () => {
    setWeek((prev) => (prev + 1) % lessons.length);
    setAnswered(false);
    setShowSolution(false);
    setShowHint(false);
  };

  return (
    <div className="p-6 grid gap-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">PAES M1 Trainer 🚀</h1>

      <Progress value={((week + 1) / lessons.length) * 100} />

      {/* TEORÍA */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">{current.title}</h2>
          <p className="mt-2">{current.theory}</p>
        </CardContent>
      </Card>

      {/* DESAFÍO INTERACTIVO */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold">🎮 Desafío</h3>
          <p className="mt-2">{current.challenge}</p>

          <div className="flex gap-2 mt-4">
            <Button onClick={() => setShowHint(true)}>Hint</Button>
            <Button onClick={() => setShowSolution(true)}>Ver solución</Button>
          </div>

          {showHint && (
            <p className="mt-2 text-sm">💡 Piensa en el concepto clave de la lección</p>
          )}

          {showSolution && (
            <p className="mt-2">✅ {current.solution}</p>
          )}
        </CardContent>
      </Card>

      {/* QUIZ */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold">Mini Evaluación</h3>
          <p className="mt-2">{current.quiz.q}</p>

          <div className="mt-4 grid gap-2">
            {current.quiz.options.map((opt, i) => (
              <Button key={i} onClick={() => handleAnswer(i)}>
                {opt}
              </Button>
            ))}
          </div>

          {answered && (
            <div className="mt-4">
              <p>Puntaje: {score}</p>
              <p className="text-sm mt-1">{current.quiz.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Button onClick={nextWeek}>Siguiente Semana →</Button>
    </div>
  );
}
// deploy trigger
