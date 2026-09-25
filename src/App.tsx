import { useState } from 'react'
import './App.css'
import profilePhoto from './assets/images/profile-photo.jpg'
import heroVisual from './assets/hero.png'
import resultsAiModels from './assets/projects/results-ai-models.png'
import qcmVisual from './assets/projects/qcm.jpeg'
import mobileAppVisual from './assets/projects/mobile-app-gobez.png'
import deepLearningVisual from './assets/projects/deep-learning-model.jpg'
import captureLoginVisual from './assets/projects/capture-login-app.jpeg'
import captureAppVisual from './assets/projects/capture-app.jpeg'

type Project = {
  title: string
  type: 'Professional' | 'Academic'
  category: string
  problem: string
  role: string
  solution: string
  technologies: string[]
  outcome: string
  workflow: string[]
}

const navLinks = ['About', 'Experience', 'Solution Delivery', 'Projects', 'Engineering', 'Contact']

const stack = ['Python', 'Flask', 'FastAPI', 'React', 'Vue', 'SQL', 'Docker']

const professionalProjects: Project[] = [
  {
    title: 'Enterprise Document Management & Digitalization',
    type: 'Professional',
    category: 'Enterprise / Document Management / Full-Stack',
    problem: 'A client needed a structured digital document workflow, including migration from an older process to a centralized, maintainable platform.',
    role: 'Solution lead and full-stack contributor',
    solution: 'I worked across requirements gathering, technical design, backend and frontend development, migration support, testing and adoption training to deliver the solution end to end.',
    technologies: ['Python', 'Flask', 'Vue', 'MySQL', 'OCR', 'SFTP', 'LDAP'],
    outcome: 'More than 11,000 documents were migrated, and the client reached approximately 12,000 documents one week after training.',
    workflow: ['Legacy process', 'Requirements analysis', 'Solution design', 'Migration', 'Training', 'Production'],
  },
  {
    title: 'Intelligent Document Capture',
    type: 'Professional',
    category: 'Full-Stack / OCR / Document Capture',
    problem: 'The workflow required capture, OCR, metadata extraction, MRZ recognition and document processing in a practical business environment.',
    role: 'Backend, frontend and integration contributor',
    solution: 'I contributed to the platform across capture workflows, backend services, frontend interfaces, OCR integration and deployment support for document processing operations.',
    technologies: ['Python', 'Flask', 'Vue 3', 'Vite', 'Pinia', 'Tailwind CSS', 'MySQL', 'JWT', 'PDF.js', 'OCR'],
    outcome: 'The platform supported document scanning, processing and workflow handling in a way that aligned with operational needs and enterprise delivery constraints.',
    workflow: ['Scan', 'Batch processing', 'OCR / MRZ', 'Metadata', 'Workflow', 'Delivery'],
  },
  {
    title: 'Secure PDF Redaction',
    type: 'Professional',
    category: 'Document Security / PDF Processing',
    problem: 'Sensitive content had to be removed permanently from PDF documents while preserving usability of the final output.',
    role: 'Solution and implementation contributor',
    solution: 'I worked on the redaction workflow to ensure sensitive areas were sanitized in a way that supported permanent document protection rather than simple visual masking.',
    technologies: ['Python', 'PDF processing', 'Document security', 'Workflow automation'],
    outcome: 'The solution addressed a real confidentiality requirement by focusing on secure, non-reversible redaction.',
    workflow: ['Original PDF', 'Sensitive zones', 'Redaction', 'Sanitized PDF'],
  },
  {
    title: 'Automated QCM Processing',
    type: 'Professional',
    category: 'Document Automation / Processing',
    problem: 'Answer sheets needed to be processed digitally, checked and scored in a workflow that could be handled efficiently and consistently.',
    role: 'Solution and technical delivery contributor',
    solution: 'I helped shape the end-to-end OCR and assessment flow around scanning, recognition, correction and reporting while keeping the business process aligned with operational needs.',
    technologies: ['Python', 'OCR', 'Image processing', 'Automation'],
    outcome: 'The project demonstrates how document processing can be used beyond capture to support scoring and structured operational workflows.',
    workflow: ['Exam config', 'Answer sheets', 'Scanning', 'Recognition', 'Correction', 'Results'],
  },
  {
    title: 'Standalone Enterprise Application',
    type: 'Professional',
    category: 'Software Engineering / Deployment',
    problem: 'A web-based enterprise application needed to be packaged for local desktop execution without compromising the backend and user experience.',
    role: 'Engineer and technical decision-maker',
    solution: 'I worked on the architecture and packaging approach around local backend execution, embedded frontend delivery and deployment constraints for a client environment.',
    technologies: ['Python', 'Flask', 'SQLite', 'pywebview', 'Packaging', 'Windows executable'],
    outcome: 'The result was a robust deployment strategy for a desktop-oriented application in a constrained local environment.',
    workflow: ['Frontend build', 'Embedded WebView', 'Local backend', 'Local database', 'Deployment'],
  },
]

