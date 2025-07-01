import { useState } from "react";
import Results from "./results";

  export type Question = {

        question: string;
        options: string[];
        answer: string;

  }
  
function Quiz() {

  

    const questionBank: Question[] = [

        {

            question: "What is the capital of France?",
            options: ["Berlin", "Paris", "London", "Rome"],
            answer: "Paris",

        },

        
        {

            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All",

        },

        
        {

            question: "What does JSX stands for?",
            options: ["Javascript XML", "Java syntax extension", "Just a simple example", 
                "None of the above"],

            answer: "Javascript XML",

        }

    ]

    const initialAnswers:(string | null)[] = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    const handleSelectOption = (option:string) => {

        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
        setCurrentQuestion(currentQuestion)

    }

    const goToNext = () => {

        if(currentQuestion === questionBank.length - 1) {

            setIsQuizFinished(true)
            
        } else {

            setCurrentQuestion(currentQuestion + 1)
        
        }

        
        

    }

    const goToPrev = () => {

        if(currentQuestion > 0) {

                setCurrentQuestion(currentQuestion - 1)

        }
        

    }

    if(isQuizFinished)  {

        return <Results userAnswers={userAnswers} questionBank={questionBank}></Results>

    }

    return(

        <div>

            <h2>Question {currentQuestion == 0 ? 1 : currentQuestion + 1} </h2>
            <p className="question">{questionBank[currentQuestion].question}</p>
            
            {questionBank[currentQuestion].options.map((option) => {

                return <button key={option} className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>

            })}

            

            
            
            <div className="nav-buttons">

                <button className="prev-button" onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
                <button className="next-button" onClick={goToNext} disabled={!selectedAnswer}>{
                currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}</button>

            </div>
            
        </div>

    )

}

export default Quiz