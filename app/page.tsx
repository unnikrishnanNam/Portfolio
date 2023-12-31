import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import VerticalDivider from "@/components/VerticalDivider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <VerticalDivider />
      <About />
      <Projects />
    </main>
  );
}
