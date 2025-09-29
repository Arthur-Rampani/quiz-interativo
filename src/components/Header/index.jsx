import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header({ currentIndex, totalQuestions }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(0);
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <header className={styles.header}>
      <h1>Quiz Interativo</h1>
      <div className={styles.info}>
        <p>Questão {currentIndex + 1} de {totalQuestions}</p>
        <p>Tempo: {seconds}s</p>
      </div>
    </header>
  );
}