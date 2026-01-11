import React from 'react'
import { PdfProvider } from '../context/fileContext';
import { QuestionsProvider } from '../context/questionsContext';

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="  ">
            <PdfProvider>
                <QuestionsProvider>

                    {children}
                </QuestionsProvider>

            </PdfProvider>
        </div>
    )
}

export default layout