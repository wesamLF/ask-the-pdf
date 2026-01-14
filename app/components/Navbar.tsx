"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryBtn from "./PrimaryBtn";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className=" z-50 border-b  border-light-gray text-base max-wd-main ">
            <div className="mx-auto flex items-center justify-between ">
                <div className=" flex gap-8 justify-center items-center h-full">
                    <Link href="/" className="w-30 font-semibold text-primary hover:text-secondary-text  p-2">
                        <img src="/images/atp.png" alt=""  />
                    </Link>
                    <Link href="/#about" className="hidden sm:flex h-full  justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text ">
                        About
                    </Link>
                    <Link href="/contact" className="hidden sm:flex h-full  justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text  ">
                        Contact
                    </Link>
                </div>


                <nav className="hidden items-center gap-6 md:flex h-full ">
                    <Link
                        href="/#how-it-works"
                        className="  h-full flex justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text "
                    >
                        How it works!
                    </Link>
                    <PrimaryBtn text={"Start Quiz"} href={"/quiz/upload"} />
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-light-gray  md:hidden">
                    <nav className="flex flex-col gap-2 px-4 py-4">
                        <Link
                            href="/#how-it-works"
                            onClick={() => setOpen(false)}
                            className=" px-3 py-2  h-full flex justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text "
                        >
                            How it works!     </Link>
                        <Link href="/#about" className=" h-full flex justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text ">
                            About
                        </Link>
                        <Link href="/contact" className=" h-full flex justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text  ">
                            Contact
                        </Link>
                        <Link
                            href="/quiz/upload"
                            onClick={() => setOpen(false)}
                            className=" px-3 py-2  h-full flex justify-center items-center border-b pt-px border-transparent hover:text-secondary-text  hover:border-primary-text "
                        >

                            Start Quiz
                        </Link>

                    </nav>
                </div>
            )}
        </header>
    );
}
