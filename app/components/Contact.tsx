'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Validation to prevent common setup errors
    if (!serviceId || serviceId.includes('your_') || !templateId || !publicKey) {
      console.error('EmailJS Error: Missing or placeholder credentials in .env.local')
      setStatus('error')
      return
    }

    try {
      emailjs.init(publicKey)

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          date: new Date().toLocaleString(), // Added for a more professional timestamp
        }
      )

      if (result.status === 200) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Contact Form Error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background with Image and Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
          alt="Contact FajosTech Support"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo-950/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to start your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you have a fully-formed idea or just a spark of inspiration, we're here to help you build something extraordinary.
            </p>
            
            <div className="space-y-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 transition-colors">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Lagos, Nigeria / Remote</p>
                </div>
              </a>
              <a href="mailto:fajostech@gmail.com" className="flex items-center space-x-4 text-white group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 transition-colors">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">fajostech@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-4xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-indigo-600 text-white rounded-xl font-black text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <p className="text-green-600 text-center font-bold">Message sent successfully!</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact