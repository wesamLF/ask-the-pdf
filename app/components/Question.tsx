import React, { useState } from 'react'
import { useQuestions } from '../context/questionsContext';

const Question = () => {

  const { questions, setQuestions, currentQ, setCurrentQ } = useQuestions();

  const [submitted, setSubmitted] = useState(questions[currentQ].submitted)

  const [selected, setSelected] = useState(
    {
      id: 0,
      text: "",
      isCorrect: false,
    });
  const isFirst =  currentQ === 0
const isLast = currentQ + 1 === questions.length



const checkCorrectAnswer = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  setSubmitted(true)
  setQuestions(prevState => (
    prevState.map(q =>
      q.id === questions[currentQ].id
        ? {
          ...q, selectedAnswer: selected.id, submitted: true,
        }
        : q
    )
  ));


}

return (
  <>
    <form  onSubmit={checkCorrectAnswer} className='flex flex-col justify-between gap-10 md:gap-20 ' >
      <fieldset className='flex flex-col gap-4 ' disabled={submitted}>
        <h1 className=' text-title font-semibold max-w-146 overflow-hidden'>{questions[currentQ].question}
        </h1>
        <ul className=" text-base flex  flex-col gap-2">
          {questions[currentQ].choices.map((c) =>

            <li key={c.text} className={`max-w-125  border-b  border-light-gray  hover:bg-light-gray  
            ${selected.id == c.id && "bg-light-gray pointer-events-none"}
            ${(submitted) && "pointer-events-none"}
            ${(submitted && c.id === questions[currentQ].correct_answer) && "bg-success  "}
            ${(submitted && questions[currentQ].selectedAnswer == c.id && c.id !== questions[currentQ].correct_answer) && "bg-wrong "}

            ${(submitted && selected.id == c.id && c.id != questions[currentQ].correct_answer) && "bg-wrong  "}

            `}

            >

              <label className="w-full flex gap-4 justify-start items-center  cursor-pointer p-4 ">
                <input
                  type="radio"
                  name="choices"
                  value={c.text}
                  disabled={submitted}
                  checked={c.id === questions[currentQ].selectedAnswer || c.id === selected.id}
                  onChange={() => setSelected(c)}
                  className="appearance-none flex-none
      w-4 h-4
      border-2 border-gray-400
      rounded-full
      checked:bg-primary-text
      focus:outline-none focus:ring-2 focus:ring-blude-400"
                />
                {c.text}
              </label>

            </li>
          )}

        </ul>

      </fieldset>
      <div className=" flex justify-between items-centder border-b border-light-gray pb-2">
        {
          !isFirst ? <button onClick={() => setCurrentQ(currentQ => currentQ - 1)}
            className=" flex justify-center cursor-pointer items-center gap-2 rounded bg-light-gray px-4 py-2 text-primary-text hover:bg-primary/80 disabled:opacity-50"
          type="button">Prev</button> : <span></span>
        }


        {(submitted && !isLast) ? <button onClick={() => setCurrentQ(currentQ => currentQ + 1)}
          className=" flex  justify-center cursor-pointer items-center gap-2 rounded bg-primary px-4 py-2 text-light hover:bg-primary/80 disabled:opacity-50"
       type="button" >Next</button> : <button onClick={checkCorrectAnswer} disabled={(submitted && isLast)} type='submit'
          className='flex justify-center cursor-pointer items-center gap-2 rounded bg-primary px-4 py-2 text-light hover:bg-primary/80 disabled:opacity-50'>Submit</button>}



      </div>
    </form>


  </>
)
}

export default Question