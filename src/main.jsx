import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const works = [
  ['01', 'Аура повседневного', 'visual research / motion'],
  ['02', 'qayaq', 'identity / cultural research'],
  ['03', 'Noire Dentelle', 'art direction / image'],
  ['04', 'it talks', 'communication / motion'],
  ['05', 'A24 / Film & Data', 'data visualization / cinema'],
]

function Clock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const time = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now)
  const date = new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(now)
  return <div className="hero-clock"><span>{time}</span><span>{date}</span></div>
}

function Nav() {
  return <header className="site-nav">
    <div className="nav-left">
      <a href="/" className="nav-button">ru</a>
      <span>/</span>
      <a href="/eng" className="nav-button">eng</a>
    </div>
    <nav className="nav-right">
      <a href="/projects">projects</a>
      <a href="/about">about</a>
      <a href="/cv">cv</a>
      <a href="/contact">contact</a>
    </nav>
  </header>
}

function Page({ children, className = '' }) {
  return <><Nav /><main className={`page ${className}`}>{children}</main></>
}

function Home() {
  return <Page className="home">
    <section className="hero">
      <div className="hero-texture" aria-hidden="true" />
      <div className="hero-name" aria-label="Katerina Butusova" />
      <div className="hero-intro">
        <strong>Katerina Butusova</strong>
        <span>Communication designer working across visual identity,</span>
        <span>moving image, digital experiences and visual research.</span>
        <span className="hero-origin">st. 2004 / saint petersburg / worldwide</span>
      </div>
      <div className="hero-coordinates">
        <span>62.0311° с.ш., 129.7229° в.д.</span>
        <span>59°57′ с.ш., 30°19′ в.д.</span>
      </div>
      <Clock />
    </section>
  </Page>
}

function Projects() {
  return <Page className="inner-page projects-page">
    <div className="page-kicker">SELECTED PROJECTS / 2026</div>
    <div className="projects-title">WORKS</div>
    <div className="projects-list">
      {works.map(([n, title, meta]) => <a className="project-row" href="#" key={title}>
        <span>{n}</span>
        <strong>{title}</strong>
        <small>{meta}</small>
        <i>↗</i>
      </a>)}
    </div>
  </Page>
}

function About() {
  return <Page className="inner-page about-page">
    <div className="page-kicker">ABOUT / 01</div>
    <div className="about-statement">I BUILD<br /><em>IMAGES</em><br />WITH A<br /><span>SYSTEM.</span></div>
    <div className="about-copy">Communication designer working across visual identity, moving image, digital experiences and visual research.</div>
  </Page>
}

function CV() {
  return <Page className="inner-page cv-page">
    <div className="page-kicker">CV / 02</div>
    <div className="cv-layout">
      <div className="cv-name">KATERINA<br /><em>BUTUSOVA</em></div>
      <div className="cv-column">
        <h3>PROFILE</h3>
        <p>Communication designer / art direction / visual research</p>
        <h3>EDUCATION</h3>
        <p>HSE Art & Design School<br />Communication Design<br />Bachelor's degree</p>
      </div>
      <div className="cv-column">
        <h3>EXPERIENCE</h3>
        <p>Art-Интроверт<br />freelance / studio projects<br />branding / digital / motion</p>
      </div>
    </div>
  </Page>
}

function Contact() {
  return <Page className="inner-page contact-page">
    <div className="page-kicker">CONTACT / 03</div>
    <div className="contact-title">LET'S MAKE<br /><em>SOMETHING</em><br />WORTH<br />LOOKING AT.</div>
    <a className="contact-link" href="mailto:hello@katerinabutusova.com">hello@katerinabutusova.com ↗</a>
  </Page>
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/projects') return <Projects />
  if (path === '/about') return <About />
  if (path === '/cv') return <CV />
  if (path === '/contact') return <Contact />
  return <Home />
}

createRoot(document.getElementById('root')).render(<App />)
