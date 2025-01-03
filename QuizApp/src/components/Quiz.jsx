import { useState, useCallback } from "react";
import QUESTIONS from '../question.js';
import Question from './Question.jsx';
import Summary from "./Summary.jsx";

export default function Quiz() {
    const[userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback( () => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key = {activeQuestionIndex} // to restart the timeer in the next question
                index = {activeQuestionIndex} // to restart the timeer in the next question
                onSelectAnswer = {handleSelectAnswer}
                onSkipAnswer = {handleSkipAnswer}
            />
        </div>
    );
}