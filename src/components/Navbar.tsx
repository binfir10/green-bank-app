import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para alternar entre abierto y cerrado del menú responsive
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header>
      <img src="/assets/logo.svg" alt="" className="header-logo" />
      <div className="nav-desktop">
        <nav className="nav-desktop">
          <a href="#">Why us</a>
          <a href="#">Services</a>
          <a href="#">Our Process</a>
          <a href="#">Payments</a>
          <a href="#">FAQs</a>
        </nav>
      </div>

      <div className="nav-mobile">
        <button
          onClick={toggleMenu}
          className="size-[24px]"
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <nav className={`menu-container ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#">Why us</a>
          <a href="#">Services</a>
          <a href="#">Our Process</a>
          <a href="#">Payments</a>
          <a href="#">FAQs</a>
          <button className="header-mobile-button">Contact</button>
        </nav>
      </div>
      <button className="header-button">Contact</button>
      <img src="/assets/dora-header.svg" alt="" className="dora-header" />
    </header>
  )
}
