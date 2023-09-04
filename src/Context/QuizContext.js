import { createContext, useContext, useEffect, useReducer } from "react"

const quizContext = createContext()



const SECS_PER_QUESTION = 30;
const initialState = {
    status: 'loading',
    questions: [],
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: null
};

function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return { ...state, status: 'ready', questions: action.payload };
        case 'dataFailed':
            return { ...state, status: 'failed' }
        case 'start':
            return { ...state, status: 'start', secondsRemaining: state.questions.length * SECS_PER_QUESTION }
        case 'newAnswer':
            const question = state.questions.at(state.index)
            return { ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points + 10 : state.points }
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null }
        case 'finished':
            return { ...state, status: 'finished' }
        case 'restart':
            return { ...initialState, status: 'ready', questions: state.questions }
        case 'tick':
            return { ...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining === 0 ? 'finished' : state.status }
        default:
            throw new Error('Action unknown')
    }
}


function QuizProvider({ children }) {
    const [{ status, questions, index, answer, points, secondsRemaining }, dispatch] = useReducer(reducer, initialState);
    const numOfQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((curr, prev) => curr + prev.points, 0)


    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'dataReceived', payload: data })
            })
            .catch(err => dispatch({ type: 'dataFailed' }));
    }, []);
    return (
        <quizContext.Provider value={{
            dispatch, status, maxPossiblePoints, index, answer, points, secondsRemaining, numOfQuestions, questions
        }}>
            {children}
        </quizContext.Provider>
    )
}


function useQuiz() {
    const context = useContext(quizContext)
    return context
}

export { QuizProvider, useQuiz }
