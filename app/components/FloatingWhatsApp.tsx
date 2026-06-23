'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/2348027036142" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-999 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  )
}

export default FloatingWhatsApp