'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'CoinWise Expense Tracker',
    category: 'Mobile App',
    description: 'AI-powered financial companion for intelligent expense tracking, predictive forecasting, and budget optimization with biometric security.',
    tech: 'React Native, AI, Finance API',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    link: 'https://play.google.com/store/apps/details?id=com.fajostech.expensetracker'
  },
  {
    title: 'SuperCalc Math Companion',
    category: 'Mobile App',
    description: 'Advanced math and physics solver providing step-by-step solutions for complex equations, calculus, and mechanical dynamics.',
    tech: 'React Native, Math Engine, Physics Solvers',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    link: 'https://play.google.com/store/apps/details?id=com.fajostech.supercalc'
  },
  {
    title: 'TechPathFinder',
    category: 'Mobile App',
    description: 'Career guidance platform using interactive quizzes and 48+ detailed roadmaps to help users navigate their path in technology.',
    tech: 'React Native, Career Roadmap Logic',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop',
    link: 'https://play.google.com/store/apps/details?id=com.fajostech.techpathfinder'
  },
  {
    title: 'Finish Rich Africa',
    category: 'Website',
    description: 'Financial education and wealth advisory platform dedicated to building and preserving lasting wealth in the African context.',
    tech: 'Next.js, Tailwind CSS, Wealth Management Logic',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop',
    link: 'https://www.finishrichafrica.com/'
  },
  {
    title: 'Local Service Finder',
    category: 'Web Application',
    description: 'Comprehensive marketplace connecting users with verified professional experts for home, office, and personal services.',
    tech: 'React, Node.js, Verification System',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop',
    link: 'https://local-services-frontend-chi.vercel.app/'
  },
  {
    title: 'Jah Solar Energy',
    category: 'Website',
    description: 'Professional solar installation and electrical engineering website showcasing grid-tied systems and industrial solutions.',
    tech: 'Next.js, SEO Optimization, Business Logic',
    image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop',
    link: 'https://jahsolarenergy.com/'
  },
  {
    title: 'SBC Welfare System',
    category: 'Web Application',
    description: 'Comprehensive welfare management system for organizational tracking, benefits administration, and member support.',
    tech: 'Next.js, Management Dashboard, Welfare Tracking',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    link: 'https://sbcwelfarefrontend.vercel.app/'
  },
  {
    title: 'ZAKOM LMS',
    category: 'Web Application',
    description: 'Modern learning management system designed for streamlined educational content delivery and student progress tracking.',
    tech: 'Next.js, E-Learning Engine, Dashboard',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    link: 'https://zakom-frontend.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Real-World <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From financial AI to e-learning platforms, here are the digital solutions we've built and deployed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project: ${project.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-2xl block"
            >
              {/* Image Background */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map((t, i) => (
                    <span key={i} className="text-[10px] text-gray-400 border border-gray-700 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white font-bold group/btn"
                >
                  Explore Project <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio