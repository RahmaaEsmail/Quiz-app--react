import Options from './Options';
import { useQuiz } from "../Context/QuizContext";

function Question() {
    const { questions, index } = useQuiz()
    const question = questions[index]
    return (
        <div>
            <h4>{question.question}</h4>
            <Options />
        </div>
    )
}

export default Question
