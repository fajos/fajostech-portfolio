'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FiSmartphone, 
  FiGlobe, 
  FiCode, 
  FiCloud, 
  FiSettings, 
  FiPlusCircle 
} from 'react-icons/fi'

const services = [
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: FiCode,
    title: 'Web App Development',
    description: 'Scalable web applications with modern frameworks like Next.js, React, and Node.js.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
  },
  {
    icon: FiGlobe,
    title: 'Website Development',
    description: 'Responsive, SEO-optimized websites that deliver exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop'
  },
  {
    icon: FiCloud,
    title: 'App Deployment',
    description: 'Seamless deployment to app stores and cloud platforms with domain setup and management.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    icon: FiSettings,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and maintenance to keep your digital products running smoothly.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: FiPlusCircle,
    title: 'Feature Integration',
    description: 'Add new functionalities and features to your existing applications without disruption.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            We provide end-to-end digital solutions to help your business grow in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group h-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border border-white"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="absolute inset-0 object-cover transition-transform duration-1000 md:group-hover:scale-110"
              />
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent md:bg-indigo-950/30 md:group-hover:bg-indigo-950/90 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative h-full p-10 flex flex-col justify-end text-white">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-white/20 md:group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0">
                  {service.description}
                </p>
                <div className="mt-8 w-full md:w-12 h-1.5 bg-indigo-400 rounded-full md:group-hover:w-full transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services