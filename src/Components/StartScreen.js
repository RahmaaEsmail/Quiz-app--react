function StartScreen({ dispatch, numOfQuestions }) {

    return (
        <div className="start-screen">
            <h2>Welcome To The React Quiz</h2>
            <p>{numOfQuestions} questions to test your React mastery</p>
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}>Let's Start</button>
        </div>
    )
}

export default StartScreen
