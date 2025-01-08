'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const caseStudies = [
  { 
    id: '01', 
    title: "Doctor's United",
    href: 'https://www.behance.net/gallery/206330593/Doctor-Appointment-Booking-App-for-Doctors-United'
  },
  { 
    id: '02', 
    title: 'LooMY',
    href: 'https://www.behance.net/gallery/207662079/LooMY-Anonymous-Chat-App'
  },
  { 
    id: '03', 
    title: 'Portfolio',
    href: '#'
  },
]

export default function CaseStudies() {
  const router = useRouter()
  const [isScrolling, setIsScrolling] = useState(false)
  const lastScrollTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      
      const now = Date.now()
      if (isScrolling || now - lastScrollTime.current < 1000) return

      if (e.deltaY < 0) { // Scrolling up
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
    <main className="min-h-screen pt-32">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-6">My Work</h2>
          <p className="text-gray-600 mb-12">
            Here are some of the projects I've worked on. Each case study showcases my approach to problem-solving and design thinking.
          </p>
          <h3 className="text-2xl mb-8">Case studies</h3>
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-gray-200 pb-8"
              >
                <div className="flex items-baseline">
                  <span className="text-sm text-gray-400 w-12">{study.id}</span>
                  <span className="text-xl group-hover:opacity-60 transition-opacity">
                    {study.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

