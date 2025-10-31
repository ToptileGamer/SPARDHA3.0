import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import images from assets
import spardha from "./assets/spardha.jpeg";
import cirbug from "./assets/cirbug.jpeg";
import meme2 from "./assets/meme2.jpeg";
import promver from "./assets/prom-ver.jpeg";
import webcraft from "./assets/WebCraft_poster.png";
import techtalk from "./assets/techtalk.jpeg";
import charads from "./assets/charads.jpg";
import terminalclash from "./assets/TERMINAL_CLASH.png";

const App = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner container">
          <a href="#" className="brand">
            NEXUS 2.0
          </a>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#events">Events</a>
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
        <h2>About Nexus</h2>
        <p className="text-center mx-auto" style={{ maxWidth: "800px" }}>
          Nexus 2.0 is our annual technical fest celebrating innovation,
          creativity, and collaboration. Join us for a weekend filled with
          coding challenges, fun games, and insightful tech talks.
        </p>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="section events">
        <h2>Events</h2>
        <div className="container">
          <div className="row g-4">
            {[
              { img: cirbug, title: "Cirbug", desc: "Debugging challenge for coders." },
              { img: meme2, title: "Meme Mania", desc: "Create memes with a tech twist." },
              { img: promver, title: "Prom-Verse", desc: "Showcase your programming prowess." },
              { img: webcraft, title: "WebCraft", desc: "Build creative websites on the spot." },
              { img: techtalk, title: "Tech Talk", desc: "Inspiring talks from tech experts." },
              { img: charads, title: "Charades", desc: "Fun guessing game with a twist!" },
              { img: terminalclash, title: "Terminal Clash", desc: "Battle it out in the Linux terminal!" },
            ].map((event, i) => (
              <div key={i} className="col-md-4 col-sm-6">
                <div className="event">
                  <img src={event.img} alt={event.title} className="event-img" />
                  <div className="event-body">
                    <h3>{event.title}</h3>
                    <p>{event.desc}</p>
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
          <a href="#about">About</a> | <a href="#events">Events</a> |{" "}
          <a href="#contact">Contact</a>
        </div>
        <p>© {year} NEXUS 2.0 — All Rights Reserved</p>
      </footer>
    </>
  );
};

export default App;
