import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;

  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState ? letterState : null}>
      {letter}
    </div>
  );
}

export default Letter;
