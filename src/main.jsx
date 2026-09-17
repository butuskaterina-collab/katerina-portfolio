import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useTransform } from 'framer-motion'
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

function App() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 160])

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <>
    <div className="cursor" />
    <div className="grain" />
    <header className="nav">
      <a href="#top" className="brand">KATERINA<br />BUTUSOVA</a>
      <span>COMMUNICATION DESIGN<br />/ ART DIRECTION</span>
      <a href="#contact">CONTACT ↗</a>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-meta">01—26 / SAINT PETERSBURG / WORLDWIDE</div>
        <div className="hero-corner">SELECTED<br />WORKS / 29</div>
        <motion.div className="orbit" style={{ rotate }} />
        <div className="hero-title">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .8 }}>Katerina</motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .9, delay: .08 }} className="indent"><i>Butusova</i></motion.div>
        </div>
        <div className="hero-sticker">ROUGH<br />×<br />TENDER</div>
        <div className="hero-mark">K / B</div>
        <div className="hero-bottom">
          <p>Communication designer working across visual identity, moving image, digital experiences and visual research.</p>
          <span>SCROLL ↓</span>
        </div>
      </section>

      <div className="ticker"><span>DESIGN</span><span>IMAGE</span><span>RESEARCH</span><span>ORDER × ACCIDENT</span><span>DESIGN</span><span>IMAGE</span><span>RESEARCH</span></div>

      <section className="section works" id="works">
        <div className="section-head"><div className="section-label">SELECTED WORKS / 01</div><div className="section-count">06 / 29</div></div>
        <div className="works-list">
          {works.map(([n, title, meta, type], i) => <motion.article key={title} className={`work ${type}`} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ delay: i * .04 }}>
            <div className="work-no">{n}</div>
            <div className="work-visual"><div className={`abstract a-${type}`} /><span>{type.toUpperCase()}</span><em>↗</em></div>
            <div className="work-title">{title}</div>
            <div className="work-meta">{meta}</div>
          </motion.article>)}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-grid" />
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
        <div className="contact-grid" />
        <div className="contact-top">LET'S MAKE<br /><i>SOMETHING</i><br />WORTH<br />LOOKING AT.</div>
        <div className="contact-orbit">↗</div>
        <a className="email" href="mailto:hello@katerinabutusova.com">hello@katerinabutusova.com ↗</a>
        <a className="portfolio" href="https://disk.yandex.ru/i/HBSl3l6XHVjLeA" target="_blank" rel="noreferrer">PORTFOLIO ↗</a>
        <div className="contact-foot">SAINT PETERSBURG / WORLDWIDE<br />© 2026 KATERINA BUTUSOVA</div>
      </section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
