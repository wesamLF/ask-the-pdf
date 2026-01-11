'use client'
const QuestionsCounter = ({ questions, setCurrentQ, currentQ }:
  {
    questions: Questions
    , setCurrentQ: React.Dispatch<React.SetStateAction<number>>, currentQ: number
  }) => {
  return (
    <div className=' flex items-center  flex-col md:items-start xl:flex-row gap-4'>

      <span className=' text-base underline'>Quesion {currentQ + 1} out of {questions.length}</span>
      <div className=" flex gap-2 flex-wrap">
        {questions.map((q) => (


          <button key={q.id} onClick={() => setCurrentQ(q.id - 1)} className={`w-6 h-6 border border-dark-gray cursor-pointer
            ${(q.correct_answer === q.selectedAnswer && q.submitted) && "bg-green-400"} 
            ${(q.correct_answer != q.selectedAnswer &&  q.submitted) && "bg-red-400"}
            ${(q.correct_answer != q.selectedAnswer && q.selectedAnswer == 0 && !q.submitted) && "bg-light-gray"}

            
            `} ></button>



        ))}


      </div>
    </div>
  )
}

export default QuestionsCounter