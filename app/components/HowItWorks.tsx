'use client'

import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0);

    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (inView1) setActiveStep(0);
        else if (inView2) setActiveStep(1);
        else if (inView3) setActiveStep(2);
    }, [inView1, inView2, inView3]);



    return (

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 relative   " id='how-it-works'>


            <div className="flex flex-col gap-12">
                <p className=' text-title text-center'>How It Works</p>
                <img ref={ref1} src="/images/uploadpdf.png" alt="Step 1" className="rounded-lg shadow-md" />
                <img ref={ref2} src="/images/extracttext.png" alt="Step 2" className="rounded-lg shadow-md" />
                <img ref={ref3} src="/images/aithinking.png" alt="Step 3" className="rounded-lg shadow-md " />
            </div>

            <div className="sticky top-28 flex flex-col gap-6 h-52 ">
                <div className={`text-2xl md:text-4xl border-b border-dark-gray  ${activeStep === 0 ? "text-primary font-semibold" : "text-secondary-text"}`}>
                    Step 1: Upload PDF
                    <p className={` text-sm text-primary-text/75 transition-all duration-500 ease-out
                        ${activeStep === 0 ? 'opacity-100 translate-x-0  py-4' : 'opacity-0 -translate-x-5'} `}>
                        Select your PDF file to get started.
                    </p>
                </div>
                <div className={`text-2xl md:text-4xl border-b border-dark-gray  ${activeStep === 1 ? "text-primary font-semibold" : "text-secondary-text"}`}>
                    Step 2: Extract Text from the PDF File
                    <p className={` text-sm text-primary-text/75 transition-all duration-500 ease-out
                        ${activeStep === 1 ? 'opacity-100 translate-x-0  py-4' : 'opacity-0 -translate-x-5'} `}>
                        We extract and sanitize the text from the PDF file to ensure clean, safe input before sending it to the AI.”                    </p>
                </div>
                <div className={`text-2xl md:text-4xl border-b border-dark-gray  ${activeStep === 2 ? "text-primary font-semibold" : "text-secondary-text"}`}>
                    Step 3: AI Analyzes Content & Generate 10 Questions
                    <p className={` text-sm text-primary-text/75 transition-all duration-500 ease-out
                        ${activeStep === 2 ? 'opacity-100 translate-x-0  py-4' : 'opacity-0 -translate-x-5'} `}>
                        AI creates well-structured questions for effective learning and review.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks