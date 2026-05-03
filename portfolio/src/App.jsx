import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contacts.jsx";
import Experience from "./components/sections/Experience.jsx";
import Hero from "./components/sections/Hero.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skill.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-main)" }}
    >
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
