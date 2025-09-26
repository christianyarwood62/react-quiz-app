import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      if (secondsRemaining === 0) {
        dispatch({ type: "finish" });
        return;
      }

      const id = setInterval(function () {
        // Need to add a variable to this to be able to use a cleanup function below
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id); // Need this cleanup function so it doesnt add more tick useEffects
    },
    [dispatch, secondsRemaining]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
