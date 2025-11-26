import React, { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const { t } = useTranslation()

  // EmailJS configuration - ganti dengan data Anda dari dashboard EmailJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_8feo0tj',
    TEMPLATE_ID: 'template_hy89cyj',
    PUBLIC_KEY: 'p5bS7e9JC0pHBvY4K'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'zackykeisyaa@gmail.com',
        reply_to: formData.email
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })

    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="pt-36 pb-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container">
        <div className="w-full px-4">
          <div className="contact-title max-w-xl mx-auto text-center">
            <h4 className="font-semibold font-lg text-black mb-2">
              {t('contact.title')}
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              {t('contact.subtitle')}
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg mb-4">
              {t('contact.description')}
            </p>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="w-full lg:w-2/3 lg:mx-auto mb-6 px-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              {t('contact.successMessage')}
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="w-full lg:w-2/3 lg:mx-auto mb-6 px-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {t('contact.errorMessage')}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="contact-form w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base text-black font-bold">
                {t('contact.name')}
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                required
                placeholder={t('contact.namePlaceholder')}
                disabled={isLoading}
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base text-black font-bold">
                {t('contact.email')}
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                required
                placeholder={t('contact.emailPlaceholder')}
                disabled={isLoading}
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="message" className="text-base text-black font-bold">
                {t('contact.message')}
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 h-32 resize-none"
                required
                placeholder={t('contact.messagePlaceholder')}
                disabled={isLoading}
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button 
                type="submit"
                disabled={isLoading}
                className={`btn-primary text-base text-white font-semibold py-4 px-8 rounded-full w-full transition-all duration-300 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-dark hover:opacity-90'
                }`}
              >
                {isLoading ? t('contact.sending') : t('contact.send')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact