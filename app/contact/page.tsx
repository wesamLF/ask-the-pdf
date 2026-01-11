'use client'

import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiCheck, FiCopy } from "react-icons/fi";

const page = () => {


    
const email = "wesamlafi390@gmail.com";
const [copied, setCopied] = useState(false);

const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
};
    return (
        <section className="min-h-[60vh] flex items-center justify-center bg-light px-6">
            <div className="w-full max-w-xl text-center space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold text-primary-text">
                    Get in Touch
                </h1>

                <div className="flex items-center justify-center gap-3 bg-white border border-light-gray rounded-xl px-5 py-4 shadow-sm">
                    <span className="text-secondary-text font-medium">{email}</span>

                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                        {copied ? <FiCheck /> : <FiCopy />}
                        <span className="text-sm">
                            {copied ? "Copied" : "Copy"}
                        </span>
                    </button>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-primary transition-colors"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-primary transition-colors"
                    >
                        <FaTwitter size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-primary transition-colors"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default page