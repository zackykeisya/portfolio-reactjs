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
  const [submitStatus, setSubmitStatus] = useState(null)

  const { t } = useTranslation()

  // EmailJS configuration
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
      // Gunakan parameter yang lebih sederhana
      const templateParams = {
        to_name: 'Zacky Keisya',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      }

      console.log('Sending email with params:', templateParams)

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
      console.error('Error details:', {
        code: error.code,
        text: error.text,
        status: error.status
      })
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
              Pesan berhasil dikirim! Kami akan membalasnya segera.
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="w-full lg:w-2/3 lg:mx-auto mb-6 px-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung di zackykeisyaa@gmail.com
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="contact-form w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base text-black font-bold">
                Nama
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                required
                placeholder="Masukkan nama lengkap Anda"
                disabled={isLoading}
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base text-black font-bold">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                required
                placeholder="Masukkan alamat email Anda"
                disabled={isLoading}
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="message" className="text-base text-black font-bold">
                Pesan
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 h-32 resize-none"
                required
                placeholder="Tulis pesan Anda di sini..."
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
                {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact