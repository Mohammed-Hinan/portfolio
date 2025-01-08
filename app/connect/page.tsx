'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { 
    name: 'Email', 
    href: 'mailto:mohammedhinanak@gmail.com'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/mohammed-hinan-a-k-b54967223/'
  },
  { 
    name: 'Behance', 
    href: 'https://www.behance.net/hinanak'
  },
  { 
    name: 'Dribbble', 
    href: 'https://dribbble.com/Mohammed_Hinan_AK'
  },
]

export default function Connect() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-medium mb-12">
          Let's Connect!
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      {/* Footer with name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 left-0 right-0 text-center"
      >
        <div className="text-2xl font-medium mb-2">mh</div>
        <div className="text-gray-600">Mohammed Hinan</div>
      </motion.div>
    </main>
  )
}

