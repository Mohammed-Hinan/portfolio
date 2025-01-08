'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const lastScrollTime = useRef(Date.now())
  const { scrollY } = useScroll({
    container: containerRef
  })

  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      
      const now = Date.now()
      if (isScrolling || now - lastScrollTime.current < 1000) return

      if (e.deltaY > 0) { // Scrolling down
        setIsScrolling(true)
        lastScrollTime.current = now
        router.push('/case-studies')
        setTimeout(() => setIsScrolling(false), 1000)
      } else if (e.deltaY < 0) { // Scrolling up
        setIsScrolling(true)
        lastScrollTime.current = now
        router.push('/')
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })
    return () => window.removeEventListener('wheel', handleScroll)
  }, [router, isScrolling])

  return (
    <main 
      ref={containerRef}
      className="min-h-screen pt-32 overflow-auto"
    >
      <motion.section 
        style={{ opacity, y }}
        className="py-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">About me</h2>
          <h3 className="text-3xl font-medium mb-6">
            Hi, I'm Hinan.
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            I approach every project with an open mind and a willingness to learn,
            ensuring that each design is thoughtful and user-focused. From sketching
            ideas to refining prototypes, I believe in continuous improvement and
            collaboration to achieve the best outcomes.
          </p>
          <p className="text-gray-600 mb-12">
            I'm an aspiring UX/UI designer with a deep curiosity for understanding how
            people interact with technology. My goal is to create designs that are
            simple, meaningful, and bring value to everyday life.
          </p>
          <div className="relative">
            <Link 
              href="/connect"
              className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-opacity inline-block"
            >
              Let's connect
            </Link>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.5,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -left-12 top-1/2 -translate-y-1/2"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </div>
          <Link href="/case-studies" className="block mt-12">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-coral-500" />
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 100], [0, 1]) }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500"
      >
        Scroll to continue
      </motion.div>
    </main>
  )
}

