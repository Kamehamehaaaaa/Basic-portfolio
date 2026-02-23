import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}
