import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const works = [
  ['01', 'Аура повседневного', 'visual research / motion', 'research'],
  ['02', 'Seidokan', 'identity / digital / diploma', 'identity'],
  ['03', 'qayaq', 'identity / cultural research', 'identity'],
  ['04', 'Noire Dentelle', 'art direction / image', 'image'],
  ['05', 'it talks', 'communication / motion', 'motion'],
  ['06', 'A24 / Film & Data', 'data visualization / cinema', 'research'],
]

const practice = [
  ['IDENTITY', 'visual systems', 'art direction', 'brand worlds'],
  ['MOTION', 'moving image', 'title sequences', 'music / narrative'],
  ['DIGITAL', 'web experiences', 'interactive concepts', 'creative coding'],
  ['RESEARCH', 'visual culture', 'archives', 'writing / books'],
]

function Clock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const time = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now)

  const date = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(now)

  return <div className="hero-clock"><span>{time}</span><span>{date}</span></div>
}

function App() {
  return <>
    <header className="hero-nav">
      <a href="#top" className="lang">ru / eng</a>
      <nav className="hero-links" aria-label="Main navigation">
        <a href="#works">projects</a>
        <a href="#about">about</a>
        <a href="#cv">cv</a>
        <a href="#contact">contact</a>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-texture" aria-hidden="true" />

        <div className="hero-name" aria-label="Katerina Butusova">
          <div>katerina</div>
          <div>butusova</div>
        </div>

        <div className="hero-intro">
          <strong>Katerina Butusova</strong>
          <span>Communication designer working across visual identity,</span>
          <span>moving image, digital experiences and visual research.</span>
          <span className="hero-origin">st. 2004 / saint petersburg / worldwide</span>
        </div>

        <div className="hero-coordinates" aria-label="Yakutsk and Saint Petersburg coordinates">
          <span>62.0311° с.ш., 129.7229° в.д.</span>
          <span>59°57′ с.ш., 30°19′ в.д.</span>
        </div>

        <Clock />
        <div className="hero-accelerate">click to accelerate</div>
      </section>

      <section className="section works" id="works">
        <div className="section-head"><div className="section-label">SELECTED WORKS / 01</div><div className="section-count">06 / 29</div></div>
        <div className="works-list">
          {works.map(([n, title, meta, type]) => <article key={title} className={`work ${type}`}>
            <div className="work-no">{n}</div>
            <div className="work-visual"><div className={`abstract a-${type}`} /><span>{type.toUpperCase()}</span><em>↗</em></div>
            <div className="work-title">{title}</div>
            <div className="work-meta">{meta}</div>
          </article>)}
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-small">HOW I WORK / 02</div>
        <div className="manifesto-big">I BUILD<br /><i>IMAGES</i><br />WITH A<br /><span>SYSTEM.</span></div>
        <div className="manifesto-note">not everything has to behave.</div>
        <div className="manifesto-side">FORM / RHYTHM / CONTEXT / TENSION</div>
      </section>

      <section className="section practice">
        <div className="section-head"><div className="section-label">PRACTICE / 03</div><div className="section-count">04 FIELDS</div></div>
        <div className="practice-grid">
          {practice.map(([title, ...items], i) => <div className={`practice-card card-${i}`} key={title}><span className="card-no">0{i + 1}</span><b>{title}</b>{items.map(item => <React.Fragment key={item}><br />{item}</React.Fragment>)}<span className="card-arrow">↗</span></div>)}
        </div>
      </section>

      <section className="section cv" id="cv">
        <div className="section-head"><div className="section-label">CV / 04</div><div className="section-count">ABOUT</div></div>
        <div className="cv-grid">
          <div className="cv-name">KATERINA<br /><i>BUTUSOVA</i></div>
          <div><p><b>COMMUNICATION DESIGNER<br />/ ART DIRECTOR</b></p><p>HSE ART & DESIGN SCHOOL<br />Communication Design<br />Bachelor's degree</p></div>
          <div><p><b>EXPERIENCE</b></p><p>Art-Интроверт<br />freelance / studio projects<br />branding / digital / motion</p></div>
        </div>
        <div className="cv-strip"><span>VISUAL IDENTITY</span><span>ART DIRECTION</span><span>MOTION</span><span>RESEARCH</span><span>DIGITAL</span></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top">LET'S MAKE<br /><i>SOMETHING</i><br />WORTH<br />LOOKING AT.</div>
        <a className="email" href="mailto:hello@katerinabutusova.com">hello@katerinabutusova.com ↗</a>
        <a className="portfolio" href="https://disk.yandex.ru/i/HBSl3l6XHVjLeA" target="_blank" rel="noreferrer">PORTFOLIO ↗</a>
        <div className="contact-foot">SAINT PETERSBURG / WORLDWIDE<br />© 2026 KATERINA BUTUSOVA</div>
      </section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
