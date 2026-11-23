
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, Moon, Sun, X, Code2, GraduationCap, BriefcaseBusiness, Trophy,
  Sparkles, ExternalLink, CheckCircle2, Download, Layers3, HeartHandshake,
  BrainCircuit, ShoppingBag, Rocket, MonitorSmartphone, GitBranch, Terminal
} from 'lucide-react'
import './index.css'
import { useEffect, useState, useRef } from 'react'
const screenshotFiles = import.meta.glob(
  './Screenshots/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

const getScreenshots = (folder) => {
  return Object.entries(screenshotFiles)
    .filter(([path]) => path.startsWith(`./Screenshots/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, image]) => image)
}



const projects = [
  {
    number: '01',
    title: 'MRI Brain Tumor Detection',
    category: 'AI · Healthcare · React',
    description:
      'An AI-powered MRI analysis and management platform connecting patients, doctors, and administrators through one responsive experience.',
    details: [
      'Role-based patient, doctor, and admin interfaces',
      'MRI scan upload and AI prediction result integration',
      'Doctor review, recommendations, and patient case monitoring',
      'Authentication, verification, and password recovery flows'
    ],
    tags: ['React.js', 'JavaScript', 'REST APIs', 'AI Integration'],
    icon: BrainCircuit,
    tone: 'violet',
    github: '',
    demo: 'https://mri-brain-tumor-detection-kohl.vercel.app/',
    images: getScreenshots('MRI_Scan_detect')
  },
  {
    number: '02',
    title: 'Pet Care E-Commerce',
    category: 'E-Commerce · React',
    description:
      'A shopping experience for pet owners to discover animal food and pet products with intuitive browsing and account features.',
    details: [
      'Product search, filtering, and category navigation',
      'Authentication and account management',
      'Shopping cart, product management, and order tracking',
      'Responsive layouts focused on a seamless user experience'
    ],
    tags: ['React.js', 'JavaScript', 'CSS', 'E-Commerce'],
    icon: ShoppingBag,
    tone: 'pink',
    github: '',
    demo: '',
    images: getScreenshots('Pits')
  },
  {
    number: '03',
    title: 'NASA Space Apps Cairo',
    category: 'Hackathon · Web Development',
    description:
      'Collaborated with a team to build a complete, interactive web solution during the NASA Space Apps Cairo Hackathon and bootcamp.',
    details: [
      'Developed a professional responsive website',
      'Designed an administrative dashboard',
      'Contributed to brainstorming and idea validation',
      'Worked across system design and implementation under tight deadlines'
    ],
    tags: ['Web Development', 'Responsive UI', 'Teamwork', 'Admin Panel'],
    icon: Rocket,
    tone: 'blue',
    github: '',
    demo: 'https://nasa-admin-panal.vercel.app/',
    images: getScreenshots('Nasa_AdminPanel')
  }
]


const skills = [
  { title: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'], icon: MonitorSmartphone },
  { title: 'Programming', items: ['C++', 'Python', 'JavaScript'], icon: Terminal },
  { title: 'Core Computer Science', items: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving'], icon: BrainCircuit },
  { title: 'Tools & Workflow', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'REST APIs', 'Responsive Design'], icon: GitBranch },
]

const experience = [
  {
    role: 'Programming Instructor & Project Mentor',
    place: 'Digital Egypt Cubs Initiative (DECI)',
    date: '2026',
    description: 'Teaching programming and computational thinking to students aged 12–18, while mentoring teams through the development of competition projects.',
    points: ['Deliver interactive coding sessions and simplify technical concepts for different age groups.', 'Guide students from idea generation and planning through implementation and final submission.', 'Provide technical feedback, supervise progress, and help teams prepare demos and presentations.'],
    icon: HeartHandshake,
  },
  {
    role: 'Web Design Trainee',
    place: 'National Telecommunication Institute (NTI)',
    date: 'Jun 2025 — Nov 2025',
    description: 'Completed an intensive Web Design training program with a score of 90%.',
    points: ['Built responsive web pages and interactive interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js.', 'Applied UI/UX principles and frontend best practices.', 'Practiced API integration, debugging, Git/GitHub, and team-based development.'],
    icon: Code2,
  },
  {
    role: 'Frontend Trainee',
    place: 'IEEE',
    date: '2024 — 2025',
    description: 'Completed structured frontend development training and collaborated on mini projects.',
    points: ['Built responsive web pages using HTML, CSS, and JavaScript.', 'Applied UI/UX principles and collaborated with peers on technical tasks.'],
    icon: Layers3,
  },
]

const achievements = [
  { title: 'ICPC Participant', subtitle: '2023 & 2024 · Qualified in the second year', icon: Trophy },
  { title: 'Codeavour Judge', subtitle: '2024 — 2025 · Evaluated student programming projects', icon: CheckCircle2 },
  { title: 'NTI Web Design', subtitle: '90% training score · 2025', icon: GraduationCap },
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('nourhan-theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('nourhan-theme', theme)
  }, [theme])

  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setActiveProject(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">N<span>.</span></span>
          <span>NOURHAN<span className="brand-muted">.DEV</span></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="top-actions">
          <button className="theme-toggle" aria-label="Toggle color theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="mailto:nourhan.ttarek2004@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
          <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
              Building digital<br />experiences with <span className="gradient-text">purpose.</span>
            </motion.h1>
            <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }}>
              I'm <strong>Nourhan Tarek Ata</strong> — a Computer Science graduate and Frontend Developer specializing in React.js. I turn ideas into responsive, thoughtful, and user-friendly web experiences.
            </motion.p>
            <motion.div className="hero-buttons" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 }}>
              <a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button-secondary" href="mailto:nourhan.ttarek2004@gmail.com"><Mail size={16} /> Get in touch</a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
              <span><MapPin size={14} /> Benha, Egypt</span>
              <span className="meta-divider" />
              <span><GraduationCap size={15} /> B.Sc. Computer Science · 2026</span>
            </motion.div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .15 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>nourhan.jsx</span><span className="window-lock">✦</span></div>
              <div className="code-content">
                <div className="code-line"><span className="line-no">01</span><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</div>
                <div className="code-line indent"><span className="syntax-cyan">name</span>: <span className="syntax-green">'Nourhan'</span>,</div>
                <div className="code-line indent"><span className="syntax-cyan">role</span>: <span className="syntax-green">'Frontend Dev'</span>,</div>
                <div className="code-line indent"><span className="syntax-cyan">focus</span>: [</div>
                <div className="code-line indent2"><span className="syntax-green">'React'</span>, <span className="syntax-green">'UI/UX priciples'</span>,</div>
                <div className="code-line indent2"><span className="syntax-green">'Clean Code'</span></div>
                <div className="code-line indent">],</div>
                <div className="code-line">{'}'};</div>
                <div className="code-line spacer-line"><span className="line-no">09</span><span className="syntax-purple">const</span> <span className="syntax-blue">create</span> = () <span className="syntax-purple">=&gt;</span> <span className="syntax-pink">impact</span>();<span className="cursor">▍</span></div>
              </div>
              <div className="window-footer"><span><span className="footer-dot" /> Ready to build</span><span>UTF-8&nbsp;&nbsp; React</span></div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React.js</div>
            <div className="float-chip chip-ui"><Sparkles size={15} /> Thoughtful UI</div>
            <div className="hero-orb"><Code2 size={37} strokeWidth={1.3} /></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>CURIOUS BY NATURE</span><i /><span>CREATIVE IN APPROACH</span><i /><span>FOCUSED ON IMPACT</span><i /><span>ALWAYS LEARNING</span>
          </div>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid">
            <div className="about-main">
              <p className="about-statement">I enjoy turning complex problems into <span>simple, useful experiences.</span></p>
              <p className="body-copy">With a Computer Science background from Benha University, I bring together frontend development, problem-solving, and a strong interest in how people interact with technology. I enjoy building interfaces that feel clear, responsive, and purposeful.</p>
              <p className="body-copy">Beyond coding, I teach programming and mentor young learners through DECI — helping students move from an early idea to a working project. It has strengthened the way I communicate, collaborate, and approach technical challenges.</p>
              <a className="text-link" href="https://www.linkedin.com/in/nourhan-tarek-7a7b04294" target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-stats">
              <div className="stat-card"><span className="stat-number">3.64<span>/4</span></span><span className="stat-label">Graduation GPA</span><span className="stat-foot">Benha University · 2026</span></div>
              <div className="stat-card"><span className="stat-number">90<span>%</span></span><span className="stat-label">NTI Training Score</span><span className="stat-foot">Web Design Program</span></div>
              <div className="stat-card stat-wide"><span className="stat-icon"><HeartHandshake size={21} /></span><div><span className="stat-label">Beyond development</span><span className="stat-foot">Teaching · Mentoring · Teamwork</span></div><ArrowUpRight size={18} className="stat-arrow" /></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading"><span className="section-index">02 / TOOLKIT</span><h2>Skills I bring <span className="gradient-text">to the table.</span></h2><p className="heading-note">A mix of practical frontend tools and computer science fundamentals.</p></div>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon
              return <motion.div className="skill-card" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-count">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map(item => <span className="skill-tag" key={item}>{item}</span>)}</div>
              </motion.div>
            })}
          </div>
        </section>

        <section className="projects-section section-block" id="projects">
          <div className="section-wrap">
            <div className="section-heading heading-row"><div><span className="section-index">03 / SELECTED WORK</span><h2>Things I've <span className="gradient-text">worked on.</span></h2></div><span className="heading-side-note">A selection of projects<br />and collaborative work.</span></div>
            <div className="project-list">
              {projects.map((project, index) => {
                const Icon = project.icon
                return <motion.article className={`project-card ${project.tone}`} key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
                   
                   
                      <div className="project-visual">
                        <div className="visual-grid" />
                        <div className="visual-glow" />

                        <div className="visual-icon">
                          <Icon size={54} strokeWidth={1.15} />
                        </div>

                        <span className="visual-number">{project.number}</span>
                        <span className="visual-caption">SELECTED PROJECT</span>
                      </div>

                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list project-tags">{project.tags.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}</div>
                    <button className="project-link" onClick={() => setActiveProject(project)}>Explore project <ArrowUpRight size={16} /></button>
                  </div>
                </motion.article>
              })}
            </div>
            <p className="project-note"><Sparkles size={15} /> Project source-code and live-demo links can be added once the repositories and deployments are confirmed.</p>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><span className="section-index">04 / EXPERIENCE</span><h2>Growing through <span className="gradient-text">doing.</span></h2></div>
          <div className="experience-layout">
            <div className="timeline">
              {experience.map((item, index) => {
                const Icon = item.icon
                return <motion.div className="timeline-item" key={item.role} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
                  <div className="timeline-marker"><Icon size={17} /></div>
                  <div className="timeline-content">
                    <div className="timeline-top"><span className="timeline-date">{item.date}</span><span className="timeline-line" /></div>
                    <h3>{item.role}</h3><h4>{item.place}</h4><p>{item.description}</p>
                    <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
                  </div>
                </motion.div>
              })}
            </div>
            <aside className="achievement-panel">
              <span className="section-index">MILESTONES</span><h3>Small wins.<br /><span className="gradient-text">Big motivation.</span></h3>
              {achievements.map((item) => {
                const Icon = item.icon
                return <div className="achievement" key={item.title}><span className="achievement-icon"><Icon size={18} /></span><div><strong>{item.title}</strong><p>{item.subtitle}</p></div></div>
              })}
            </aside>
          </div>
        </section>

        <section className="education-section">
          <div className="section-wrap education-inner">
            <div><span className="section-index">05 / EDUCATION</span><h2>Built on a strong <span className="gradient-text">foundation.</span></h2></div>
            <div className="education-card"><span className="education-icon"><GraduationCap size={24} /></span><div><h3>Bachelor of Computer Science</h3><p>Faculty of Computers and Artificial Intelligence · Benha University</p><span className="education-meta">Graduated 2026 <i /> GPA 3.64 / 4.00</span></div><span className="education-year">2026</span></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <span className="section-index">06 / WHAT'S NEXT?</span>
          <div className="contact-content"><div><h2>Have a project<br />in <span className="gradient-text">mind?</span></h2><p>I'm always open to discussing new opportunities, creative ideas, and ways to build something meaningful.</p></div><a className="contact-email" href="mailto:nourhan.ttarek2004@gmail.com">Let's make it happen <ArrowUpRight size={20} /></a></div>
          <div className="contact-bottom"><a href="mailto:nourhan.ttarek2004@gmail.com"><Mail size={16} /> nourhan.ttarek2004@gmail.com</a><a href="https://www.linkedin.com/in/nourhan-tarek-7a7b04294" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ExternalLink size={13} /></a><a href="https://github.com/nourtarek2004" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ExternalLink size={13} /></a></div>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span>NOURHAN<span className="brand-muted">.DEV</span></span></a><span>Designed & built with care by Nourhan © 2026</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>

      <AnimatePresence>
        {activeProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}>
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }} onClick={event => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close project details" onClick={() => setActiveProject(null)}><X size={19} /></button>
            <span className="section-index">{activeProject.number} / PROJECT DETAILS</span>
            <h2 id="modal-title">{activeProject.title}</h2><p className="modal-description">{activeProject.description}</p>
            <h4>Key contributions</h4><ul className="modal-list">{activeProject.details.map(detail => <li key={detail}><CheckCircle2 size={16} />{detail}</li>)}</ul>
            {activeProject.images.length > 0 && (
                <div className="modal-gallery">
                  <h4>Project Screenshots</h4>

                  <div className="screenshot-scroll">
                    {activeProject.images.map((image, index) => (
                      <button
                        className="screenshot-item"
                        key={image}
                        onClick={() => setLightboxImage(image)}
                        aria-label={`View screenshot ${index + 1} full screen`}
                      >
                        <img
                          src={image}
                          alt={`${activeProject.title} screenshot ${index + 1}`}
                        />
                        <span>Click to expand</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            <div className="tag-list">{activeProject.tags.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}</div>

                <div className="modal-actions">
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}
                </div>

            <p className="modal-footnote">Add verified GitHub and live demo URLs to this project when ready.</p>
          </motion.div>
        </motion.div>}

        {lightboxImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image"
            >
              <X size={25} />
            </button>

            <img
              src={lightboxImage}
              alt="Full screen project screenshot"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

export default App
