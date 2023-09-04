import { useQuiz } from "../Context/QuizContext"

function Progress() {
    const { index, points, numOfQuestions, answer } = useQuiz()
    return (
        <header className="progress">
            <progress max={numOfQuestions} value={index + Number(answer !== null)} />
            <div className="progress-value">
                <p>Question <strong>{index + 1}</strong> / 15</p>
                <p> <strong>{points}</strong> / 228</p>
            </div>
        </header>
    )
}

export default Progress
