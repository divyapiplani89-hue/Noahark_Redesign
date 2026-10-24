import React, { useState } from "react";

const chapters = [
  {
    number: "01",
    eyebrow: "A PLACE TO BELONG",
    title: "Little hearts. Big discoveries.",
    copy: "A warm, welcoming space where every child is known, encouraged and celebrated.",
    icon: "🏡",
    color: "peach"
  },
  {
    number: "02",
    eyebrow: "LEARNING THROUGH PLAY",
    title: "Curiosity leads the way.",
    copy: "From stories and building blocks to music and messy art, children learn by doing.",
    icon: "🎨",
    color: "mint"
  },
  {
    number: "03",
    eyebrow: "GROWING TOGETHER",
    title: "Kindness is part of the adventure.",
    copy: "We help little learners build confidence, friendships and the courage to try again.",
    icon: "🌱",
    color: "lavender"
  }
];

function ArkIllustration() {
  return (
    <div className="scene-art" aria-label="Illustration of Noah's Ark with friendly animals">
      <div className="sun"></div>
      <div className="cloud cloud-one"></div>
      <div className="cloud cloud-two"></div>
      <div className="bird bird-one">⌁</div>
      <div className="bird bird-two">⌁</div>
      <div className="hill hill-back"></div>
      <div className="hill hill-front"></div>
      <div className="ark">
        <div className="ark-roof"></div>
        <div className="ark-cabin"><span>NOAH'S ARK</span><small>♥</small></div>
        <div className="ark-animals">
          <span className="animal animal-giraffe">🦒</span>
          <span className="animal animal-elephant">🐘</span>
          <span className="animal animal-lion">🦁</span>
          <span className="animal animal-rabbit">🐰</span>
          <span className="animal animal-zebra">🦓</span>
        </div>
        <div className="portholes"><span>👧🏻</span><span>👦🏽</span><span>👧🏾</span></div>
        <div className="ark-hull"></div>
      </div>
      <div className="wave wave-back"></div>
      <div className="wave wave-front"></div>
      <div className="floating-flower flower-one">✿</div>
      <div className="floating-flower flower-two">✿</div>
      <div className="sparkle sparkle-one">✦</div>
      <div className="sparkle sparkle-two">✧</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToAdmissions = () => {
    document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><span>✦</span> Little steps today, brighter tomorrows tomorrow <span className="announcement-right">Admissions enquiries are welcome</span></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Noah's Ark home">
          <span className="brand-mark"><span className="brand-boat">⛵</span><span className="brand-ripple">〰</span></span>
          <span className="brand-copy"><strong>Noah’s Ark</strong><small>Preschool &amp; Daycare</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Our Journey</a>
          <a href="#learning" onClick={() => setMenuOpen(false)}>Learning</a>
          <a href="#life" onClick={() => setMenuOpen(false)}>Life at Noah’s Ark</a>
          <a href="#admissions" onClick={() => setMenuOpen(false)}>Admissions</a>
          <button className="nav-cta" onClick={scrollToAdmissions}>Book a School Visit <span>↗</span></button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"></span> A LITTLE WORLD OF WONDER</div>
            <h1>Every little journey begins with <em>wonder.</em></h1>
            <p>A caring space to play, discover and grow — where every child’s story can bloom.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={scrollToAdmissions}>Come aboard <span>→</span></button>
              <a className="text-link" href="#journey">Explore our learning journey <span>↘</span></a>
            </div>
            <div className="hero-note"><span className="note-icon">♡</span><span><strong>Little learners, big possibilities</strong><small>Care · Creativity · Confidence</small></span></div>
          </div>
          <ArkIllustration />
          <a className="scroll-cue" href="#journey"><span className="scroll-dot"></span> SCROLL TO BEGIN THE ADVENTURE <b>↓</b></a>
        </section>

        <section className="intro section-wrap" id="journey">
          <div className="section-label"><span>✦</span> OUR STORY, ONE CHAPTER AT A TIME <span>✦</span></div>
          <h2>A safe harbour for <em>curious minds.</em></h2>
          <p className="section-lead">Early childhood is more than preparation for school — it’s the beginning of a lifelong love of learning.</p>
          <div className="chapter-grid">
            {chapters.map((chapter) => (
              <article className={`chapter-card ${chapter.color}`} key={chapter.number}>
                <div className="chapter-top"><span>CHAPTER {chapter.number}</span><span className="chapter-icon">{chapter.icon}</span></div>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
                <a href="#learning" className="round-arrow" aria-label={`Explore chapter ${chapter.number}`}>↗</a>
                <div className="card-decoration" aria-hidden="true">✳</div>
              </article>
            ))}
          </div>
        </section>

        <section className="learning-section" id="learning">
          <div className="learning-inner">
            <div className="learning-copy">
              <div className="section-label left-label"><span>✦</span> LITTLE HANDS, BIG IDEAS</div>
              <h2>Learning should feel like an <em>adventure.</em></h2>
              <p>Through purposeful play, creative expression and guided social interaction, children explore the world at their own pace.</p>
              <ul className="learning-list">
                <li><span>✿</span> Creative arts &amp; storytelling</li>
                <li><span>✿</span> Play-based discovery</li>
                <li><span>✿</span> Friendships &amp; emotional growth</li>
              </ul>
              <a className="button button-dark" href="#life">Discover our approach <span>→</span></a>
            </div>
            <div className="activity-board" id="life">
              <div className="activity activity-art"><span>🎨</span><strong>Make &amp; create</strong><small>Big ideas start small</small></div>
              <div className="activity activity-blocks"><span>🧱</span><strong>Build &amp; explore</strong><small>Learning by doing</small></div>
              <div className="activity activity-story"><span>📚</span><strong>Stories &amp; songs</strong><small>Imagine what’s next</small></div>
              <div className="activity activity-garden"><span>🌼</span><strong>Outdoor wonder</strong><small>Grow every day</small></div>
              <div className="board-sun">☀</div>
              <div className="board-doodle">✦</div>
            </div>
          </div>
        </section>

        <section className="visit-section" id="admissions">
          <div className="visit-decoration decor-left">✿</div><div className="visit-decoration decor-right">✦</div>
          <div className="visit-heading">
            <div className="section-label"><span>✦</span> YOUR NEXT CHAPTER STARTS HERE <span>✦</span></div>
            <h2>Come see where the <em>magic happens.</em></h2>
            <p>We’d love to meet your family, answer your questions and show you around.</p>
          </div>
          <div className="admissions-layout">
            <div className="contact-card">
              <div className="contact-illustration">🏡<span>♥</span></div>
              <h3>Let’s plan a little visit.</h3>
              <p>Connect with Noah’s Ark Preschool &amp; Daycare to learn more about our early learning environment and enrollment process.</p>
              <div className="contact-item"><span>☎</span><div><small>CALL US</small><strong>93714 56927 · 98503 46139</strong></div></div>
              <div className="contact-item"><span>✉</span><div><small>EMAIL US</small><strong>noahsarkpune@gmail.com</strong></div></div>
              <div className="contact-item"><span>⌖</span><div><small>FIND US</small><strong>A-17, Vidut Nagar, Lane-5,<br/>Koregaon Park, Pune</strong></div></div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="success-state"><span>🌈</span><h3>Thanks for reaching out!</h3><p>This demo form is working locally. To receive real enquiries, it needs to be connected to the school's email or form backend.</p><button type="button" className="button button-primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div>
              ) : (
                <>
                  <div className="form-heading"><span className="form-step">01 / SAY HELLO</span><h3>Tell us about your little one.</h3><p>Fill in a few details and we’ll help you with the next steps.</p></div>
                  <div className="form-row"><label>Parent’s first name *<input required name="firstName" placeholder="Your first name" /></label><label>Last name<input name="lastName" placeholder="Your last name" /></label></div>
                  <label>Child’s name *<input required name="childName" placeholder="Your child's name" /></label>
                  <div className="form-row"><label>Child’s date of birth<input name="birthDate" type="date" /></label><label>Interested in<select name="facility" defaultValue=""><option value="" disabled>Select a programme</option><option>Preschool</option><option>Daycare</option><option>Preschool & Daycare</option><option>I'd like guidance</option></select></label></div>
                  <label>Phone number *<input required name="phone" type="tel" placeholder="Your contact number" /></label>
                  <label>Anything you’d like us to know?<textarea name="message" rows="3" placeholder="Questions, preferred visit time, or a little note..." /></label>
                  <button className="button button-primary submit-button" type="submit">Send an enquiry <span>→</span></button>
                  <small className="privacy-note">Your details are used only to respond to your enquiry.</small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><span className="brand-boat">⛵</span><span className="brand-ripple">〰</span></span><span className="brand-copy"><strong>Noah’s Ark</strong><small>Preschool &amp; Daycare</small></span></a>
        <p>A little world of wonder, a big beginning for life.</p>
        <div className="footer-links"><a href="#journey">Our Journey</a><a href="#learning">Learning</a><a href="#admissions">Admissions</a></div>
        <small>© Noah’s Ark Preschool &amp; Daycare · Design concept prototype</small>
      </footer>
    </div>
  );
}

export default App;