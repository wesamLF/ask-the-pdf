'use client'

import ErrorMessage from '@/app/components/ErrorMessage';
import Loading from '@/app/components/Loading';
import Quiz from '@/app/components/Quiz';
import { usePdf } from '@/app/context/fileContext';
import { useQuestions } from '@/app/context/questionsContext';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const PDFviewer = dynamic(() => import('@/app/components/PDFviewer'), {
    ssr: false,
    loading: () => <p>Loading Viewer...</p>,
});


const page = () => {
    const { text } = usePdf();
    const { questions, setQuestions } = useQuestions();

    const [errorMsg, setErrorMsg] = useState("");

    const fakeData = [
        {
            "id": 1,
            "question": "What do Melanie's feelings primarily reveal about the importance of human connection?",
            "choices": [
                {
                    "id": 1,
                    "text": "They demonstrate a lack of importance for relationships.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "They highlight her anger towards all adults.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "They indicate her deep need for connection and reassurance.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "They show her indifference to emotional turmoil.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 339,
            "source": "Melanie's feelings reveal her deep need for connection and reassurance, especially from Miss Justineau, who she associates with love and safety."
        },
        {
            "id": 2,
            "question": "How does Melanie's understanding of her world evolve in Chapter 8?",
            "choices": [
                {
                    "id": 1,
                    "text": "She becomes more innocent and naive.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "She understands the complexity of her relationships.",
                    "isCorrect": true
                },
                {
                    "id": 3,
                    "text": "She loses curiosity about her surroundings.",
                    "isCorrect": false
                },
                {
                    "id": 4,
                    "text": "She completely disregards the adults around her.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 2,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 340,
            "source": "Melanie's understanding evolves from a childlike curiosity about the game of bingo to a more complex recognition of the stakes involved in her relationships and situation."
        },
        {
            "id": 3,
            "question": "What does the interaction between Sergeant and Melanie signify?",
            "choices": [
                {
                    "id": 1,
                    "text": "An equal balance of power.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "Sergeant's kindness to Melanie.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "A stark imbalance of power and vulnerability.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "Melanie's total submission.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 340,
            "source": "The interaction showcases a stark imbalance of power, where Sergeant uses intimidation to assert control over Melanie, who is physically restrained and vulnerable."
        },
        {
            "id": 4,
            "question": "What does Melanie's confrontation with Sergeant reveal about her character?",
            "choices": [
                {
                    "id": 1,
                    "text": "She is completely submissive.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "She lacks any protective instincts.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "She demonstrates inner strength and determination.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "She feels no anger.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 341,
            "source": "Melanie’s confrontation seems to stem from her protective instincts towards Miss Justineau and her own desperation for validation."
        },
        {
            "id": 5,
            "question": "What does the imagery used to describe the lab environment indicate?",
            "choices": [
                {
                    "id": 1,
                    "text": "It symbolizes hope for humanity.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "It represents a clean and sterile environment.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "It illustrates the lengths people will go for survival.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "It reflects the joy of scientific discovery.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 344,
            "source": "The lab, described as a 'workshop of filthy creation' filled with dismembered body parts, symbolizes the grim desperation of humanity in its quest to survive."
        },
        {
            "id": 6,
            "question": "What stage of internal conflict is Justineau experiencing regarding her work?",
            "choices": [
                {
                    "id": 1,
                    "text": "She feels proud of her involvement.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "She is indifferent to the children's suffering.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "She grapples with the ethical implications of her work.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "She is excited about the scientific advancements.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 343,
            "source": "Justineau struggles with the ethical implications of her work, feeling that engaging with the children cognitively contradicts the horrific physical examinations they undergo."
        },
        {
            "id": 7,
            "question": "What metaphor is associated with the children being compared to ants infected with the Cordyceps fungus?",
            "choices": [
                {
                    "id": 1,
                    "text": "It symbolizes their individuality.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "It highlights their autonomy.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "It suggests control and loss of individuality.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "It signifies their potential for survival.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 346,
            "source": "The comparison highlights the theme of control and loss of individuality, suggesting that the children, while appearing human, may be subject to a parasitic influence that compromises their humanity."
        },
        {
            "id": 8,
            "question": "What does Justineau’s internal conflict reveal about her view of the children?",
            "choices": [
                {
                    "id": 1,
                    "text": "She views them as mere subjects for study.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "She sees them as a burden.",
                    "isCorrect": false
                },
                {
                    "id": 3,
                    "text": "She resists becoming an agent of a harmful system.",
                    "isCorrect": true
                },
                {
                    "id": 4,
                    "text": "She is apathetic to their fate.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 3,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 345,
            "source": "Her fear of being labeled a 'child-killer' if she participates in the experiments reflects a deep internal struggle with her identity as an educator and protector."
        },
        {
            "id": 9,
            "question": "What do Melanie's reflections about 'two little ducks' symbolize?",
            "choices": [
                {
                    "id": 1,
                    "text": "The simplicity of childhood.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "Choices and decisions with significant ramifications.",
                    "isCorrect": true
                },
                {
                    "id": 3,
                    "text": "The joy of friendship.",
                    "isCorrect": false
                },
                {
                    "id": 4,
                    "text": "A game of chance.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 2,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 342,
            "source": "The 'two little ducks,' equated with the number twenty-two, symbolize choices and decisions that have significant ramifications."
        },
        {
            "id": 10,
            "question": "How is the idea of hope portrayed amidst despair in the narrative?",
            "choices": [
                {
                    "id": 1,
                    "text": "Through apathy and resignation.",
                    "isCorrect": false
                },
                {
                    "id": 2,
                    "text": "Through Justineau's spirit and Caldwell's ambitions.",
                    "isCorrect": true
                },
                {
                    "id": 3,
                    "text": "Hope is non-existent in the story.",
                    "isCorrect": false
                },
                {
                    "id": 4,
                    "text": "Through despair and hopelessness.",
                    "isCorrect": false
                }
            ],
            "correct_answer": 2,
            "selectedAnswer": 0,
            "submitted": false,
            "page": 347,
            "source": "Through Justineau's persevering spirit and Caldwell's ambition for a scientific breakthrough, the narrative encapsulates the struggle to find hope in a world devastated by the infection."
        }
    ]


    useEffect(() => {
        const fetchQuestions = async () => {

            try {
                if (!text) {
                    throw new Error("no pdf found!");
                }

                const formData = new FormData();

                formData.append("textArray", JSON.stringify(text))
                const res = await fetch("/api/quiz/questions",
                    {
                        method: "POST",
                        body: formData,
                        cache: "no-store"

                    });

                if (res.status === 404) {
                    throw new Error("Page not found!");

                }
                if (!res.ok) {
                    throw new Error("Generating Questions Failed");
                }
                const data = await res?.json();

                setQuestions(data);
            } catch (err: any) {
                setErrorMsg(err?.message ?? "Failed")
            }
        }

        fetchQuestions();
    }, []);

    if (errorMsg !== "") return <ErrorMessage msg={errorMsg} />

    if (!questions || questions.length === 0) {
        return <div className='h-[80vh] flex'>
            <Loading />
        </div>
    }
    return (

        <div className='flex flex-col xl:flex-row  py-8 '>
            <div className="flex-4 pe-0 lg:pe-8 py-8 flex flex-col justify-center gap-4  ">

                <Quiz />
            </div>

            <div className="flex-5 ">
                <PDFviewer />
            </div>
        </div>


    )
}

export default page