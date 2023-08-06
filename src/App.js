import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Remarque from "./components/Remarque/Remarque";
import About from "./Sections/About/About";
import Certifications from "./Sections/Certifications/Certifications";
import Education from "./Sections/Education/Education";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Remarque /> */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
