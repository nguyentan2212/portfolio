import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import HireMeForm from "../components/HireMeForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Skills />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Timeline />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <HireMeForm />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <footer></footer>
    </div>
  );
}
