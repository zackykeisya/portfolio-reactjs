import React from 'react'
import heroImage from '../assets/img/10114-removebg-preview.png'
import cv from '../assets/img/cv-zackykeisyaakbar.pdf'


const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-5 lg:pt-12 min-h-screen flex items-center">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full self-center px-4 lg:w-1/2">
            <div className="hero-content">
              <h1 className="text-base text-black md:text-xl mb-4">
                Assalamualaikum Nama Saya, 
              </h1>
              <div className="hero-title">
                <span className="block font-bold text-dark text-2xl mt-1 lg:text-4xl max-w-md gradient-text">
                  Zacky Keisya Akbar
                </span>
              </div>
              <h2 className="font-medium mb-10 lg:text-2xl text-secondary animate-pulse">
                Front End Web Developer
              </h2>
              <a 
                href={cv}
                className="btn-primary text-base font-semibold text-white bg-dark py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-block pulse-cta" 
                target="_blank" 
                rel="noopener noreferrer"
                download="cv"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img 
                src={heroImage} 
                alt="Zacky Keisya Akbar" 
                className="hero-image max-w-full mx-auto floating"
              />
              <span className="absolute -bottom-6 -z-10 left-1/2 -translate-x-1/2 md:scale-125"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero