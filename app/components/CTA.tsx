'use client'

import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const CTA = () => {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            HAVE A PROJECT <br />
            <span className="text-indigo-200 uppercase">IN MIND?</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto font-medium">
            Join the forward-thinking brands that trust FajosTech to build their most ambitious digital products.
          </p>

          <div className="flex justify-center">
            <Magnetic>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block px-12 py-5 bg-white text-indigo-600 rounded-full font-black text-xl shadow-2xl hover:bg-indigo-50 transition-colors"
              >
                Let's Build It Together
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA