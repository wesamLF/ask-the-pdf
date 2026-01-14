'use client'

import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import { usePdf } from '../context/fileContext';
import { useQuestions } from "../context/questionsContext";

const StartQuizBtn = ({ uploading, setUploading }: { uploading: boolean, setUploading: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { file, setFile, setText } = usePdf();
    const { setQuestions, setCurrentQ } = useQuestions()
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();


    async function handleUpload() {
        if (!file) return alert("No file selected");

        try {
            setUploading(true);

            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/upload/extract", {
                method: "POST",
                body: formData,
                cache: "no-store"
            });

            if (!res.ok) {
                const err = await res?.json();
                throw new Error(err?.error || "Upload failed");
            }

            const data = await res.json();
            setFile(file)
            setCurrentQ(0)
            setQuestions([])
            setText(data)
            router.push("/quiz/start");

        } catch (err: any) {
            alert(err?.message);
        } finally {
            setUploading(false);
        }
    }



    return (
        <> {file ?

            <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-2  flex  justify-center items-center gap-2 rounded bg-primary px-4 py-2 text-white hover:bg-primary/80 disabled:opacity-50 "
            > Start Quiz
                {uploading && (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                )}
            </button>


            :
            <>
                <button disabled={errorMsg != ""}
                    onClick={() => {
                        setErrorMsg("You need to select a file before starting the quiz")
                    }}
                    className='px-4 py-2 bg-primary text-light rounded-lg cursor-pointer'
                >Start Quiz
                </button>
                <p className=' text-wrong py-2'>{errorMsg}</p>
            </>
        }


        </>
    )
}

export default StartQuizBtn