const academicProjects: Project[] = [
  {
    title: 'AI & Computer Vision',
    type: 'Academic',
    category: 'AI / Computer Vision / Academic Project',
    problem: 'The objective was to recognize human activities from video sequences using deep learning architectures.',
    role: 'Research and model development contributor',
    solution: 'I worked with video-based temporal modeling using CNN and deep learning workflows to classify activities from sequential data.',
    technologies: ['Python', 'Computer Vision', 'CNN', '3D CNN', 'CNN-GRU'],
    outcome: 'This project reflects research-oriented work in video understanding and deep learning model design.',
    workflow: ['Video', 'Frame processing', 'CNN / 3D CNN', 'Temporal modeling', 'Classification'],
  },
  {
    title: 'Video Surveillance AI',
    type: 'Academic',
    category: 'AI / Computer Vision / Academic Project',
    problem: 'The task involved classifying activity patterns in a large surveillance video dataset using temporal modeling.',
    role: 'Research and implementation contributor',
    solution: 'I worked with deep learning architectures designed for temporal modeling and video analysis under an academic project context.',
    technologies: ['Python', 'Computer Vision', '3D CNN', 'Temporal modeling', 'Deep learning'],
    outcome: 'The project reported approximately 91% in the evaluated academic setting, which is specific to that project context and not a general real-world benchmark.',
    workflow: ['Dataset', 'Temporal processing', '3D CNN', 'Model evaluation'],
  },
  {
    title: 'GIS / Recommendation System',
    type: 'Academic',
    category: 'Academic Project / Software Engineering',
    problem: 'A student project aimed to combine GIS and recommendation logic for reservation-related support and decision making.',
    role: 'Academic project contributor',
    solution: 'I explored the integration of geographic data with recommendation-oriented logic in a learning-focused application design.',
    technologies: ['GIS', 'Recommendation systems', 'Software engineering'],
    outcome: 'This is an academic project and should be considered as learning-oriented work rather than recent professional delivery.',
    workflow: ['GIS model', 'Data logic', 'Recommendation', 'Decision support'],
  },
]

const impactStats = [
  { value: '11K+', label: 'documents migrated' },
  { value: '12K', label: 'documents reached after training' },
  { value: '5K+', label: 'videos involved in academic computer vision work' },
  { value: '4+ years', label: 'professional software engineering experience' },
]

const architectureCards = [
  { title: 'Web application', nodes: ['Frontend', 'API', 'Backend', 'Database'] },
  { title: 'Document processing', nodes: ['Capture', 'OCR / processing', 'Metadata', 'Storage', 'Search / workflow'] },
  { title: 'Enterprise delivery', nodes: ['Requirements', 'Architecture', 'Development', 'Integration', 'Testing', 'Deployment', 'Training'] },
]

const flowSteps = [
  { title: 'Understand', text: 'Business requirements, workshops and functional analysis.' },
  { title: 'Design', text: 'Architecture, data model and technical approach.' },
  { title: 'Build', text: 'Backend, frontend and integrations.' },
  { title: 'Configure', text: 'Solution parameterization and environment configuration.' },
  { title: 'Integrate', text: 'External systems, scanners, OCR, authentication and infrastructure.' },
  { title: 'Validate', text: 'Testing, recette, corrections and client validation.' },
  { title: 'Migrate', text: 'Data and document migration from existing environments.' },
  { title: 'Deploy', text: 'Installation, configuration and production deployment.' },
  { title: 'Train', text: 'User training and documentation.' },
  { title: 'Improve', text: 'Support, feedback and continuous improvement.' },
]

