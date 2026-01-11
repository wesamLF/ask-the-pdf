import type { PdfData } from '@/app/types/pdfTypes';
import { delay } from '@/app/util/delay';
import { filterPDFpages } from '@/app/util/filterPDFpages';
import { NextRequest, NextResponse } from 'next/server';

import OpenAI from 'openai';





const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});







export async function POST(req: NextRequest) {



    try {


        const formData = await req.formData();
        const textArray = formData.get('textArray') as string | null

        if (!textArray || textArray === "" || textArray === "undefined" || textArray === "null") {
            return NextResponse.json({ error: 'No data provided' }, { status: 400 });
        }

        const data = JSON.parse(textArray)
        if (!data.pages || data.pages.length == 0) {
            return NextResponse.json({ error: 'No data provided' }, { status: 400 });
        }

        let filteredData = filterPDFpages(data.pages)

        // for openAi tokens costs   
        // cut in half and start before it by 10 elements 
        if (filteredData.length >= 20) {
            filteredData = filteredData.slice(filteredData.length / 2 - 10, filteredData.length / 2)
        }




        const response = await openai.responses.create({
            model: "gpt-4o-mini",

            input: [
                {
                    role: "system",
                    content: `
        You are an exam question generator.

        STRICT RULES:
        - Only use the provided text data.
        - Do NOT invent facts.
        - Generate a maximum of 10 questions.
        - Each question must have exactly 4 multiple-choice answers.
        - Exactly 1 correct answer.
        - Include the page number the question came from.
        - Include the exact source text used to create the question.
              `
                },
                {
                    role: "user",
                    content: JSON.stringify({ filteredData })
                }
            ],
            text: {
                format: {
                    type: "json_schema" as const,
                    name: "questions_schema",
                    schema: {
                        type: "object",
                        properties: {
                            questions: {
                                type: "array",
                                maxItems: 10,
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number" },
                                        question: { type: "string" },
                                        choices: {
                                            type: "array",
                                            minItems: 4,
                                            maxItems: 4,
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: { type: "number" },
                                                    text: { type: "string" }
                                                },
                                                required: ["id", "text"],
                                                additionalProperties: false
                                            }
                                        },
                                        correct_answer: { type: "number" },
                                        page: { type: "number" },
                                        source: { type: "string" }
                                    },
                                    required: ["id", "question", "choices", "correct_answer", "page", "source"],
                                    additionalProperties: false
                                }
                            }
                        },
                        required: ["questions"],
                        additionalProperties: false
                    } as any // TS workaround
                }
            }
        }
        );




        const text = response.output_text
        
        const apiData = JSON.parse(text) as {
            questions: {
                id: number;
                question: string;
                choices: { id: number; text: string }[];
                correct_answer: number;
                page: number;
                source: string;
            }[];
        };
        const frontendQuestions = apiData.questions.map(q => ({
            id: q.id,
            question: q.question,
            choices: q.choices.map(c => ({
                id: c.id,
                text: c.text,
                isCorrect: c.id === q.correct_answer,
            })),
            correct_answer: q.correct_answer,
            selectedAnswer: 0,
            submitted: false,
            page: q.page,
            source: q.source
        }));


        


        return NextResponse.json(frontendQuestions);







    } catch (error) {
        console.error('PDF Extraction Error:', error);
        return NextResponse.json({ error: 'Failed ttt to extract text' }, { status: 504 });
    }
}
