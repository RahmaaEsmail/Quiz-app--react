import { useQuiz } from "../Context/QuizContext";

function Options() {
    const { questions, answer, dispatch, index } = useQuiz()
    const question = questions[index]
    const hasAnswered = answer !== null;
    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    key={index}
                    disabled={hasAnswered}
                    className={`btn btn-ui btn-option ${answer === index ? "answer" : ""
                        } ${hasAnswered ? index === question.correctOption ? 'correct' : 'wrong' : ''}`}
                    onClick={function () {
                        dispatch({ type: "newAnswer", payload: index });
                    }}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Options;