const skillSections = [
  { title: 'Backend', items: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'JWT', 'SQLAlchemy'] },
  { title: 'Frontend', items: ['React', 'Vue', 'Vue 3', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite', 'Pinia'] },
  { title: 'Database', items: ['MySQL', 'PostgreSQL', 'SQLite', 'SQL'] },
  { title: 'DevOps', items: ['Docker', 'Nginx', 'Git', 'GitLab', 'CI/CD'] },
  { title: 'Document Management / Processing', items: ['GED / ECM', 'OCR', 'MRZ', 'PDF processing', 'Scanning', 'SFTP', 'LDAP', 'Document migration', 'Digitalization'] },
  { title: 'AI / Computer Vision', items: ['CNN', '3D CNN', 'CNN-GRU', 'Computer Vision', 'OCR'] },
  { title: 'Solution Delivery', items: ['Requirements analysis', 'AMOA', 'Workshops', 'Solution configuration', 'Integration', 'Testing / recette', 'Migration', 'Deployment', 'User training', 'Client demonstrations'] },
]

const activityList = [
  { title: 'JunctionX Algiers / Yassir Challenge', detail: '1st place' },
  { title: 'Web Summit Lisbon', detail: 'Volunteer' },
]

const projectVisuals: Record<string, { path: string; label: string; image: string }> = {
  'Enterprise Document Management & Digitalization': {
    path: '/assets/projects/document-management.jpg',
    label: 'Existing capture application visual',
    image: captureAppVisual,
  },
  'Intelligent Document Capture': {
    path: '/assets/projects/document-capture.jpg',
    label: 'Existing capture login visual',
    image: captureLoginVisual,
  },
  'Secure PDF Redaction': {
    path: '/assets/projects/pdf-redaction.jpg',
    label: 'Existing technical visual; replace with a redaction visual when available',
    image: heroVisual,
  },
  'Automated QCM Processing': {
    path: '/assets/projects/qcm.jpg',
    label: 'QCM visual',
    image: qcmVisual,
  },
  'Standalone Enterprise Application': {
    path: '/assets/projects/standalone.jpg',
    label: 'Existing application visual',
    image: mobileAppVisual,
  },
  'AI & Computer Vision': {
    path: '/assets/projects/activity-recognition.jpg',
    label: 'Deep learning model visual',
    image: deepLearningVisual,
  },
  'Video Surveillance AI': {
    path: '/assets/projects/video-surveillance.jpg',
    label: 'AI model results visual',
    image: resultsAiModels,
  },
  'GIS / Recommendation System': {
    path: '/assets/projects/activity-recognition.jpg',
    label: 'Existing technical visual',
    image: heroVisual,
  },
}

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Meriem Bendjoudi home">MERIEM BENDJOUDI</a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navLinks.map((item) => (
                <a key={item} href={item === 'Solution Delivery' ? '#solution-delivery' : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a className="nav-cta" href="/cv/Meriem-Bendjoudi-CV.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software Engineer</p>
              <h1>Building software.<br />Delivering solutions.</h1>
              <p className="supporting-line">
                Full-Stack Developer &amp; Solution / Project Lead specialized in Python, enterprise applications, document management and end-to-end solution delivery.
              </p>
              <p className="hero-detail">From requirements and configuration to deployment, migration and user training.</p>

              <div className="cta-row">
                <a className="primary-btn" href="#projects">View My Work</a>
                <a className="secondary-btn" href="/cv/Meriem-Bendjoudi-CV.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </div>

              <div className="stack-row" aria-label="Main technology stack">
                {stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-label="Profile photo placeholder and technical workflow visual">
              <div className="portrait-placeholder">
                <div className="portrait-frame" role="img" aria-label="Portrait professionnel de Meriem Bendjoudi">
                  <img src={profilePhoto} alt="Portrait professionnel de Meriem Bendjoudi" />
                </div>
              </div>
              <div className="visual-card">
                <div className="panel-header">
                  <span className="dot red" />
                  <span className="dot amber" />
                  <span className="dot green" />
                </div>

                <div className="terminal-body">
                  <div className="terminal-line"><span className="prompt">$</span> requirements analysis</div>
                  <div className="terminal-line"><span className="prompt">$</span> software design</div>
                  <div className="terminal-line"><span className="prompt">$</span> deploy &amp; support</div>

                  <div className="mesh-grid">
                    <span>Frontend</span>
                    <span>API</span>
                    <span>DB</span>
                    <span>OCR</span>
                    <span>Workflow</span>
                    <span>Deploy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-head">
            <p className="eyebrow">About</p>
            <h2>From software development to solution delivery.</h2>
          </div>

          <div className="container about-grid">
            <div className="about-copy">
              <p>
                Software engineering with a strong solution delivery mindset: building backend and full-stack applications while keeping business requirements,
                enterprise workflows and operational use in view.
              </p>
              <p>
                The work spans requirements, workshops, configuration, development, integration, testing, migration, deployment, training and post-delivery improvement.
              </p>
            </div>

            <div className="about-pills">
              <div className="pill-group">
                <h3>Engineering</h3>
                <ul>
                  <li>Backend and frontend development</li>
                  <li>REST APIs and enterprise applications</li>
                  <li>Database integration</li>
                  <li>Document processing</li>
                  <li>Application evolution</li>
                </ul>
              </div>

              <div className="pill-group">
                <h3>Solution</h3>
                <ul>
                  <li>Requirements and workshops</li>
                  <li>Solution configuration</li>
                  <li>System integration</li>
                  <li>Enterprise document management</li>
                  <li>Data and document migration</li>
                  <li>Operational handover</li>
                </ul>
              </div>

              <div className="pill-group">
                <h3>Project delivery</h3>
                <ul>
                  <li>Functional and technical specifications</li>
                  <li>Testing and acceptance</li>
                  <li>Deployment and rollout</li>
                  <li>User training</li>
                  <li>Client demonstrations</li>
                  <li>Post-deployment support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section muted-section">
          <div className="container section-head">
            <p className="eyebrow">Experience</p>
            <h2>Enterprise software engineering and solution ownership</h2>
          </div>

          <div className="container timeline">
            <article className="timeline-item">
              <div className="timeline-meta">
                <span className="company">Systhen Algérie / DTI</span>
                <span className="role">Cheffe de projet Solution / Full-Stack Developer</span>
                <span className="period">May 2022 – Present</span>
              </div>

              <div className="timeline-content">
                <p>
                  End-to-end delivery of enterprise software and document management solutions, combining development, solution configuration,
                  integration, deployment and client-facing delivery.
                </p>
                <ul>
                  <li>Backend, frontend, REST API and enterprise application development.</li>
                  <li>Requirements analysis, AMOA, workshops and functional / technical specifications.</li>
                  <li>GED / ECM workflows, digitalization, metadata, indexing and document migration.</li>
                  <li>Solution configuration, technical setup, integration, testing and production rollout.</li>
                  <li>Client demonstrations, acceptance and validation, user training and post-delivery follow-up.</li>
                </ul>
                <p className="confidential-note">
                  Professional projects are presented in an anonymized format. Proprietary source code, client information and confidential implementation details are intentionally excluded.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="solution-delivery" className="section delivery-section">
          <div className="container section-head">
            <p className="eyebrow">Solution Delivery</p>
            <h2>Enterprise solutions delivered from requirements to operational use.</h2>
            <p className="section-subtitle">I work across the full lifecycle: understanding the need, building the software, configuring the solution and helping users adopt it.</p>
          </div>

          <div className="container delivery-grid">
            {flowSteps.map((step, index) => (
              <div key={step.title} className="delivery-step">
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="container delivery-dimensions">
            <div className="dimension-card">
              <span className="eyebrow">Build</span>
              <p>Backend, frontend, APIs and enterprise applications.</p>
            </div>
            <div className="dimension-card">
              <span className="eyebrow">Deliver</span>
              <p>Configuration, integration, deployment, migration and testing.</p>
            </div>
            <div className="dimension-card">
              <span className="eyebrow">Enable</span>
              <p>Client presentations, training, documentation and adoption.</p>
            </div>
          </div>

          <div className="container flagship-case">
            <div className="flagship-copy">
              <p className="eyebrow">Flagship anonymized case study</p>
              <h3>Enterprise Document Management &amp; GED Delivery</h3>
              <p>
                An enterprise document management and digitalization solution requiring configuration, integration, deployment, document migration and user onboarding.
              </p>
              <div className="case-block">
                <span>Contribution</span>
                <p>Contributed to solution presentation, requirements analysis, configuration, integration, validation, deployment, document migration, user training and client coordination.</p>
              </div>
              <div className="ged-capabilities">
                <span>Capture</span><span>Classification &amp; metadata</span><span>Storage</span><span>Search</span><span>Workflow</span><span>Migration</span><span>Delivery</span>
              </div>
            </div>
            <div className="flagship-proof">
              <div className="project-media" aria-label="GED project visual placeholder">
                <strong></strong>
              </div>
              <div className="flagship-metrics">
                <div><strong>11K+</strong><span>documents migrated</span></div>
                <div><strong>~12K</strong><span>documents reached one week after training</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container section-head split-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Selected Case Studies</h2>
              <p className="section-subtitle">From business requirements to production-ready solutions.</p>
            </div>
          </div>

          <div className="container project-grid">
            {professionalProjects.map((project) => (
              <article
                key={project.title}
                className="project-card"
                tabIndex={0}
                role="button"
                onClick={() => setActiveProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setActiveProject(project)
                  }
                }}
              >
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <span className="project-tag">{project.category}</span>
                </div>

                <div className="project-media" aria-label={`${project.title} visual placeholder`}>
                  <img src={projectVisuals[project.title].image} alt={`${project.title} visual`} />
                  <strong>{projectVisuals[project.title].label}</strong>
                </div>

                <h3>{project.title}</h3>

                <div className="case-block">
                  <span>Problem</span>
                  <p>{project.problem}</p>
                </div>

                <div className="case-block">
                  <span>Role</span>
                  <p>{project.role}</p>
                </div>

                <div className="case-block">
                  <span>Solution</span>
                  <p>{project.solution}</p>
                </div>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="case-block outcome-block">
                  <span>Outcome</span>
                  <p>{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted-section">
          <div className="container section-head">
            <p className="eyebrow">Academic work</p>
            <h2>Research and learning-oriented projects</h2>
          </div>

          <div className="container project-grid academic-grid">
            {academicProjects.map((project) => (
              <article
                key={project.title}
                className="project-card"
                tabIndex={0}
                role="button"
                onClick={() => setActiveProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setActiveProject(project)
                  }
                }}
              >
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <span className="project-tag">{project.category}</span>
                </div>

                <div className="project-media" aria-label={`${project.title} visual placeholder`}>
                  <img src={projectVisuals[project.title].image} alt={`${project.title} visual`} />
                  <strong>{projectVisuals[project.title].label}</strong>
                </div>

                <h3>{project.title}</h3>

                <div className="case-block">
                  <span>Problem</span>
                  <p>{project.problem}</p>
                </div>

                <div className="case-block">
                  <span>Role</span>
                  <p>{project.role}</p>
                </div>

                <div className="case-block">
                  <span>Solution</span>
                  <p>{project.solution}</p>
                </div>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="case-block outcome-block">
                  <span>Outcome</span>
                  <p>{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container section-head">
            <p className="eyebrow">Impact</p>
            <h2>Verified project outcomes</h2>
          </div>

          <div className="container impact-grid">
            {impactStats.map((stat) => (
              <div key={stat.label} className="impact-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="engineering" className="section muted-section">
          <div className="container section-head">
            <p className="eyebrow">From requirement to production</p>
            <h2>Engineering Behind the Solutions</h2>
          </div>

          <div className="container flow-grid">
            {flowSteps.map((step, index) => (
              <div key={step.title} className="flow-item">
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="container section-head architecture-head">
            <p className="eyebrow">Architecture</p>
            <h2>Abstract engineering views</h2>
          </div>

          <div className="container architecture-grid">
            {architectureCards.map((card) => (
              <div key={card.title} className="architecture-card">
                <h3>{card.title}</h3>
                <div className="diagram-flow">
                  {card.nodes.map((node, index) => (
                    <div key={node} className="diagram-node-wrap">
                      <span className="diagram-node">{node}</span>
                      {index < card.nodes.length - 1 && <span className="diagram-arrow">↓</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container section-head">
            <p className="eyebrow">Skills</p>
            <h2>Technology and delivery capability</h2>
          </div>

          <div className="container skills-grid">
            {skillSections.map((group) => (
              <div key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="tag-group">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section muted-section">
          <div className="container education-grid">
            <div className="edu-card">
              <p className="eyebrow">Education</p>
              <h3>Master&apos;s Degree — Intelligent Computer Systems / Systèmes Informatiques Intelligents</h3>
              <span>USTHB</span>
              <small>2019 – 2021</small>
            </div>

            <div className="edu-card">
              <p className="eyebrow">Education</p>
              <h3>Bachelor&apos;s Degree — Information Systems and Software Engineering / ISIL</h3>
              <span>USTHB</span>
              <small>2016 – 2019</small>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-head">
            <p className="eyebrow">Activities</p>
            <h2>Hackathons and participation</h2>
          </div>

          <div className="container activity-grid">
            {activityList.map((item) => (
              <div key={item.title} className="activity-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section cv-section">
          <div className="container cv-panel">
            <div>
              <p className="eyebrow">Career</p>
              <h2>Looking for my next technical challenge?</h2>
            </div>

            <p>
              Open to opportunities in Software Engineering, Backend Development, Full-Stack Development, Solution Engineering and Technical Project Delivery.
            </p>

            <a className="primary-btn" href="/cv/Meriem-Bendjoudi-CV.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container section-head">
            <p className="eyebrow">Personal &amp; Public Work</p>
            <h2>Public code and private delivery</h2>
          </div>

          <div className="container public-work-panel">
            <p>
              Some professional projects cannot be shared publicly because they are proprietary. Public repositories therefore represent personal, academic or intentionally shareable work.
            </p>
            <a className="secondary-btn" href="https://github.com/Meriemeirem" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build and deliver something useful.</h2>
              <ul className="contact-list">
                <li><strong>Email:</strong> <a href="mailto:bendjoudimer@gmal.com">bendjoudimer@gmal.com</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bendjoudi-meriem/" target="_blank" rel="noreferrer">Meriem Bendjoudi</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/Meriemeirem" target="_blank" rel="noreferrer">Meriemeirem</a></li>
              </ul>
            </div>

            <form className="contact-form">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="name@example.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="Tell me about your project or opportunity." />
              </label>
              <button type="button" className="primary-btn form-btn">Contact me</button>
              <p className="form-note">This form is ready to be connected to a backend or email service later.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 Meriem Bendjoudi</p>
          <p>Professional projects are presented in an anonymized format. Proprietary source code, client information and confidential implementation details are intentionally excluded.</p>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close case study" onClick={() => setActiveProject(null)}>
              ×
            </button>

            <p className="eyebrow">{activeProject.type} project</p>
            <h3>{activeProject.title}</h3>
            <p className="modal-summary">{activeProject.category}</p>

            <div className="modal-grid">
              <div>
                <h4>Problem</h4>
                <p>{activeProject.problem}</p>
              </div>
              <div>
                <h4>Role</h4>
                <p>{activeProject.role}</p>
              </div>
              <div>
                <h4>Solution</h4>
                <p>{activeProject.solution}</p>
              </div>
              <div>
                <h4>Outcome</h4>
                <p>{activeProject.outcome}</p>
              </div>
            </div>

            <div className="modal-tech">
              {activeProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="modal-diagram">
              {activeProject.workflow.map((step, index) => (
                <div key={step} className="modal-step">
                  <span>{step}</span>
                  {index < activeProject.workflow.length - 1 && <span className="modal-arrow">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
