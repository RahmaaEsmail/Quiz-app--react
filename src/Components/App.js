import Main from "./Main";
import Question from "./Question";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Footer from "./Footer";
import StartScreen from "./StartScreen";
import NextBtn from "./NextBtn";
import Timer from "./Timer";
import FinishScreen from "./FinishScreen";
import Progress from "./Progress";
import Restart from "./Restart";
import { useQuiz } from "../Context/QuizContext";

function App() {
    const { status } = useQuiz()

    return (

        <div className="app">
            <Header />
            <Main>
                {status === 'loading' && <Loader />}
                {status === 'failed' && <Error />}
                {status === 'ready' && <StartScreen />}
                {status === 'start' &&
                    <>
                        <Progress />
                        <Question />
                        <Footer>
                            {status === 'start' && <Timer />}
                            <NextBtn />
                        </Footer>
                    </>}
                {status === 'finished' && <><FinishScreen />
                    <Restart />
                </>
                }
            </Main>
        </div>

    );
}

export default App;
