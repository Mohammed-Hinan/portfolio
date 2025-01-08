'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
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
        router.push('/about')
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })
    return () => window.removeEventListener('wheel', handleScroll)
  }, [router, isScrolling])

  return (
    <main 
      ref={containerRef}
      className="h-screen overflow-hidden"
    >
      <motion.section 
        style={{ opacity, y }}
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Solving problems through{' '}
            <span className="gradient-text">thoughtful</span> design.
          </h1>
          <p className="text-gray-600">
            Driven by curiosity and a passion for solving
            real-world problems through design.
          </p>
          <Link href="/about">
            <motion.div 
              className="mt-12"
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

