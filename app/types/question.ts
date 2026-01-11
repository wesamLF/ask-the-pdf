

type Question = {
    id: number;
    question: string;
    choices: {
        id: number;
        text: string;
        isCorrect: boolean;
    }[];
    correct_answer: number;
    selectedAnswer: number;
    submitted: boolean;
    page: number;
    source: string;
}

type Questions =  Question[] 

