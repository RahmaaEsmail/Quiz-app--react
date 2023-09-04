import { useQuiz } from "../Context/QuizContext"

function Restart() {
    const { dispatch } = useQuiz()
    return (
        <div>
            <button className="btn btn-ui btn-restart" onClick={() => dispatch({ type: 'restart' })}>
                Restart
            </button>
        </div>
    )
}

export default Restart
