'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
]

const RESUME_URL = "https://drive.google.com/file/d/14aii4GIyyTVmF07Eunf7PLCL-jwOw6lN/view"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-medium hover:opacity-70 transition-opacity"
          >
            mh
          </Link>
          <div className="flex items-center gap-8">
            <a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity hidden md:block"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 relative w-8 h-8 flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-3' : 'top-2'
                }`} />
                <span className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-3' : 'top-4'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40"
          >
            <div className="h-full flex items-center justify-center">
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center space-y-6"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl hover:opacity-60 transition-opacity ${
                      pathname === item.href ? 'opacity-60' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:opacity-60 transition-opacity md:hidden"
                >
                  Resume
                </a>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

