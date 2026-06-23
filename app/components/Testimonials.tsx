'use client'

import { motion } from 'framer-motion'
import { FiMessageSquare, FiUser } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Samuel Adeniyi',
    role: 'CEO, Finish Rich Africa',
    content: 'FajosTech transformed our vision into a world-class financial platform. Their attention to detail and technical expertise is unmatched in the African tech space.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Joseph Ajao',
    role: 'Founder, Jah Solar Energy',
    content: 'The solar installation platform they built for us has significantly increased our lead generation. Professional, timely, and highly skilled developers.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Dr. Sarah K.',
    role: 'Director, SBC Welfare',
    content: 'The management system FajosTech developed has streamlined our internal processes remarkably. It is intuitive and handles our complex data with ease.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  }
]

const Testimonials = () => {
  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6">
            <FiMessageSquare className="text-3xl text-indigo-300" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Client <span className="text-indigo-300">Success Stories</span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners say about working with FajosTech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-indigo-400">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-indigo-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials