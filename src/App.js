import Navbar from "./components/Navbar/Navbar";
import About from "./Sections/About/About";
import Education from "./Sections/Education/Education";
import Hero from "./Sections/Hero/Hero";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
