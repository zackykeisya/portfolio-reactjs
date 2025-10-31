import React, { useState, useEffect } from 'react'
import { projects, certificates, techIcons } from '../data/projects'
import { useTheme } from '../context/ThemeContext'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [fullImage, setFullImage] = useState(null)
  const { theme } = useTheme()

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
    setSelectedProject(projects[key])
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

  return (
    <section id="portfolio" className="portfolio-section pt-36 pb-16 theme-transition" 
             style={{ background: 'var(--bg-secondary)' }}>
      <div className="container px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h4 className="font-semibold mb-2 theme-transition">Portfolio</h4>
          <h2 className="portfolio-title font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 theme-transition">
            My Work
          </h2>
          <p className="text-md md:text-lg font-medium theme-transition">
            Berikut adalah daftar project & sertifikat saya selama ini.
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
            Project
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
            Sertifikat
          </button>
        </div>

        {/* Projects */}
        <div className={`${activeTab === 'projects' ? 'block' : 'hidden'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
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
              <h3 className="font-bold text-lg mb-2 theme-transition">{project.title}</h3>
              <p className="text-sm theme-transition" style={{ color: 'var(--text-secondary)' }}>
                {project.subtitle}
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

        {/* Certificates */}
        <div className={`${activeTab === 'certificates' ? 'grid' : 'hidden'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {certificates.map((cert, index) => (
            <div 
              key={index}
              onClick={() => openCertificateModal(cert)} 
              className="project-card p-6 rounded-xl shadow-lg border cursor-pointer transition-all duration-300 theme-transition"
              style={{
                background: 'var(--bg-primary)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="font-bold text-lg mb-2 theme-transition">{cert.title}</h3>
              <p className="text-sm theme-transition" style={{ color: 'var(--text-secondary)' }}>
                {cert.issuer}
              </p>
            </div>
          ))}
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
                <h2 className="text-2xl font-bold mb-2 theme-transition">{selectedProject.title}</h2>
                <p className="theme-transition" style={{ color: 'var(--accent-primary)' }}>
                  {selectedProject.subtitle}
                </p>
              </div>
              
              <div className="modal-body">
                <div className="mb-6 theme-transition" style={{ color: 'var(--text-primary)' }}>
                  {selectedProject.description}
                </div>
                
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="project-gallery mb-6">
                    {selectedProject.images.map((src, index) => (
                      <img 
                        key={index}
                        src={src} 
                        alt={selectedProject.title} 
                        className="project-image theme-transition"
                        onClick={() => openFullImage(src)}
                        style={{ borderColor: 'var(--border-color)' }}
                      />
                    ))}
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 theme-transition">Tech Stack:</h4>
                  <div className="tech-stack flex flex-wrap">
                    {selectedProject.tech.map(tech => (
                      <div key={tech} className="flex flex-col items-center mr-4 mb-2">
                        {techIcons[tech] && (
                          <>
                            <img 
                              src={techIcons[tech]} 
                              alt={tech} 
                              className="w-8 h-8"
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
                  <h4 className="font-semibold text-lg mb-3 theme-transition">Fitur Utama:</h4>
                  <ul className="list-disc pl-5 theme-transition" style={{ color: 'var(--text-primary)' }}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 theme-transition">Link Demo:</h4>
                  {selectedProject.demo && selectedProject.demo !== "#" ? (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline theme-transition"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      Lihat Demo
                    </a>
                  ) : (
                    <span className="theme-transition" style={{ color: 'var(--text-secondary)' }}>
                      Demo tidak tersedia
                    </span>
                  )}
                </div>
                
                {selectedProject.documentation && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-3 theme-transition">Dokumentasi:</h4>
                    <div 
                      className="theme-transition"
                      style={{ color: 'var(--text-primary)' }}
                      dangerouslySetInnerHTML={{ __html: selectedProject.documentation }}
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div 
            className="p-6 rounded-lg shadow-lg max-w-md w-full relative theme-transition"
            style={{
              background: 'var(--bg-primary)',
              borderColor: 'var(--border-color)'
            }}
          >
            <button 
              onClick={closeCertificateModal} 
              className="absolute top-2 right-2 theme-transition"
              style={{ color: 'var(--text-secondary)' }}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2 theme-transition">{selectedCertificate.title}</h3>
            <p className="theme-transition" style={{ color: 'var(--text-primary)' }}>
              {selectedCertificate.issuer}
            </p>
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