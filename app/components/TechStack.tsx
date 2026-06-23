'use client'

import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGoogleplay,
  SiVercel,
  SiFirebase
} from 'react-icons/si'

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Docker', icon: SiDocker },
  { name: 'Google Play', icon: SiGoogleplay },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Firebase', icon: SiFirebase },
]

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Powered by Industry Leading Technologies
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-12 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              <tech.icon className="text-4xl text-gray-600 hover:text-indigo-600" />
              <span className="text-xl font-bold text-gray-700">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack