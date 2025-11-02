import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// assets
import spardha from "./assets/main_page_banners/spardha.jpeg";
import cirbug from "./assets/main_page_banners/cirbug.jpeg";
import meme2 from "./assets/main_page_banners/meme2.jpeg";
import promverPoster from "./assets/main_page_banners/prom-ver.jpeg";
import webcraftPoster from "./assets/main_page_banners/WebCraft_poster.png";
import techtalk from "./assets/main_page_banners/techtalk.jpeg";
import charadsPoster from "./assets/main_page_banners/charads.jpg";
import terminalPoster from "./assets/main_page_banners/TERMINAL_CLASH.png";
import trehunPoster from "./assets/main_page_banners/trehun.jpeg";
import cqp2 from "./assets/main_page_banners/Cqp2.png";

// pages
import CircuitDebugging from "./pages/CircuitDebugging";
import PromptVerse from "./pages/PromptVerse";
import WebCraft from "./pages/WebCraft";
import TerminalClash from "./pages/TerminalClash";
import MemeCreation from "./pages/MemeCreation";
import TechTalk from "./pages/TechTalk";
import TechCharades from "./pages/TechCharades";
import TreasureHunt from "./pages/TreasureHunt";
import GameOfTetrons from "./pages/GameOfTetrons";

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => setYear(new Date().getFullYear()), []);

  const technicalEvents = [
    { img: cirbug, title: "Circuit Debugging", date: "Date: 21 November 2025", path: "/circuit-debugging" },
    { img: promverPoster, title: "Prompt Verse", date: "Date: 20 November 2025", path: "/prompt-verse" },
    { img: webcraftPoster, title: "WebCraft", date: "Date: 21 November 2025", path: "/webcraft" },
    { img: terminalPoster, title: "Terminal Clash", date: "Date: 20 November 2025", path: "/terminal-clash" },
    { img: techtalk, title: "Tech Talk", date: "Date: 20 November 2025", path: "/tech-talk" },
    { img: cqp2, title: "Game of Tetrons", date: "Date: 20 November 2025", path: "/game-of-tetrons" },
  ];

  const nonTechnicalEvents = [
    { img: charadsPoster, title: "Tech Charades", date: "Date: 21 November 2025", path: "/tech-charades" },
    { img: trehunPoster, title: "Treasure Hunt", date: "Date: 21 November 2025", path: "/treasure-hunt" },
    { img: meme2, title: "Meme Creation", date: "Date: 20 November 2025", path: "/meme-creation" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner container">
          <a href="/" className="brand">SPARDHA 3.0</a>

          <div
            className="hamburger"
            onClick={() => setMenuOpen((s) => !s)}
            role="button"
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </div>

          <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#technical" onClick={() => setMenuOpen(false)}>Technical</a>
            <a href="#nontechnical" onClick={() => setMenuOpen(false)}>Non-Technical</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO SECTION */}
        <section className="hero container my-5">
          <img src={spardha} alt="Spardha Hero" />
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <h5 className="text-center mx-auto">IEEE STUDENTS WILL BE GETTING 20% DISCOUNT ON ANY EVENT REGISTRATION</h5>
          <h2>About SPARDHA 3.0</h2>
          <p className="text-center mx-auto" style={{ maxWidth: "900px" }}>
            SPARDHA 3.0 ,hosted by City Engineering College, is a vibrant multi-disciplinary college event featuring both technical and non-technical competitions, 
            designed to showcase student talent, creativity, and teamwork across various domains.
SPARDHA encourages participation from all college students, creating a platform for national and regional representation.
<br></br>
With each edition, SPARDHA sets new benchmarks in student engagement, building lasting memories and strengthening its reputation as a prestigious festival in the academic calendar. 
The blend of technical and non-technical competitions ensures holistic development, making it a key tradition for City Engineering College. 
SPARDHA thus stands out as a signature event fostering excellence, teamwork, and innovation through its diverse competitions and vibrant atmosphere.
          </p>
        </section>

        {/* TECHNICAL EVENTS */}
        <section id="technical" className="section events">
          <h2>Technical Events</h2>
          <div className="container">
            <div className="row g-4 justify-content-center">
              {technicalEvents.map((ev, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="event" style={{ cursor: "pointer" }}>
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="event-img"
                      onClick={() => navigate(ev.path)}
                    />
                    <div className="event-body">
                      <h3>{ev.title}</h3>
                      <p className="event-date">{ev.date}</p>
                      <button
                        className="register-btn"
                        onClick={() =>
                          window.open("https://docs.google.com/forms/d/e/1FAIpQLSe_0S14M37WCWM8Sgu5PxvhQCS5gGhfsJN18-V8QttOX_Opmg/viewform?usp=dialog", "_blank")
                        }
                      >
                        Register Now
                      </button>
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
            <div className="row g-4 justify-content-center">
              {nonTechnicalEvents.map((ev, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="event" style={{ cursor: "pointer" }}>
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="event-img"
                      onClick={() => navigate(ev.path)}
                    />
                    <div className="event-body">
                      <h3>{ev.title}</h3>
                      <p className="event-date">{ev.date}</p>
                      <button
                        className="register-btn"
                        onClick={() =>
                          window.open("https://docs.google.com/forms/d/e/1FAIpQLSe_0S14M37WCWM8Sgu5PxvhQCS5gGhfsJN18-V8QttOX_Opmg/viewform?usp=dialog", "_blank")
                        }
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Ajith : +91 70193 68535 </p>
            <p>Afnan : +91 6363 668 845 </p>
            <p>
              Have queries? Reach us at{" "}
              <a href="mailto:techspardha@cityengineeringcollege.ac.in">
                techspardha@cityengineeringcollege.ac.in
              </a>
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/spardha__3.0?igsh=YnE4NGd3cG83azN2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="foot-links">
          <a href="#about">About</a> | <a href="#technical">Technical</a> |{" "}
          <a href="#nontechnical">Non-Technical</a> | <a href="#contact">Contact</a>
        </div>
        <p>© {year} City Engineering College — All Rights Reserved</p>
        <p>Designed and Developed by <strong>J Gautham</strong></p>
        <p>
          Contact me{" "}
          <a href="mailto:jgautham42@gmail.com">Here</a>
        </p>
      </footer>
    </>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circuit-debugging" element={<CircuitDebugging />} />
      <Route path="/prompt-verse" element={<PromptVerse />} />
      <Route path="/webcraft" element={<WebCraft />} />
      <Route path="/terminal-clash" element={<TerminalClash />} />
      <Route path="/meme-creation" element={<MemeCreation />} />
      <Route path="/tech-talk" element={<TechTalk />} />
      <Route path="/tech-charades" element={<TechCharades />} />
      <Route path="/treasure-hunt" element={<TreasureHunt />} />
      <Route path="/game-of-tetrons" element={<GameOfTetrons />} />
    </Routes>
  </Router>
);

export default App;
