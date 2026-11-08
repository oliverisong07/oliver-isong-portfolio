import React, { useEffect, useState } from "react";
import portraitImage from "../image/DSC_3282.JPG";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";
import { links, projects, skills, strengths } from "./data.js";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

function ProjectPreview({ kind }) {
  if (kind === "tasks") {
    return (
      <div className="preview-window task-preview" aria-hidden="true">
        <div className="preview-top"><span /><span /><span /><i>my day</i></div>
        <div className="task-layout">
          <div className="task-sidebar"><b>◎ &nbsp; Overview</b><span>◷ &nbsp; My tasks</span><span>✦ &nbsp; Completed</span></div>
          <div className="task-main"><small>MONDAY, JUNE 16</small><strong>A little progress<br />goes a long way.</strong><div className="task-line done">✓ &nbsp; Review project notes</div><div className="task-line">○ &nbsp; Plan the next sprint</div><div className="task-line">○ &nbsp; Finish a small feature</div><div className="add-task">＋ &nbsp; Add a task</div></div>
        </div>
      </div>
    );
  }
  if (kind === "shop") {
    return (
      <div className="preview-window shop-preview" aria-hidden="true">
        <div className="shop-top"><b>form &amp; field</b><span>Shop&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp; Journal</span><i>Bag (0)</i></div>
        <div className="shop-heading"><small>MADE FOR EVERYDAY</small><strong>Good things,<br />well made.</strong><div className="shop-cta">Explore the collection&nbsp; →</div></div>
        <div className="shop-products"><div className="product product-one"><span>01 / CERAMICS</span><b>Everyday<br />Stoneware</b></div><div className="product product-two"><span>02 / OBJECTS</span><b>Quiet<br />Essentials</b></div><div className="product product-three"><span>03 / HOME</span><b>Soft<br />Geometry</b></div></div>
      </div>
    );
  }
  return (
    <div className="preview-window travel-preview" aria-hidden="true">
      <div className="travel-top"><b>northbound<span>.</span></b><span>Discover&nbsp;&nbsp; Trips&nbsp;&nbsp; About</span><i>Sign in</i></div>
      <div className="travel-content"><small>YOUR NEXT CHAPTER STARTS HERE</small><strong>Somewhere<br />is calling.</strong><p>Find a little room to roam.</p><div className="travel-search"><span>⌖ &nbsp; From anywhere</span><span>◎ &nbsp; Where to?</span><b>→</b></div></div>
      <div className="travel-stamp">GO<br />FAR<br />FEEL<br />MORE</div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-visual ${project.preview}`}>
        <ProjectPreview kind={project.preview} />
        <span className="project-number">{project.number} / 03</span>
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.category}</span><ArrowUpRight size={17} /></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-features">
          {project.features.map((feature) => <span key={feature}><Check size={13} />{feature}</span>)}
        </div>
        <div className="project-bottom">
          <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <div className="project-links">
            {project.repository ? <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={17} /></a> : <span className="link-pending" title="Repository link to be added"><Github size={17} /></span>}
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><ArrowUpRight size={17} /></a> : <span className="link-pending" title="Live demo link to be added"><ArrowUpRight size={17} /></span>}
          </div>
        </div>
      </div>
    </article>
  );
}

function SocialLink({ href, label, children }) {
  return <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("oliver-portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try {
      localStorage.setItem("oliver-portfolio-theme", darkMode ? "dark" : "light");
    } catch {
      // The selected theme remains active for the current page even if storage is unavailable.
    }
  }, [darkMode]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(""), 6000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function downloadCv() {
    window.print();
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    const cleanName = formState.name.trim();
    const cleanEmail = formState.email.trim();
    const cleanMessage = formState.message.trim();
    if (!cleanName || !cleanEmail || !cleanMessage) {
      setNotice("Please complete each field before sending your message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setNotice("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${cleanName}`);
    const body = encodeURIComponent(`From: ${cleanName} (${cleanEmail})\n\n${cleanMessage}`);
    window.location.href = `${links.email}?subject=${subject}&body=${body}`;
    setNotice("Your email app should open with a pre-filled message.");
  }

  return (
    <div className="site-shell min-h-screen">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Oliver Isong, home">
            <span className="wordmark-icon">OI<span>.</span></span>
            <span className="wordmark-name">OLIVER ISONG<small>SOFTWARE ENGINEER</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            {navigation.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cv mobile-cv" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDarkMode((current) => !current)} aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`} title={`Switch to ${darkMode ? "light" : "dark"} theme`}>
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="nav-cv desktop-cv" onClick={downloadCv} type="button">Download CV <Download size={15} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            <h1>Building useful<br />things for the <span>real world.</span></h1>
            <p className="hero-lede">I’m Oliver Clement Isong — a Software Engineering student and aspiring developer building practical web and mobile experiences.</p>
            <div className="hero-cta">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <button className="button button-secondary" onClick={downloadCv} type="button">Download my CV <Download size={16} /></button>
            </div>
            <div className="hero-socials">
              <span>FIND ME ELSEWHERE</span>
              <SocialLink href={links.github} label="GitHub"><Github size={17} /> GitHub <ArrowUpRight size={13} /></SocialLink>
              <SocialLink href={links.linkedin} label="LinkedIn"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></SocialLink>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-grid" />
            <div className="portrait-frame">
              <img className="portrait-image" src={portraitImage} alt="Oliver Clement Isong" />
              <div className="portrait-caption"><span>OLIVER CLEMENT ISONG</span><span>SOFTWARE ENGINEERING · BABCOCK</span></div>
            </div>
            <div className="art-index"><span>01</span> / ENGINEER IN THE MAKING</div>
            <div className="art-note"><span>Currently learning</span><b>Build. Learn.<br />Repeat.</b><ArrowDownRight size={19} /></div>
            <div className="art-mark">OI<span>.</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-strip-inner">
            <span>CURIOUS BY NATURE.</span><i /><span>ENGINEER BY TRAINING.</span><i /><span>BUILDER BY PRACTICE.</span>
            <span className="strip-location">OGUN STATE, NIGERIA <span>↗</span></span>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label"><span>01</span> A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2>Good software<br />starts with <span>curiosity.</span></h2>
            <div className="about-copy">
              <p>I’m studying Software Engineering at Babcock University, where I’m building a foundation in the principles behind reliable, useful software.</p>
              <p>I’m especially interested in frontend development and the craft of turning ideas into clear, approachable digital experiences. Through personal and academic projects, I’ve been exploring modern web and mobile technologies while learning to solve problems one thoughtful step at a time.</p>
              <p>I’m early in my engineering journey, eager to keep learning, collaborate with others, and contribute with care to a team building products that matter.</p>
              <a className="text-link" href="#contact">A bit more about working together <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="about-facts">
            <div><span>01 / EDUCATION</span><b>Software Engineering</b><small>Babcock University</small></div>
            <div><span>02 / INTERESTS</span><b>Web &amp; mobile development</b><small>Product-minded engineering</small></div>
            <div><span>03 / CURRENTLY</span><b>Open to opportunities</b><small>Internships &amp; collaboration</small></div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="section-label"><span>02</span> THE TOOLKIT</div><h2>Technologies I’m<br /><span>learning and using.</span></h2></div>
              <p>A growing set of tools I’ve explored through coursework, practice, and building projects. I’m always open to learning the right tool for the job.</p>
            </div>
            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }, index) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span>0{index + 1}</span></div>
                  <h3>{title}</h3>
                  <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="skills-footnote"><span className="footnote-line" /> SKILLS GROW WITH EVERY PROJECT</div>
          </div>
        </section>

        <section className="projects-section section-wrap section-pad" id="projects">
          <div className="section-heading project-heading">
            <div><div className="section-label"><span>03</span> SELECTED PROJECTS</div><h2>Small steps.<br /><span>Useful outcomes.</span></h2></div>
            <p>A few personal and academic concepts that help me learn by building. Each project is an opportunity to practice thoughtful interfaces and problem-solving.</p>
          </div>
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
          <div className="project-note"><Layers3 size={17} /><span>Have an idea in mind?</span><a href="#contact">Let’s talk about it <ArrowRight size={14} /></a></div>
        </section>

        <section className="education-section section-pad">
          <div className="section-wrap">
            <div className="section-label"><span>04</span> THE FOUNDATIONS</div>
            <div className="education-grid">
              <div><h2>Learning to build<br /><span>what’s next.</span></h2><p>My engineering education is where curiosity is becoming a practical toolkit.</p></div>
              <article className="education-card">
                <span className="education-icon"><GraduationCap size={23} /></span>
                <div className="education-details"><span className="education-period">UNDERGRADUATE STUDIES · GRADUATION DATE TO BE ADDED</span><h3>Bachelor’s Degree in Software Engineering</h3><p>Babcock University <span>·</span> Ogun State, Nigeria</p><div className="education-rule" /><div className="education-placeholder"><span>IN PROGRESS</span><small>Relevant coursework, academic projects and achievements can be added here.</small></div></div>
                <span className="education-status"><i /> IN PROGRESS</span>
              </article>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap section-pad" id="experience">
          <div className="section-heading">
            <div><div className="section-label"><span>05</span> EXPERIENCE &amp; DEVELOPMENT</div><h2>Growing through<br /><span>doing the work.</span></h2></div>
            <p>My experience so far is rooted in learning, building, and developing my craft—not professional employment. I’m looking forward to contributing to a team.</p>
          </div>
          <div className="development-list">
            <div className="development-item"><span>01</span><div><h3>Personal software projects</h3><p>Independent projects exploring web and mobile interfaces, practical features, and the development process.</p></div><span className="development-type">PERSONAL</span></div>
            <div className="development-item"><span>02</span><div><h3>Academic engineering projects</h3><p>Coursework and project work as part of my Software Engineering studies at Babcock University.</p></div><span className="development-type">ACADEMIC</span></div>
            <div className="development-item"><span>03</span><div><h3>Open to what’s next</h3><p>Interested in technical training, internships, open-source collaboration, and opportunities to learn alongside engineers.</p></div><span className="development-type">IN PROGRESS</span></div>
          </div>
        </section>

        <section className="strengths-section section-pad">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="section-label"><span>06</span> HOW I APPROACH THE WORK</div><h2>Good work is a<br /><span>team effort.</span></h2></div>
              <p>I’m bringing a grounded mindset, genuine curiosity, and a commitment to growing into the engineer my team can count on.</p>
            </div>
            <div className="strength-grid">
              {strengths.map((strength) => <article className="strength-card" key={strength.number}><span>{strength.number}</span><h3>{strength.title}</h3><p>{strength.text}</p><ArrowUpRight size={16} /></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <div className="section-label"><span>07</span> GET IN TOUCH</div>
              <h2>Let’s build<br />something <span>meaningful.</span></h2>
              <p>I’m interested in software engineering internships and opportunities to contribute to thoughtful technology teams. If you’re looking for a curious developer who’s ready to learn and help, I’d love to hear from you.</p>
              <a className="button button-light" href="#contact-form">Discuss an opportunity <ArrowUpRight size={17} /></a>
              <div className="contact-socials">
                <SocialLink href={links.github} label="GitHub"><Github size={16} /> GitHub <ArrowUpRight size={13} /></SocialLink>
                <SocialLink href={links.linkedin} label="LinkedIn"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></SocialLink>
                <a className="social-link" href={links.email}><Mail size={16} /> Email <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <form className="contact-form" id="contact-form" onSubmit={handleContactSubmit} noValidate>
              <div className="form-heading"><span>01 / SAY HELLO</span><Send size={17} /></div>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="How should I address you?" value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} required />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} required />
              <label htmlFor="contact-message">A little about your opportunity</label>
              <textarea id="contact-message" name="message" rows="4" placeholder="What would you like to work on together?" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} required />
              <button className="form-submit" type="submit">Prepare a message <ArrowRight size={17} /></button>
              <p className="form-note">Your message stays in this browser. Add a professional email address to enable delivery.</p>
            </form>
          </div>
          {notice && <div className="form-notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={15} /></button></div>}
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon">OI<span>.</span></span><span className="wordmark-name">OLIVER CLEMENT ISONG<small>SOFTWARE ENGINEER · FRONTEND DEVELOPER</small></span></a>
          <p>Thoughtful software starts<br />with a willingness to learn.</p>
          <div className="footer-links"><a href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href={links.email}>Email <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} OLIVER CLEMENT ISONG</span><span>MADE WITH INTENTION <Code2 size={13} /></span><a href="#home">BACK TO TOP <ChevronDown className="back-to-top-icon" size={14} /></a></div>
      </footer>
      <article className="print-cv" aria-label="Printable CV">
        <p className="print-kicker">SOFTWARE ENGINEERING · FRONTEND DEVELOPMENT</p>
        <h1>Oliver Clement Isong</h1>
        <p className="print-summary">Software Engineering student at Babcock University interested in building practical web and mobile applications. Seeking internship opportunities and ways to contribute to collaborative engineering teams.</p>
        <div className="print-contact"><span>Ogun State, Nigeria</span><span>Email: add professional email</span><span>GitHub: add profile URL</span><span>LinkedIn: add profile URL</span></div>
        <h2>Education</h2>
        <h3>Bachelor’s Degree in Software Engineering</h3>
        <p>Babcock University · Ogun State, Nigeria · Graduation date to be added</p>
        <h2>Technical skills</h2>
        {skills.map(({ title, items }) => <p key={title}><strong>{title}:</strong> {items.join(", ")}</p>)}
        <h2>Selected projects</h2>
        {projects.map(({ title, description, technologies }) => <p key={title}><strong>{title}.</strong> {description} Technologies: {technologies.join(", ")}.</p>)}
        <h2>Professional interests</h2>
        <p>Software engineering internships, frontend development, mobile applications, collaborative product development, continuous learning.</p>
      </article>
    </div>
  );
}

export default App;
