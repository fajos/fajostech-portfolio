'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const statData = [
  { label: 'Projects Delivered', value: 25, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
  { label: 'Tech Stack Experts', value: 15, suffix: '+' },
  { label: 'Support Availability', value: 24, suffix: '/7' },
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-4 inline-block">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent mb-6"
                />
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs group-hover:text-indigo-400 transition-colors">
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
