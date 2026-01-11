import About from "./components/About";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className=" ">
      <main className=" ">
        <Hero />
        <div className="py-20">

          <HowItWorks />
        </div>
        <div className="pt-60">

          <Demo />
        </div>
        <div className="pt-40">

          <About />
        </div>
        <div className="pt-40">

          <Footer />
        </div>
      </main>
    </div >
  );
}
