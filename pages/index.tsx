import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import HireMeForm from "../components/HireMeForm";
import GetCV from "../components/GetCV";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Skills />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Timeline />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <GetCV />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <HireMeForm />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Footer />
    </>
  );
}
