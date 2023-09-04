import { useEffect } from "react"
import { useQuiz } from "../Context/QuizContext";

function Timer() {
    const { secondsRemaining, dispatch } = useQuiz()
    const minutes = Math.ceil(secondsRemaining / 60);
    const seconds = Math.floor(secondsRemaining % 60);
    useEffect(function () {
        const id = setInterval(() => {
            dispatch({ type: 'tick' })
        }, 1000)

        return () => clearInterval(id)
    }, [dispatch])
    return (
        <>
            <div className="btn btn-ui btn-timer" >
                {minutes < 10 ? `0${minutes}` : minutes} :  {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </>
    )
}

export default Timer
