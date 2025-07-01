import type { Question } from "./quiz";


type ResultsProps = {
    userAnswers: (string | null)[];
    questionBank: Question[];
};

function Results({userAnswers, questionBank}:ResultsProps) {

    const score = userAnswers.reduce((total,answer,index) => {

        return answer === questionBank[index].answer ? total + 1 : total

    },0)

    const restartQuiz = () => {

        window.location.reload();

    }


    return(

        <div>
        
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} / {questionBank.length} </p>

            {questionBank.map((question, index) => {

                return(
                    <div key={index}>
                        <p className="question">{question.question}</p>
                        <p>Correct Answer: {question.answer}</p>
                        <p>Selected Answer: {userAnswers[index]}</p>
                    </div>
                )

            })}

            <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>

        </div>

    )

}

export default Results