'use client'

import { motion } from 'framer-motion'
import { FiSearch, FiLayout, FiCode, FiSend } from 'react-icons/fi'

const steps = [
  {
    icon: FiSearch,
    title: 'Discovery',
    text: 'We dive deep into your business goals, target audience, and market landscape to define a clear roadmap.',
    color: 'bg-blue-500'
  },
  {
    icon: FiLayout,
    title: 'Design',
    text: 'Crafting intuitive user interfaces and experiences that are both beautiful and functional.',
    color: 'bg-indigo-500'
  },
  {
    icon: FiCode,
    title: 'Development',
    text: 'Building scalable, high-performance solutions using the latest tech stack (Next.js, React Native).',
    color: 'bg-purple-500'
  },
  {
    icon: FiSend,
    title: 'Deployment',
    text: 'Rigorous testing followed by a seamless launch and ongoing optimization for growth.',
    color: 'bg-pink-500'
  }
]

const Process = () => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A systematic approach to transforming your vision into a market-leading digital product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-800 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 text-center group"
            >
              <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transition-transform duration-500 group-hover:rotate-12`}>
                <step.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.text}
              </p>

              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 md:right-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 font-black text-indigo-400">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process