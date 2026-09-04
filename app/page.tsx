export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            RAC<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

{/* ================= HERO ================= */}
<section className="hero">

  <div className="hero-content">

    <p className="eyebrow">HELLO, I'M</p>

    <h1>
      Rishita
      <br />
      <span>Chavan</span>
    </h1>

    <h2>AI & Data Science Engineer</h2>

    <p className="hero-description">
      I build intelligent, data-driven applications using Python,
      Machine Learning, SQL, Data Analytics and modern AI technologies.
      I enjoy turning real-world problems into practical AI solutions.
    </p>

    <div className="buttons">

      <a href="#projects" className="button primary">
        View My Work →
      </a>

      <a
        href="/RISHITA_RESUME pdf.pdf"
        className="button secondary"
        target="_blank"
      >
        Download Resume
      </a>

    </div>

  </div>

  {/* PHOTO */}
  <div className="hero-visual">

    <div className="profile-placeholder">

      <img
        src="/profile.png"
        alt="Rishita Chavan"
      />

    </div>

  </div>

</section>
      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an Artificial Intelligence & Data Science Engineering
              graduate passionate about building practical AI solutions and
              turning data into meaningful insights.
            </p>

            <p>
              My interests include Machine Learning, Data Analytics, Python
              development, SQL, Power BI, Generative AI and intelligent
              applications.
            </p>

            <p>
              I enjoy solving real-world problems by combining data,
              technology and user-friendly design.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>2026</strong>
              <span>BE Graduate</span>
            </div>

            <div className="stat">
              <strong>3+</strong>
              <span>AI Projects</span>
            </div>

            <div className="stat">
              <strong>Python</strong>
              <span>Primary Language</span>
            </div>

            <div className="stat">
              <strong>AI & DS</strong>
              <span>Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section">
        <div className="section-title">
          <p>MY TOOLKIT</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {/* Programming */}
          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python · C · SQL </p>
          </div>

          {/* Machine Learning */}
          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>Scikit-learn · Regression · Classification · Clustering</p>
          </div>

          {/* Data Science */}
          <div className="skill-card">
            <h3>Data Science</h3>
            <p>Pandas · NumPy · EDA · Statistics</p>
          </div>

          {/* AI & NLP */}
          <div className="skill-card">
            <h3>AI & NLP</h3>
            <p>NLP · Generative AI · LLMs · AI Applications</p>
          </div>

          {/* Visualization */}
          <div className="skill-card">
            <h3>Visualization</h3>
            <p>Power BI · Matplotlib · Seaborn</p>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend</h3>
            <p>FastAPI · Flask · REST APIs · Streamlit</p>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git · GitHub · Jupyter · Google Colab · VS Code</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">
        <div className="section-title">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Project 01 */}
          <article className="project-card">
            <span className="project-number">01</span>

            <h3>FarmFusion</h3>

            <p>
              Smart Crop Recommendation and Yield Prediction System using
              Machine Learning to provide intelligent agricultural insights.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>FastAPI</span>
              <span>React</span>
            </div>

            <a
              href="https://github.com/RishitaChavan/Farm-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>

          {/* Project 02 */}
          <article className="project-card">
            <span className="project-number">02</span>

            <h3>Rays Medico</h3>

            <p>
              AI-powered healthcare application focused on disease prediction
              and medical report analysis.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Flask</span>
            </div>

            <a
              href="https://github.com/RishitaChavan/Rays2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>

          {/* Project 03 */}
          <article className="project-card">
            <span className="project-number">03</span>

            <h3>AI Chatbot</h3>

            <p>
              Intelligent conversational assistant designed to provide
              context-aware responses using NLP and AI techniques.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>NLP</span>
              <span>AI</span>
            </div>

            <a
              href="https://github.com/RishitaChavan/Syra"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section">
        <div className="section-title">
          <p>MY JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <span>2022 — 2026</span>

          <div>
            <h3>Bachelor of Engineering</h3>

            <h4>Artificial Intelligence & Data Science</h4>

            <p>
              Datta Meghe College of Engineering, Airoli, Navi Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact">
        <div className="section-title">
          <p>LET'S CONNECT</p>
          <h2>Let's Work Together</h2>
        </div>

        <p>
          I'm open to opportunities in AI Engineering, Data Analytics,
          Machine Learning and Python development.
        </p>

        <div className="buttons">
          {/* Email */}
          <a
            href="mailto:aids.21.rishitachavan@gmail.com"
            className="button primary"
          >
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rishita-chavan-353978299/"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/RishitaChavan"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 Rishita Chavan</p>
        <p>AI & Data Science Engineer</p>
      </footer>
    </main>
  );
}