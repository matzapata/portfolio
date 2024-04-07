import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hello from "./pages/Hello";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Projects from "./pages/Projects";
import FindMe from "./components/FindMe";
import { useEffect } from "react";
import NotFound from "./components/NotFound";

function App() {
  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-600">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/contact-me/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <FindMe />
    </div>
  );
}

export default App;
