import React from 'react'
import heroImage from '../assets/img/10114-removebg-preview.png'
import cv from '../assets/img/cv-zackykeisyaakbar.pdf'
import { useTranslation } from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-gradient-orb hero-gradient-orb-1"></div>
        <div className="hero-gradient-orb hero-gradient-orb-2"></div>
        <div className="hero-gradient-orb hero-gradient-orb-3"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container">
        <div className="flex flex-wrap items-center">
          {/* Text Content */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <div className="hero-content">
              <h1 className="text-base text-black md:text-xl mb-4 font-medium">
                {t('hero.greeting')}
              </h1>
              
              <div className="hero-title">
                <span className="block font-bold text-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
                  Zacky Keisya <span className="hero-subtitle">Akbar</span>
                </span>
              </div>
              
              <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-secondary mb-4 hero-subtitle">
                {t('hero.title')}
              </h2>

              <p className="text-md text-secondary mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              
              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <a 
                  href={cv}
                  className="hero-btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                  download="cv-zacky-keisya"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('hero.downloadCV')}
                </a>
                
                <a 
                  href="#portfolio"
                  className="hero-btn-secondary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  {t('hero.viewWork')}
                </a>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">2+</div>
                  <div className="hero-stat-label">{t('hero.stats.experience')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">15+</div>
                  <div className="hero-stat-label">{t('hero.stats.projects')}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">5+</div>
                  <div className="hero-stat-label">{t('hero.stats.clients')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <div className="hero-image-container">
              {/* Floating Elements */}
              <div className="hero-floating-element hero-floating-1"></div>
              <div className="hero-floating-element hero-floating-2"></div>
              <div className="hero-floating-element hero-floating-3"></div>
              
              {/* Main Image */}
              <div className="hero-image-wrapper">
                <img 
                  src={heroImage} 
                  alt="Zacky Keisya Akbar" 
                  className="hero-image"
                />
              </div>
              
              {/* Tech Stack Badges */}
              <div className="hero-tech-badges">
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Laravel</span>
                <span className="tech-badge">Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-text">{t('hero.scroll')}</div>
        <div className="hero-scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero