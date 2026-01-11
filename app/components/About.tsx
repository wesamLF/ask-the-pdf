import { SiNextdotjs, SiOpenai } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";
const About = () => {
  return (
    <section className="bg-light py-16 px-6 md:px-16">
      <h2 className="text-primary-text text-3xl md:text-4xl font-bold text-center mb-8" id='about'>
        Powered by Modern Technologies
      </h2>

      <p className="text-secondary-text text-center max-w-3xl mx-auto mb-12">
        Our tool uses <span className="font-semibold">Next.js</span> for a fast, responsive web experience.
        We rely on <span className="font-semibold">pdf-ts</span> to extract and sanitize text from your PDFs,
        ensuring clean input. Finally, our AI, powered by the <span className="font-semibold">OpenAI API</span>,
        generates 10 thoughtful, meaningful questions in seconds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center gap-4">
          <SiNextdotjs className="text-primary text-5xl" />
          <h3 className="text-primary-text font-semibold text-lg">Next.js</h3>
          <p className="text-secondary-text text-sm">
            Fast, modern web interface with smooth navigation and performance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center gap-4">
          <FaFilePdf className="text-primary text-5xl" />
          <h3 className="text-primary-text font-semibold text-lg">pdf-ts</h3>
          <p className="text-secondary-text text-sm">
            Accurately extracts and sanitizes text from uploaded PDFs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center gap-4">
          <SiOpenai className="text-primary text-5xl" />
          <h3 className="text-primary-text font-semibold text-lg">OpenAI API</h3>
          <p className="text-secondary-text text-sm">
            Generates intelligent, well-crafted questions from extracted text.
          </p>
        </div>
      </div>
      <Link href={"/quiz/upload"} className=" text-primary flex w-full justify-center  underline  mt-12 cursor-pointer hover:text-primary/75 ">Try it now</Link>
    </section>
  )
}

export default About