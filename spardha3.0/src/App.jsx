import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import images
import spardha from "./assets/spardha.jpeg";
import cirbug from "./assets/spardha.jpeg";
import meme2 from "./assets/meme2.jpeg";
import promver from "./assets/prom-ver.jpeg";
import webcraft from "./assets/WebCraft_poster.png";
import techtalk from "./assets/techtalk.jpeg";
import charads from "./assets/charads.jpg";
import terminalclash from "./assets/TERMINAL_CLASH.png";

// Import event pages
import CircuitDebugging from "./pages/CircuitDebugging";
import MemeCreation from "./pages/MemeCreation";
import TechTalk from "./pages/TechTalk";

const Home = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner container">
          <a href="#" className="brand">NEXUS 3.0</a>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#technical">Technical</a>
            <a href="#nontechnical">Non-Technical</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero container my-5">
        <img src={spardha} alt="Nexus Hero" />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about">
        <h2>About SPARDHA 3.0</h2>
        <p className="text-center mx-auto" style={{ maxWidth: "900px" }}>
          SPARDHA 3.0, hosted by City Engineering College, is a vibrant
          multi-disciplinary college event featuring both technical and
          non-technical competitions designed to showcase student talent,
          creativity, and teamwork across various domains.
        </p>
      </section>

      {/* TECHNICAL EVENTS */}
      <section id="technical" className="section events">
        <h2>Technical Events</h2>
        <div className="container">
          <div className="row g-4">
            {[
              { img: cirbug, title: "Circuit Debugging", path: "/circuit-debugging" },
              { img: promver, title: "Prompt Verse", path: "/prompt-verse" },
              { img: webcraft, title: "WebCraft", path: "/webcraft" },
              { img: terminalclash, title: "Terminal Clash", path: "/terminal-clash" },
            ].map((event, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                <div
                  className="event"
                  onClick={() => navigate(event.path)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={event.img} alt={event.title} className="event-img" />
                  <div className="event-body">
                    <h3>{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NON-TECHNICAL EVENTS */}
      <section id="nontechnical" className="section events">
        <h2>Non-Technical Events</h2>
        <div className="container">
          <div className="row g-4">
            {[
              { img: meme2, title: "Meme Creation", path: "/meme-creation" },
              { img: techtalk, title: "Tech Talk", path: "/tech-talk" },
              { img: charads, title: "Tech Charades", path: "/tech-charades" },
            ].map((event, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="event"
                  onClick={() => navigate(event.path)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={event.img} alt={event.title} className="event-img" />
                  <div className="event-body">
                    <h3>{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            Have queries? Reach us at{" "}
            <a href="mailto:team@nexusfest.com">team@nexusfest.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="foot-links">
          <a href="#about">About</a> | <a href="#technical">Technical</a> |{" "}
          <a href="#nontechnical">Non-Technical</a> | <a href="#contact">Contact</a>
        </div>
        <p>© {year} NEXUS 3.0 — All Rights Reserved</p>
      </footer>
    </>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circuit-debugging" element={<CircuitDebugging />} />
      <Route path="/meme-creation" element={<MemeCreation />} />
      <Route path="/tech-talk" element={<TechTalk />} />
    </Routes>
  </Router>
);

export default App;
