'use client'
import React, { useState } from 'react'
import Question from './Question'
import QuestionsCounter from './QuestionsCounter'
import { useQuestions } from '../context/questionsContext'




const Quiz = () => {


    const { questions, currentQ, setCurrentQ } = useQuestions();

    const questionsLength = questions.length


    return (
        <>

            <QuestionsCounter
                questions={questions}
                currentQ={currentQ}

                setCurrentQ={setCurrentQ}
            />
            <Question key={questions[currentQ].id}  />
        </>



    )
}

export default Quiz