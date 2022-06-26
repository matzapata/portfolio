import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hello from "./components/Hello/Hello"
import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact";
import Thanks from "./components/Contact/Thanks";
import Projects from "./components/Projects/Projects";
import FindMe from "./components/FindMe";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-500 lg:bg-dark-600">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about-me/*" element={<AboutMe />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/contact-me/thanks" element={<Thanks />} />
      </Routes>
      <FindMe />
    </div>
  );
}

export default App;
