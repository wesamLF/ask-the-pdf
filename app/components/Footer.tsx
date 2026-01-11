
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-light border-t border-light-gray">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="">
                    <Link href="/" className="w-30 font-semibold text-primary hover:text-secondary-text  p-2">
                        <img src="/images/atp.png" alt="" />
                    </Link>
                    <p className="text-secondary-text text-sm">
                        © {new Date().getFullYear()} Ask The PDF. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-primary transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-primary transition-colors"
                    >
                        <FaTwitter size={20} />
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-primary transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer