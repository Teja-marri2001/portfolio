// App.jsx — Root component: assembles all sections in order
import "./styles/global.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Education  from "./components/Education";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer + floating scroll-to-top */}
      <Footer />
      <ScrollToTop />
    </>
  );
}
