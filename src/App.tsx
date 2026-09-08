import { useEffect, useState } from 'react'
import { translations, type Language } from './translations'

type IconName = 'arrow' | 'shield' | 'spark' | 'wallet' | 'link' | 'chart' | 'lock' | 'grid' | 'check'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    arrow: 'M5 12h14M13 6l6 6-6 6', shield: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z', spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8', wallet: 'M4 7h16v12H4zM4 7l2-3h12l2 3M15 13h5', link: 'M10 13a5 5 0 007.1.1l1.4-1.4a5 5 0 00-7.1-7.1L10.2 5.8M14 11a5 5 0 00-7.1-.1l-1.4 1.4a5 5 0 007.1 7.1l1.2-1.2', chart: 'M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-7', lock: 'M6 10h12v10H6zM8 10V7a4 4 0 018 0v3', grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z', check: 'M5 12l4 4L19 6',
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="icon"><path d={paths[name]} /></svg>
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('pay-nest-language') as Language) || 'en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const t = translations[language]
  const isArabic = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.title = isArabic ? 'Pay Nest | مدفوعات رقمية أكثر ذكاءً' : 'Pay Nest | Smarter digital payments'
    localStorage.setItem('pay-nest-language', language)
  }, [language, isArabic])

  const switchLanguage = (next: Language) => {
    setLanguage(next)
    setMenuOpen(false)
  }

  return <div className={isArabic ? 'site-shell rtl' : 'site-shell'}>
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Pay Nest home"><span className="brand-mark"><span /></span><span>pay<span>nest</span></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#home">{t.nav.home}</a><a href="#solutions">{t.nav.solutions}</a><a href="#how">{t.nav.how}</a><a href="#why">{t.nav.why}</a><a href="#security">{t.nav.security}</a><a href="#faq">{t.nav.faq}</a>
      </nav>
      <div className="nav-actions">
        <div className="language-switcher" aria-label="Language switcher"><button className={language === 'ar' ? 'active' : ''} onClick={() => switchLanguage('ar')}>العربية</button><span>|</span><button className={language === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>EN</button></div>
        <a className="button button-small button-dark" href="#contact">{t.nav.cta}<Icon name="arrow" /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </div>
      {menuOpen && <div className="mobile-nav"><a href="#home" onClick={() => setMenuOpen(false)}>{t.nav.home}</a><a href="#solutions" onClick={() => setMenuOpen(false)}>{t.nav.solutions}</a><a href="#how" onClick={() => setMenuOpen(false)}>{t.nav.how}</a><a href="#why" onClick={() => setMenuOpen(false)}>{t.nav.why}</a><a href="#security" onClick={() => setMenuOpen(false)}>{t.nav.security}</a><a href="#faq" onClick={() => setMenuOpen(false)}>{t.nav.faq}</a><div className="mobile-language"><span>{language === 'ar' ? 'اللغة' : 'Language'}</span><div className="language-switcher"><button className={language === 'ar' ? 'active' : ''} onClick={() => switchLanguage('ar')}>العربية</button><span>|</span><button className={language === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>EN</button></div></div></div>}
    </header>

    <main>
      <section className="hero section-grid" id="home"><div className="hero-copy"><p className="eyebrow">{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p className="hero-body">{t.hero.body}</p><div className="hero-actions"><a className="button button-primary" href="#contact">{t.hero.primary}<Icon name="arrow" /></a><a className="text-link" href="#solutions">{t.hero.secondary}<Icon name="arrow" /></a></div><div className="trusted"><div className="trusted-dots"><i /><i /><i /><i /></div><span>{t.hero.trusted}</span></div></div><div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-card art-card-main"><div className="card-top"><span className="mini-label">{t.dashboard.label}</span><span className="status-dot" /></div><div className="balance-label">{t.dashboard.balance}</div><strong>$128,450<span>.72</span></strong><div className="card-footer"><span>+18.6% <small>{t.dashboard.thisMonth}</small></span><span className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></span></div></div><div className="art-card art-card-float"><span className="float-icon"><Icon name="check" /></span><div><b>{t.dashboard.incoming}</b><strong>+$24,860</strong></div></div><div className="art-ring"><span>pay nest</span></div></div></section>

      <section className="stats"><div><strong>{t.stats.volume}</strong><span>{t.stats.volumeLabel}</span></div><div><strong>{t.stats.businesses}</strong><span>{t.stats.businessesLabel}</span></div><div><strong>{t.stats.uptime}</strong><span>{t.stats.uptimeLabel}</span></div></section>

      <section className="section solutions" id="solutions"><div className="section-heading"><div><p className="eyebrow">{t.solutions.eyebrow}</p><h2>{t.solutions.title}</h2></div><p>{t.solutions.body}</p></div><div className="solution-grid">{t.solutions.items.map((item, index) => <article className="solution-card" key={item.title}><div className="card-icon"><Icon name={(['wallet', 'chart', 'grid', 'link', 'spark', 'arrow'] as IconName[])[index]} /></div><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><a href="#contact" aria-label={`${item.title} ${t.nav.cta}`}><Icon name="arrow" /></a></article>)}</div></section>

      <section className="section how" id="how"><div className="section-heading centered"><p className="eyebrow">{t.how.eyebrow}</p><h2>{t.how.title}</h2><p>{t.how.body}</p></div><div className="steps">{t.how.steps.map((step, index) => <div className="step" key={step.number}><span className="step-number">{step.number}</span><div className="step-line" /><h3>{step.title}</h3><p>{step.body}</p>{index < 2 && <span className="step-arrow"><Icon name="arrow" /></span>}</div>)}</div></section>

      <section className="section why" id="why"><div className="why-visual"><div className="visual-grid" /><div className="security-seal"><Icon name="shield" /><span>pay nest</span></div><div className="visual-note"><Icon name="spark" /><span>{t.dashboard.settled}</span><strong>100%</strong></div></div><div className="why-copy"><p className="eyebrow">{t.why.eyebrow}</p><h2>{t.why.title}</h2><p>{t.why.body}</p><div className="feature-list">{t.why.items.map((item, index) => <div key={item.title}><span className="feature-icon"><Icon name={(['shield', 'spark', 'link', 'chart', 'grid', 'wallet'] as IconName[])[index]} /></span><span><b>{item.title}</b><small>{item.body}</small></span></div>)}</div></div></section>

      <section className="security section" id="security"><div className="security-copy"><p className="eyebrow">{t.security.eyebrow}</p><h2>{t.security.title}</h2><p>{t.security.body}</p></div><div className="security-list">{t.security.items.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><Icon name="check" /></div>)}</div></section>

      <section className="dashboard section"><div className="dashboard-header"><div><p className="eyebrow">{t.dashboard.label}</p><h2>{t.dashboard.volume}</h2></div><a className="text-link" href="#contact">{t.dashboard.view}<Icon name="arrow" /></a></div><div className="dashboard-body"><div className="dashboard-total"><span>{t.dashboard.volume}</span><strong>{t.dashboard.volumeValue}</strong><small>+24.8% <em>{t.dashboard.thisMonth}</em></small><div className="chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div></div><div className="dashboard-side"><div><span className="side-icon incoming"><Icon name="arrow" /></span><span><small>{t.dashboard.incoming}</small><b>$128,450</b></span></div><div><span className="side-icon outgoing"><Icon name="arrow" /></span><span><small>{t.dashboard.outgoing}</small><b>$44,160</b></span></div><div className="progress-row"><span>{t.dashboard.settled}</span><b>92%</b><div className="progress"><i /></div></div></div></div></section>

      <section className="cta section" id="contact"><div><p className="eyebrow">Pay Nest</p><h2>{t.cta.title}</h2><p>{t.cta.body}</p></div><div className="cta-actions"><a className="button button-light" href="mailto:hello@paynest.example">{t.cta.primary}<Icon name="arrow" /></a><a className="button button-outline" href="mailto:hello@paynest.example">{t.cta.secondary}</a></div></section>

      <section className="section faq" id="faq"><div className="section-heading"><div><p className="eyebrow">{t.faq.eyebrow}</p><h2>{t.faq.title}</h2></div></div><div className="faq-list">{t.faq.items.map((item, index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={item.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{item.question}</span><b>+</b></button>{openFaq === index && <p>{item.answer}</p>}</div>)}</div></section>
    </main>

    <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><span /></span><span>pay<span>nest</span></span></a><p>{t.footer.body}</p><a className="footer-email" href="mailto:hello@paynest.example">hello@paynest.example</a></div><FooterColumn title={t.footer.solutions} links={t.footer.links} /><FooterColumn title={t.footer.company} links={t.footer.companyLinks} /><FooterColumn title={t.footer.resources} links={t.footer.resourceLinks} /></div><div className="footer-bottom"><span>{t.footer.copyright}</span><span>Made for better movement</span></div></footer>
  </div>
}

function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div className="footer-column"><h4>{title}</h4>{links.map(link => <a href="#contact" key={link}>{link}</a>)}</div> }
