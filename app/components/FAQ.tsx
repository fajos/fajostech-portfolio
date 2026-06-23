'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'How long does it take to build an app?',
    answer: 'Typical projects range from 4 to 12 weeks depending on complexity. We follow an agile process to ensure you see progress every step of the way.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We specialize in Next.js for high-performance web apps and React Native for cross-platform mobile applications. This ensures code efficiency and fast performance.'
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes! We offer flexible maintenance packages to handle updates, security patches, and feature additions as your business grows.'
  },
  {
    question: 'Can you help with app store deployment?',
    answer: 'Absolutely. We handle the entire process of submitting your app to the Apple App Store and Google Play Store, including all technical requirements.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about partnering with FajosTech.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white transition-colors"
              >
                <span className="text-xl font-bold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-indigo-600 text-2xl"
                >
                  <FiChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-lg bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