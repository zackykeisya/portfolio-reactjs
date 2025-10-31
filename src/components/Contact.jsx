import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form data:', formData)
    
    // You can add your form submission logic here
    // For example, send to an API or email service
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
            <h4 className="font-semibold font-lg text-black mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Us:</h2>
            <p className="text-md font-medium text-secondary md:text-lg mb-4">
              Kalian dapat menghubungi saya dengan mengisi form dibawah:
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contact-form w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base text-black font-bold">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                required
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base text-black font-bold">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                required
                placeholder="Masukkan alamat email"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="message" className="text-base text-black font-bold">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input w-full bg-slate-200 text-dark p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 h-32 resize-none"
                required
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button 
                type="submit"
                className="btn-primary text-base text-white font-semibold bg-dark py-4 px-8 rounded-full w-full hover:opacity-90 transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact