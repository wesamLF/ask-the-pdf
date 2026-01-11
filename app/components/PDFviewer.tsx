"use client";


import { useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs, type TextItem } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { usePdf } from "../context/fileContext";
import { useQuestions } from "../context/questionsContext";



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const PDFviewer = () => {

    const [blur, setBlur] = useState(true)
    const [showHint, setShowHint] = useState(false)

    const { file } = usePdf();
    const { questions, currentQ } = useQuestions();
    const [width, setWidth] = useState<number>(750); // default

    let currentPage = questions[currentQ]?.page ?? 1
    let hintText = questions[currentQ]?.source ?? ""

    useEffect(() => {
        // Function to update width
        const updateWidth = () => {
            const w = window.innerWidth;

            if (w < 640) setWidth(350);       // mobile
            else if (w < 850) setWidth(550);  // tablet
            else setWidth(750);               // desktop
        };

        updateWidth(); // initial size
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    function highlightText(textItem: any) {
        if (!hintText) return textItem.str;


        const words = hintText.trim().split(/\s+/);

        if (hintText.length < 2) return textItem.str;

        const firstTwo = words.slice(0, 2).join(' ');
        return textItem.str.replace(
            new RegExp(firstTwo, 'gi'),
            (match: string) => `<mark>${match}</mark>`
        );
    }


    return (
        <div className="sm:h-[85vh] flex flex-col p-2 md:p-4  bg-dark-gray  overfslow-y-scroll relative">
            <div className="fidxed z-10 flex gap-4 pb-2 ">

                <button className="px-3 py-1 bg-primary text-light text-helper rounded-lg shadow-lg hover:bg-primary/80"
                    onClick={() => setShowHint((s) => !s)}
                >{showHint ? "Hide Hint" : "Show Hint"}</button>
                <button className="px-3 py-1 bg-primary text-light text-helper rounded-lg shadow-lg hover:bg-primary/80"
                    onClick={() => setBlur((b) => !b)}
                >Hide Page</button>

            </div>
            {blur && <div className=" z-10 absolute inset-0 w-full h-full bg-dark-gray/95 backdrop-blur-sm flex items-center justify-center">
                <button className="px-6 py-3 bg-primary text-light font-semibold rounded-lg shadow-lg hover:bg-primary/80 hover:shadow-xl hover:shadow-amber-50/20  transition cursor-pointer"
                    onClick={() => setBlur((p) => !p)}
                >
                    Show Page
                </button>
            </div>}
            <Document file={file}
                // onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading="loading"
                className=" flex justify-center  rounded-2xl overflow-y-scroll">
                {showHint ?
                    <Page pageNumber={currentPage}
                        renderTextLayer={true}
                        width={width}

                        //@ts-ignore
                        customTextRenderer={highlightText}
                    /> :
                    <Page pageNumber={currentPage} className=""
                        renderTextLayer={true}
                        width={width}
                    />
                }

            </Document>
        </div>

    );
}

export default PDFviewer