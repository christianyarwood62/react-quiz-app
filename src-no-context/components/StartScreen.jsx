export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to the quiz!</h2>
      <h3>{numQuestions} question to test your skills</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}
