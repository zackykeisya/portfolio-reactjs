import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'About Me' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
  ]

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return '🌙';
      case 'cyan':
        return '💧';
      default:
        return '☀️';
    }
  };

  return (
    <header className={`navbar fixed top-0 left-0 w-full z-50 ${
      isScrolled ? 'navbar-scrolled py-2' : 'py-4'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a 
              href="#home" 
              className="font-bold text-lg block transition-all duration-300 hover:text-accent-primary theme-transition"
            >
              Zacky
            </a>
          </div>
          
          <div className="flex items-center px-4 space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm theme-transition" style={{ width: '20px', textAlign: 'center' }}>
                {getThemeIcon()}
              </span>
              <div 
                className="theme-toggle"
                onClick={toggleTheme}
                title={`Switch to ${
                  theme === 'light' ? 'dark' : 
                  theme === 'dark' ? 'cyan' : 'light'
                } mode`}
              >
                <div className="toggle-slider theme-transition">
                  <span className="theme-icon">
                    {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '💧'}
                  </span>
                </div>
              </div>
            </div>

            {/* Hamburger Menu */}
            <button 
              id="hamburger" 
              name="hamburger" 
              type="button" 
              className={`block lg:hidden transition-all duration-300 ${
                isMenuOpen ? 'hamburger-active' : ''
              }`}
              onClick={toggleMenu}
            >
              <span className="hamburger-line transition duration-500 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-500 ease-in-out"></span>
              <span className="hamburger-line transition duration-500 ease-in-out origin-bottom-left"></span>
            </button>
            
            {/* Navigation Menu */}
            <nav className={`${
              isMenuOpen ? 'block animate-fadeInDown' : 'hidden'
            } absolute py-4 border rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:border-0 lg:rounded-none lg:max-w-full shadow-lg lg:shadow-none theme-transition`}
            style={{ 
              background: 'var(--bg-primary)',
              borderColor: 'var(--border-color)'
            }}>
              <ul className="block lg:flex">
                {navItems.map((item, index) => (
                  <li key={index} className="group">
                    <a 
                      href={item.href} 
                      className="nav-item text-base py-1.5 mx-8 flex transition-all duration-300 theme-transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar