import React from 'react'
import html5 from '../assets/img/html5.png'
import css3 from '../assets/img/css3.svg'
import javascript from '../assets/img/javascript.png'
import bootstrap from '../assets/img/bootstrap.png'
import php from '../assets/img/PHP-removebg-preview.png'
import laravel from '../assets/img/Laravel_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import lumen from '../assets/img/lumen.png'
import react from '../assets/img/react.png'
import flutter from '../assets/img/flutter.png'
import firebase from '../assets/img/firebase.png'
import { useTranslation } from '../hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()

  const skills = [
    { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 },
    { name: "JavaScript", icon: javascript },
    { name: "Bootstrap", icon: bootstrap },
    { name: "PHP", icon: php },
    { name: "Laravel", icon: laravel },
    { name: "Lumen", icon: lumen },
    { name: "React", icon: react },
    { name: "Flutter", icon: flutter },
    { name: "Firebase", icon: firebase }
  ]

  return (
    <section id="skills" className="skills-section pt-36 pb-32 theme-transition" 
             style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="skills-title font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl theme-transition">
              {t('skills.title')}
            </h2>
            <p className="text-md font-medium md:text-lg theme-transition">
              {t('skills.description')}
            </p>
          </div>
        </div>
        <div className="w-full px-4 mt-12">
          <div className="flex flex-wrap items-center justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item flex flex-col items-center mx-4 my-4">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon max-w-[100px] grayscale px-4 py-4 opacity-80 duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8" 
                />
                <span className="mt-2 text-sm font-medium px-3 py-1 rounded-full theme-transition"
                      style={{ 
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)'
                      }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills