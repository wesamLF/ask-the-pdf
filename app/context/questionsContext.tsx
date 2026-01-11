"use client";

import { createContext, useContext, useState } from "react";

type QuestionsContextType = {
    questions: Question[]
    setQuestions: React.Dispatch<React.SetStateAction<Questions>>
    currentQ: number;
    setCurrentQ: React.Dispatch<React.SetStateAction<number>>
};

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export function QuestionsProvider({ children }: { children: React.ReactNode }) {


    const [questions, setQuestions] = useState<Questions>([]);
    const [currentQ, setCurrentQ] = useState(0)

    return (
        <QuestionsContext.Provider
       value= {{
        questions,
            setQuestions,
            currentQ,
            setCurrentQ
    }
}
        
        >

    { children }
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
    const context = useContext(QuestionsContext);
    if (!context) {
        throw new Error("useQuestins must be used within Questinsprovider");
    }
    return context;
}
