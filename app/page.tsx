import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Contact />
    </>
  );
}