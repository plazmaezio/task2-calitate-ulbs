import "./App.css";
import { useState, useRef, useEffect } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Expanded from "./components/Expanded/Expanded";
import Footer from "./components/Footer/Footer";

function App() {
  const [expanded, setExpanded] = useState(false);

  const expandedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!expanded) return;
    const t = setTimeout(() => {
      if (expandedRef.current) {
        const rect = expandedRef.current.getBoundingClientRect();
        const offset = 48; // px of space from top of viewport
        const targetY = (window.scrollY + rect.top - offset) / 3;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    }, 80);
    return () => clearTimeout(t);
  }, [expanded]);

  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
        <div className="main-panel">
          <Features expanded={expanded} />
          <Expanded ref={expandedRef} expanded={expanded} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
