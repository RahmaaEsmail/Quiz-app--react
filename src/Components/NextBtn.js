import { useQuiz } from "../Context/QuizContext";

function NextBtn() {
    const { answer, dispatch, numOfQuestions, index } = useQuiz()
    if (answer === null) return null;;
    if (index < numOfQuestions - 1)
        return (<button className="btn btn-ui btn-next" onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>)
    if (index === numOfQuestions - 1)
        return (
            <button className="btn btn-ui btn-next" onClick={() => dispatch({ type: "finished" })}>Finish</button>
        )

}

export default NextBtn
