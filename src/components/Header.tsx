import logoSvg from '../assets/icons/logo.svg'

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={logoSvg} alt="Logo" style={{ width: '100%', height: '100%' }} />
      </div>

      <nav className="header-nav">
        {['about', 'work', 'contact'].map((item) => (
          <div key={item} className="nav-item body-desc" onClick={() => scrollTo(item)}>
            <span className="nav-text" style={{ color: 'var(--color-muted)' }}>
              {item}
            </span>
            <span className="nav-text-hover">{item}</span>
          </div>
        ))}
      </nav>
    </header>
  )
}
