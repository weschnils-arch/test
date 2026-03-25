import dribbbleIcon from '../assets/icons/ic-dribbble.svg'
import igIcon from '../assets/icons/ic-ig.svg'
import ytbIcon from '../assets/icons/ic-ytb.svg'
import inIcon from '../assets/icons/ic-in.svg'

export default function Footer() {
  const links = [
    { icon: dribbbleIcon, label: 'Dribbble', href: '#' },
    { icon: igIcon, label: 'Instagram', href: '#' },
    { icon: ytbIcon, label: 'YouTube', href: '#' },
    { icon: inIcon, label: 'LinkedIn', href: '#' },
  ]

  return (
    <>
      <div className="footer-socials">
        {links.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.label}>
            <img src={link.icon} alt={link.label} style={{ width: '100%', height: '100%' }} />
          </a>
        ))}
      </div>
      <div className="footer-sound">
        <span className="footer-sound-label">SOUND</span>
        <span className="footer-sound-state">OFF</span>
      </div>
    </>
  )
}
