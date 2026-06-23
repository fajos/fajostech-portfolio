'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="FajosTech Digital Innovation Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            <span className="text-white">Innovate. Build.</span><br />
            <span className="gradient-text">Deliver.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-200 mb-8 h-24 font-light"
          >
            <TypeAnimation
              sequence={[
                'We Build Amazing Mobile Apps',
                2000,
                'We Create Stunning Websites',
                2000,
                'We Develop Web Applications',
                2000,
                'We Handle Deployment & Maintenance',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming ideas into powerful digital solutions. From mobile apps to web platforms, 
            we deliver end-to-end development with deployment and maintenance support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-all"
            >
              Start Your Project
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg backdrop-blur-sm transition-all"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero