"use client";

import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [ans, setAns] = useState<number>(0);

  return (
    <main>
      <h1>Maekawa Calc.</h1>
      <h2>{num1}</h2>
    </main>
  );
}