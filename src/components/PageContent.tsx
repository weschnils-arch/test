import heroImg from '../assets/images/work.jpg'
import bannerImg from '../assets/images/banner-bottom.jpg'
import planetImg from '../assets/images/planet-1-1.png'
import michaelImg from '../assets/images/michael-glass.jpg'
import peterImg from '../assets/images/peter-smart.jpg'
import linhImg from '../assets/images/linh-le.jpg'
import textRing from '../assets/icons/ic-text-ring.svg'
import touchIcon from '../assets/icons/ic-touch.svg'

interface Props {
  variant: 'dark' | 'red'
}

function SplitChars({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <span key={i} className="char hero-char" style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function PageContent({ variant }: Props) {
  const isDark = variant === 'dark'
  const accentColor = isDark ? 'var(--color-accent)' : 'var(--color-bg)'
  const bgStyle = isDark
    ? { background: 'var(--color-bg)' }
    : { background: 'var(--color-accent)' }
  const textColor = isDark ? 'var(--color-text)' : 'var(--color-bg)'
  const mutedColor = isDark ? 'var(--color-muted)' : 'rgba(13,13,13,0.5)'
  const borderColor = isDark ? 'var(--color-border)' : 'rgba(13,13,13,0.15)'

  // Hero lines — "good" AND "shit" both in accent
  const heroLines = isDark
    ? [
        { text: 'MAKING', color: textColor },
        { text: 'GOOD', color: 'var(--color-accent)' },
        { text: 'SHIT', color: 'var(--color-accent)' },
        { text: 'SINCE', color: textColor },
        { text: '2009', color: textColor },
      ]
    : [
        { text: 'HIDING', color: 'var(--color-bg)' },
        { text: 'BAD', color: 'var(--color-bg)' },
        { text: 'SHIT', color: 'var(--color-bg)' },
        { text: 'SINCE', color: 'var(--color-bg)' },
        { text: '2009', color: 'var(--color-bg)' },
      ]

  // Section descriptions MUST be identical in both layers to maintain same heights
  const aboutText = { before: "I'm a ", highlight: 'selectively skilled', after: ' product designer with strong focus on producing high quality & impactful digital experience.' }
  const expText = { before: 'Over ', highlight: 'a decade', after: ' of experience in interactive design and working with some of the most talented people in the business' }
  const clientText = { before: 'I worked with some of the most ', highlight: 'innovative', after: ' industry leaders to help build their top-notch products' }

  // Skills — descriptions are the SAME for both layers
  const skills = [
    { title: '3D', desc: 'I can produce anything that my 16" laptop can render' },
    { title: 'VISUAL', desc: 'I search the internet for visual references and then combine them to create my own work.' },
    { title: 'MOTION', desc: 'I use fancy motion that makes my design more interesting that it actually is' },
    { title: 'PRODUCT', desc: 'I utilize common design best practices, test, and re-iterate until it works (hopefully).' },
    { title: 'TUTORIAL', desc: "I thought I'd make millions of $ from Youtube but I didn't" },
  ]

  const timeline = isDark
    ? [
        { year: 'NOW', role: 'Design Lead', company: 'Fantasy Interactive', alt: 'Self-lead Designer' },
        { year: '2016', role: 'Senior Product Designer', company: 'Interactive Labs', alt: 'Regular Web Designer' },
        { year: '2012', role: 'Art Director', company: 'DR Com Group', alt: 'Photoshop Doodler' },
        { year: '2009', role: 'Flash Designer', company: 'DR Com Group', alt: 'Jurassic Designer' },
      ]
    : [
        { year: 'NOW', role: 'Self-lead Designer', company: 'Fantasy Interactive', alt: 'Self-lead Designer' },
        { year: '2016', role: 'Regular Web Designer', company: 'Interactive Labs', alt: 'Regular Web Designer' },
        { year: '2012', role: 'Photoshop Doodler', company: 'DR Com Group', alt: 'Photoshop Doodler' },
        { year: '2009', role: 'Jurassic Designer', company: 'DR Com Group', alt: 'Jurassic Designer' },
      ]

  const clientNames: { name: string; desc: string }[] = [
    { name: 'FORD', desc: 'Working on the Next-Generation HMI Experience without no driving experience.' },
    { name: 'UFC', desc: 'Developed the Future of UFC Sports Ecosystem despite not being a sports fan.' },
    { name: 'LINCOLN', desc: 'Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.' },
    { name: 'ROYAL CARIBBEAN', desc: 'I was just one person on a massive team that created an entire Royal Caribbean eco-system.' },
    { name: 'SLEEPIQ', desc: 'Designed a 1M+ users product utilizing my best personal experience: sleeping.' },
    { name: 'NFL', desc: 'Explored the Future of Fantasy Football while being in a country where football means a total different sport.' },
  ]

  // Testimonials: use fixed min-height per item so different text lengths don't shift layout
  const testimonials = isDark
    ? [
        { quote: 'Minh is seriously the best and he never complains', author: 'Michael Glass', role: 'Group Design Director, Fantasy Interactive', img: michaelImg },
        { quote: 'This looks amazing. Great work!', author: 'Peter Smart', role: 'Head of Product, Fantasy Interactive', img: peterImg },
        { quote: "He's a beast. His skills are insane!", author: 'Linh Le', role: 'Project Manager, Interactive Labs', img: linhImg },
      ]
    : [
        { quote: "He's terrible, but it's his birthday so I'd say something nice", author: 'Michael Glass', role: 'Group Design Director, Fantasy Interactive', img: michaelImg },
        { quote: 'After countless rounds of feedback, you finally did it right', author: 'Peter Smart', role: 'Head of Product, Fantasy Interactive', img: peterImg },
        { quote: "I'm his wife, he made me say that", author: 'Linh Le', role: 'Project Manager, Interactive Labs', img: linhImg },
      ]

  // Motto: same line structure both layers to keep height identical
  const mottoLabel = isDark ? 'MY MOTTO' : 'MY MOTO'
  const mottoQuote = isDark ? '"GOOD DESIGN IS HONEST"' : '"NOT ALL HONEST DESIGN IS GOOD"'
  const mottoAuthor = isDark ? '— Dieter Rams' : '— Minh Pham'

  // Contact — red layer shows descriptions instead of names
  const contactLeft = isDark
    ? [
        { name: 'Dribbble', desc: '' },
        { name: 'Youtube', desc: '' },
        { name: 'Linkedin', desc: '' },
      ]
    : [
        { name: 'Fake works', desc: '' },
        { name: 'Random tutorials', desc: '' },
        { name: 'Serious me', desc: '' },
      ]

  const contactMiddle = isDark
    ? [
        { name: 'Instagram', desc: '' },
        { name: 'Facebook', desc: '' },
        { name: 'Behance', desc: '' },
      ]
    : [
        { name: 'Not Tiktok', desc: '' },
        { name: 'Mostly dog stories', desc: '' },
        { name: 'The Jurassic Park', desc: '' },
      ]

  const contactEmail = isDark
    ? { label: 'Email', value: 'minhpham.design@gmail.com' }
    : { label: '100% chance I read it', value: 'minhpham.design@gmail.com' }

  const contactPhone = isDark
    ? { label: 'Phone', value: '+84 366 138 837' }
    : { label: "90% chance I don't pickup", value: '+84 366 138 837' }

  return (
    <div style={bgStyle}>
      {/* ==================== HERO ==================== */}
      <section className="section section-hero" id={isDark ? 'hero' : undefined}>
        <div className="hero-bg">
          <img
            src={heroImg}
            alt=""
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              maxWidth: '700px',
              height: 'auto',
              objectFit: 'cover',
              opacity: isDark ? 0.4 : 0.3,
              filter: isDark ? 'grayscale(100%) brightness(0.5)' : 'grayscale(100%) brightness(0.3)',
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className="hero-label line-reveal" style={{ position: 'relative', zIndex: 2 }}>
          <span className="heading-sm hero-label-inner label-text" style={{ color: mutedColor, display: 'block' }}>
            MINH PHAM
          </span>
        </div>
        {/* Narrow column for hero text (~33% width) */}
        <div className="hero-text-col" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="heading-xl">
            {heroLines.map((line, i) => (
              <div key={i} className="hero-line" style={{ color: line.color }}>
                <SplitChars text={line.text} />
              </div>
            ))}
          </h1>
        </div>

        {/* Rotating play button */}
        <div style={{ position: 'relative', zIndex: 2, marginTop: '48px' }}>
          <div style={{ position: 'relative', width: '78px', height: '78px', cursor: 'pointer' }}>
            <img
              src={textRing}
              alt=""
              style={{ width: '100%', height: '100%', animation: 'spin 10s linear infinite' }}
            />
            <img
              src={touchIcon}
              alt="Play"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                filter: isDark ? 'none' : 'invert(1)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="section section-about content-offset" id={isDark ? 'about' : undefined}>
        <div className="scroll-reveal">
          <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
            ABOUT ME
          </p>
        </div>
        <div className="about-description scroll-reveal">
          <h2 className="heading-lg" style={{ color: textColor, maxWidth: '720px' }}>
            {aboutText.before}
            {aboutText.highlight && (
              <span style={{ color: accentColor }}>{aboutText.highlight}</span>
            )}
            {aboutText.after}
          </h2>
        </div>

        <div className="about-skills">
          <div className="scroll-reveal">
            <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
              WHAT I DO
            </p>
          </div>

          {skills.map((skill) => (
            <div key={skill.title} className="skill-row" style={{ borderColor }}>
              <h3 className="heading-xl skill-title" style={{ color: textColor }}>
                {skill.title}
              </h3>
              <p className="body-sub skill-desc" style={{ color: mutedColor }}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== EXPERIENCE ==================== */}
      <section className="section section-experience content-offset" id={isDark ? 'work' : undefined}>
        <div className="scroll-reveal">
          <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
            EXPERIENCE
          </p>
        </div>
        <div className="scroll-reveal" style={{ maxWidth: '720px' }}>
          <h2 className="heading-lg" style={{ color: textColor }}>
            {expText.before}
            {expText.highlight && (
              <span style={{ color: accentColor }}>{expText.highlight}</span>
            )}
            {expText.after}
          </h2>
        </div>

        <div className="timeline">
          <div className="scroll-reveal">
            <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
              HISTORY
            </p>
          </div>

          {timeline.map((item) => (
            <div key={item.year} className="timeline-row" style={{ borderColor }}>
              <span className="heading-md timeline-year" style={{ color: mutedColor }}>
                {item.year}
              </span>
              <div className="timeline-role-block">
                <span className="heading-md timeline-role" style={{ color: textColor, fontWeight: 700 }}>
                  <span className="timeline-role-text">{item.role}</span>
                  <span className="timeline-alt">{item.alt}</span>
                </span>
                <span className="body-sub timeline-company" style={{ color: mutedColor }}>
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CLIENTS ==================== */}
      <section className="section section-clients content-offset">
        <div className="scroll-reveal">
          <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
            CLIENTS
          </p>
        </div>
        <div className="clients-description scroll-reveal">
          <h2 className="heading-lg" style={{ color: textColor }}>
            {clientText.before}
            {clientText.highlight && (
              <span style={{ color: accentColor }}>{clientText.highlight}</span>
            )}
            {clientText.after}
          </h2>
        </div>

        <div className="clients-list" style={{ marginTop: '48px', position: 'relative' }}>
          <img
            src={planetImg}
            alt=""
            style={{
              position: 'absolute',
              right: '-10%',
              top: '-5%',
              width: '70%',
              maxWidth: '700px',
              opacity: isDark ? 0.5 : 0.25,
              filter: isDark ? 'grayscale(100%) brightness(0.5)' : 'grayscale(100%) brightness(0.2)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
            loading="lazy"
          />
          {clientNames.map(({ name, desc }) => (
            <div key={name} className="client-name" style={{ borderColor }}>
              <div className="client-name-inner">
                <span className="heading-xl client-title" style={{ color: textColor, position: 'relative', zIndex: 1 }}>
                  <div className="scroll-split">
                    {name.split('').map((char, i) => (
                      <span key={i} className="char" style={{ display: 'inline-block' }}>
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </div>
                </span>
                <span className="body-sub client-desc" style={{ color: mutedColor, position: 'relative', zIndex: 1 }}>
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="clients-dots">
          <span style={{ background: textColor }} />
          <span style={{ background: textColor }} />
          <span style={{ background: textColor }} />
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section section-testimonials content-offset">
        <div className="scroll-reveal">
          <p className="body-label" style={{ color: mutedColor, marginBottom: '48px' }}>
            WHAT THEY SAID
          </p>
        </div>

        <div className="testimonials-layout">
          <div className="testimonials-quotes">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item scroll-reveal">
                <div className="testimonial-quote-mark" style={{ color: accentColor }}>
                  &ldquo;
                </div>
                <h3 className="heading-lg testimonial-text" style={{ color: textColor }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </h3>
                <p className="body-sub" style={{ color: mutedColor, marginTop: '24px' }}>
                  <strong className="body-desc" style={{ color: textColor }}>
                    {testimonial.author}
                  </strong>
                  <br />
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          {/* Thumbnail rail on the right */}
          <div className="testimonials-thumbs">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-thumb" style={{ opacity: i === 0 ? 1 : 0.3 }}>
                <img
                  src={t.img}
                  alt={t.author}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MOTTO ==================== */}
      <section className="section section-motto">
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}>
          <img
            src={bannerImg}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isDark ? 0.25 : 0.15,
              filter: `grayscale(100%) ${isDark ? 'brightness(0.4)' : 'brightness(0.3)'}`,
            }}
            loading="lazy"
          />
        </div>
        <div className="motto-content">
          <div className="scroll-reveal">
            <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
              {mottoLabel}
            </p>
          </div>
          <div className="scroll-reveal">
            <h2 className="heading-xl" style={{ color: textColor }}>
              {mottoQuote}
            </h2>
          </div>
          <div className="scroll-reveal" style={{ marginTop: '24px' }}>
            <p className="body-sub" style={{ color: mutedColor }}>
              {mottoAuthor}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="section section-contact content-offset" id={isDark ? 'contact' : undefined}>
        <div className="scroll-reveal">
          <p className="body-label" style={{ color: mutedColor, marginBottom: '24px' }}>
            CONNECT
          </p>
        </div>

        <div className="contact-grid-3 scroll-reveal">
          {/* Left column */}
          <div>
            {contactLeft.map((link) => (
              <a key={link.name} className="contact-link" href="#" style={{ borderColor }}>
                <span className="heading-md contact-name" style={{ color: textColor }}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>
          {/* Middle column */}
          <div>
            {contactMiddle.map((link) => (
              <a key={link.name} className="contact-link" href="#" style={{ borderColor }}>
                <span className="heading-md contact-name" style={{ color: textColor }}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>
          {/* Right column — email + phone */}
          <div>
            <div className="contact-link" style={{ borderColor }}>
              <span className="heading-sm contact-label" style={{ color: mutedColor }}>
                {contactEmail.label}
              </span>
              <span className="body-sub" style={{ color: textColor }}>
                {contactEmail.value}
              </span>
            </div>
            <div className="contact-link" style={{ borderColor }}>
              <span className="heading-sm contact-label" style={{ color: mutedColor }}>
                {contactPhone.label}
              </span>
              <span className="body-sub" style={{ color: textColor }}>
                {contactPhone.value}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '80px' }} />
    </div>
  )
}
