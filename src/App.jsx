import React, { useEffect, useState } from 'react'
import { useTheme } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Enhanced scroll reveal animation
    const revealElements = () => {
      const sections = document.querySelectorAll("section")
      const projectCards = document.querySelectorAll(".project-card")
      const skillItems = document.querySelectorAll(".skill-item")

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight - 100) {
          section.classList.add("show")
        }
      })

      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight - 100 && !card.classList.contains('show')) {
          setTimeout(() => {
            card.style.animationDelay = `${index * 0.1}s`
            card.classList.add("show")
          }, 100)
        }
      })

      skillItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight - 100 && !item.classList.contains('show')) {
          setTimeout(() => {
            item.style.animationDelay = `${index * 0.1}s`
            item.classList.add("show")
          }, 100)
        }
      })
    }

    // Initial check on load
    if (!isLoading) {
      setTimeout(() => {
        revealElements()
      }, 500)
    }

    // Add scroll event listener with throttle
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          revealElements()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 theme-transition" 
           style={{ background: 'var(--bg-primary)' }}>
        <div className="text-center">
          <div className="loading-spinner w-16 h-16 border-4 rounded-full mx-auto mb-4"></div>
          <p className="font-semibold theme-transition">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`font-poppins scroll-smooth theme-transition ${theme}`}>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App