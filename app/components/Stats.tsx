'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects Delivered', value: '25+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Technologies Mastered', value: '12+' },
  { label: 'Global Clients', value: '5+' },
]

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-black text-indigo-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats