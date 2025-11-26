import React, { useState, useEffect } from 'react'
import { projects, certificates, techIcons } from '../data/projects'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from '../hooks/useTranslation'
import { useLanguage } from '../context/LanguageContext'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [fullImage, setFullImage] = useState(null)
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { language } = useLanguage()

  useEffect(() => {
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show")
      }, index * 100)
    })
  }, [activeTab])

  const showTab = (tab) => {
    setActiveTab(tab)
  }

  const openProjectModal = (key) => {
    setSelectedProject({ ...projects[key], key })
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  const openFullImage = (src) => {
    setFullImage(src)
  }

  const closeFullImage = () => {
    setFullImage(null)
  }

  // Helper function to get project icons
  const getProjectIcon = (key) => {
    const icons = {
      ecommerce: '🛒',
      student: '🎓',
      pos: '🌤️',
      perpus: '📚',
      pharmacy: '💊',
      complaint: '📢',
      ticket: '🎫'
    }
    return icons[key] || '📁'
  }

  // Helper function to get project text based on current language
  const getProjectText = (project, field) => {
    return project[field] && project[field][language] ? project[field][language] : project[field] || ''
  }

  // Helper function to get project features based on current language
  const getProjectFeatures = (project) => {
    return project.features && project.features[language] ? project.features[language] : project.features || []
  }

  // Helper function to get certificate text based on current language
  const getCertificateText = (cert, field) => {
    return cert[field] && cert[field][language] ? cert[field][language] : cert[field] || ''
  }

  return (
    <section id="portfolio" className="portfolio-section pt-36 pb-16 theme-transition" 
             style={{ background: 'var(--bg-secondary)' }}>
      <div className="container px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h4 className="font-semibold mb-2 theme-transition">{t('portfolio.title')}</h4>
          <h2 className="portfolio-title font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 theme-transition">
            {t('portfolio.subtitle')}
          </h2>
          <p className="text-md md:text-lg font-medium theme-transition">
            {t('portfolio.description')}
          </p>
        </div>

        {/* Tabs */}
        <div className="tab-buttons flex justify-center mb-10">
          <button 
            onClick={() => showTab('projects')} 
            className={`px-6 py-2 font-semibold rounded-l-full hover:opacity-80 transition duration-300 theme-transition ${
              activeTab === 'projects' 
                ? 'bg-accent-primary text-white' 
                : 'bg-var(--bg-primary) text-var(--text-primary) border border-var(--border-color) hover:bg-var(--bg-secondary)'
            }`}
            style={{
              backgroundColor: activeTab === 'projects' ? 'var(--accent-primary)' : 'var(--bg-primary)',
              color: activeTab === 'projects' ? 'white' : 'var(--text-primary)',
              borderColor: 'var(--border-color)'
            }}
          >
            {t('portfolio.projects')}
          </button>
          <button 
            onClick={() => showTab('certificates')} 
            className={`px-6 py-2 font-semibold rounded-r-full hover:opacity-80 transition duration-300 theme-transition ${
              activeTab === 'certificates' 
                ? 'bg-accent-primary text-white' 
                : 'bg-var(--bg-primary) text-var(--text-primary) border border-var(--border-color) hover:bg-var(--bg-secondary)'
            }`}
            style={{
              backgroundColor: activeTab === 'certificates' ? 'var(--accent-primary)' : 'var(--bg-primary)',
              color: activeTab === 'certificates' ? 'white' : 'var(--text-primary)',
              borderColor: 'var(--border-color)'
            }}
          >
            {t('portfolio.certificates')}
          </button>
        </div>

        {/* Projects Tab */}
        <div className={`${activeTab === 'projects' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(projects).map(([key, project]) => (
              <div 
                key={key}
                onClick={() => openProjectModal(key)} 
                className="project-card p-6 rounded-xl shadow-lg border cursor-pointer transition-all duration-300 theme-transition"
                style={{
                  background: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="text-5xl mb-4">{getProjectIcon(key)}</div>
                <h3 className="font-bold text-lg mb-2 theme-transition">
                  {getProjectText(project, 'title')}
                </h3>
                <p className="text-sm theme-transition" style={{ color: 'var(--text-secondary)' }}>
                  {getProjectText(project, 'subtitle')}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map(tech => (
                    <img 
                      key={tech}
                      src={techIcons[tech]} 
                      alt={tech} 
                      title={tech} 
                      className="w-6 h-6 grayscale hover:grayscale-0 transition" 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Tab */}
        <div className={`${activeTab === 'certificates' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                onClick={() => openCertificateModal(cert)} 
                className="certificate-card p-6 rounded-xl shadow-lg border cursor-pointer transition-all duration-300 theme-transition hover:transform hover:scale-105"
                style={{
                  background: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="text-5xl mb-4 text-center">{cert.icon}</div>
                <h3 className="font-bold text-lg mb-2 theme-transition text-center">
                  {getCertificateText(cert, 'title')}
                </h3>
                <p className="text-sm theme-transition text-center mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {getCertificateText(cert, 'issuer')}
                </p>
                <p className="text-xs theme-transition text-center" style={{ color: 'var(--accent-primary)' }}>
                  {cert.date}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs theme-transition text-center" style={{ color: 'var(--text-secondary)' }}>
                    {getCertificateText(cert, 'description')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay active" onClick={closeProjectModal}>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div 
              className="modal-container theme-transition" 
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-primary)',
                borderColor: 'var(--border-color)'
              }}
            >
              <button 
                className="modal-close theme-transition" 
                onClick={closeProjectModal}
                style={{ color: 'var(--text-secondary)' }}
              >
                &times;
              </button>
              
              <div className="modal-header">
                <h2 className="text-2xl font-bold mb-2 theme-transition">
                  {getProjectText(selectedProject, 'title')}
                </h2>
                <p className="theme-transition" style={{ color: 'var(--accent-primary)' }}>
                  {getProjectText(selectedProject, 'subtitle')}
                </p>
              </div>
              
              <div className="modal-body">
                <div className="mb-6 theme-transition" style={{ color: 'var(--text-primary)' }}>
                  {getProjectText(selectedProject, 'description')}
                </div>
                
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="project-gallery mb-6">
                    <h4 className="font-semibold text-lg mb-3 theme-transition">{t('portfolio.images')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.images.map((src, index) => (
                        <img 
                          key={index}
                          src={src} 
                          alt={getProjectText(selectedProject, 'title')} 
                          className="project-image theme-transition rounded-lg"
                          onClick={() => openFullImage(src)}
                          style={{ borderColor: 'var(--border-color)' }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 theme-transition">{t('portfolio.techStack')}</h4>
                  <div className="tech-stack flex flex-wrap gap-3">
                    {selectedProject.tech.map(tech => (
                      <div key={tech} className="flex flex-col items-center">
                        {techIcons[tech] && (
                          <>
                            <img 
                              src={techIcons[tech]} 
                              alt={tech} 
                              className="w-10 h-10"
                            />
                            <span className="text-xs mt-1 theme-transition" style={{ color: 'var(--text-secondary)' }}>
                              {tech}
                            </span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 theme-transition">{t('portfolio.features')}</h4>
                  <ul className="list-disc pl-5 theme-transition" style={{ color: 'var(--text-primary)' }}>
                    {getProjectFeatures(selectedProject).map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 theme-transition">{t('portfolio.demo')}</h4>
                  {selectedProject.demo && selectedProject.demo !== "#" ? (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline theme-transition inline-flex items-center gap-2"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t('portfolio.viewDemo')}
                    </a>
                  ) : (
                    <span className="theme-transition" style={{ color: 'var(--text-secondary)' }}>
                      {t('portfolio.demoNotAvailable')}
                    </span>
                  )}
                </div>
                
                {selectedProject.documentation && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-3 theme-transition">{t('portfolio.documentation')}</h4>
                    <div 
                      className="theme-transition"
                      style={{ color: 'var(--text-primary)' }}
                      dangerouslySetInnerHTML={{ 
                        __html: getProjectText(selectedProject, 'documentation') 
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="modal-overlay active" onClick={closeCertificateModal}>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div 
              className="modal-container theme-transition max-w-md" 
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-primary)',
                borderColor: 'var(--border-color)'
              }}
            >
              <button 
                className="modal-close theme-transition" 
                onClick={closeCertificateModal}
                style={{ color: 'var(--text-secondary)' }}
              >
                &times;
              </button>
              
              <div className="text-center">
                <div className="text-6xl mb-4">{selectedCertificate.icon}</div>
                <h2 className="text-2xl font-bold mb-2 theme-transition">
                  {getCertificateText(selectedCertificate, 'title')}
                </h2>
                <p className="text-lg theme-transition mb-1" style={{ color: 'var(--accent-primary)' }}>
                  {getCertificateText(selectedCertificate, 'issuer')}
                </p>
                <p className="text-sm theme-transition mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {selectedCertificate.date}
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="theme-transition" style={{ color: 'var(--text-primary)' }}>
                    {getCertificateText(selectedCertificate, 'description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {fullImage && (
        <div className="image-preview-modal active" onClick={closeFullImage}>
          <button className="image-preview-close" onClick={closeFullImage}>&times;</button>
          <img 
            id="fullImagePreview" 
            src={fullImage} 
            alt="Full Preview" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Portfolio