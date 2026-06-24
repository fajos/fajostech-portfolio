'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Services', 'Portfolio', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            data-cursor-variant="pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="FajosTech Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="text-2xl font-black tracking-tighter">
              <span className={scrolled ? 'text-indigo-600' : 'text-white'}>FAJOS</span>
              <span className="gradient-text">TECH</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                data-cursor-variant="pointer"
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-110 ${
                  scrolled ? 'text-gray-900 hover:text-indigo-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-gray-900' : 'text-white'}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-gray-100"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar