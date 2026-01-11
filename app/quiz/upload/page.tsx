'use client'

import PrimaryBtn from '@/app/components/PrimaryBtn'
import StartQuizBtn from '@/app/components/StartQuizBtn'
import UploadFile from '@/app/components/UploadFile'
import { useState, type SetStateAction } from 'react'

const page = () => {
    const [uploading, setUploading] = useState(false);


    return (
        <div className='flex flex-col sm:flex-row  sm:min-h-187.5 sm:py-32 '>
            <div className="flex-4  flex items-center ">
                <div className=" flex flex-col gap-6 md:gap-12 py-10">
                    <h1 className=' text-title font-semibold'>Before starting a quiz please make sure to:</h1>
                    <ol className="list-decimal list-inside text-base">
                        <li>Select a PDF file</li>
                        <li>Make sure the PDF is in the correct language English </li>
                        <li>Ensure your PDF contains readable text (not just images)</li>
                        <li>Use chapters or sections for focused quizzes</li>

                    </ol>
                    <div className="">

                        <StartQuizBtn uploading={uploading} setUploading={setUploading}/>
                    </div>
                </div>
            </div>
            <div className="flex-5 "><UploadFile uploading={uploading} /></div>
        </div>
    )
}

export default page