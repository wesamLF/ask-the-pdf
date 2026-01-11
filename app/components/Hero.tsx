import { AiOutlineRobot, AiOutlineLogin, AiOutlineLock } from "react-icons/ai";
import InfoCard from "./InfoCard";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative bg-color-light py-36 px-6 md:px-12 overflow-hidden ">



            <div className="max-w-5xl mx-auto text-center fslex flex-col gap-10 z-20 relative pb-12">
                <div className="absolute inset-x-0 -top-20 mx-auto w-52 h-52 bg-accent rounded-full blur-3xl opacity-40"></div>
                <div className="relative z-10">

                    <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-4 ">
                        Turn Any PDF into 10 AI-Generated Questions
                    </h1>
                    <p className="text-secondary-text text-lg md:text-xl mb-8">
                        Upload your PDF and let our AI generate practice questions instantly. Perfect for students, teachers, and lifelong learners.
                    </p>
                    <Link href={"/quiz/upload"} className=" flex justify-center  ">
                        <p className="bg-primary text-light px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition">                        Upload PDF & Generate Questions
                        </p>
                    </Link >
                </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 relative bg">
                <div className="absolute w-full h-4 bg-linear-to-r from-transparent via-primary to-transparent z-10" />

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-50 ">
                    <InfoCard
                        title="AI Powered"
                        Icon={AiOutlineRobot}
                        description="Smart AI that understands your content."
                    />

                    <InfoCard
                        title="Fast & Accurate"
                        Icon={AiOutlineLogin}
                        description="Get meaningful questions in seconds."
                    />

                    <InfoCard
                        title="Secure & Private"
                        Icon={AiOutlineLock}
                        description="Your files are never stored or shared."
                    />
                </div>
            </div>









        </section>
    )
}

export default Hero