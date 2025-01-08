'use client'

import React, { useState, useEffect } from 'react'
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from 'lucide-react'

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)

  const navigation = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
  ]

  const caseStudies = [
    { id: '01', name: "Doctor's United", href: '#' },
    { id: '02', name: 'LooMY', href: '#' },
    { id: '03', name: 'Portfolio', href: '#' },
  ]

  const sections = ['home', 'about', 'case-studies']
  
  useEffect(() => {
    // Initial page load animation
    setIsLoading(false)
    
    // Intersection Observer for section detection
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Scroll event listener and direction detection
  useEffect(() => {
    let lastScrollY = window.scrollY
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return
      
      const scrollDirection = e.deltaY > 0 ? 'down' : 'up'
      const currentIndex = sections.indexOf(activeSection)
      
      let targetIndex = currentIndex
      if (scrollDirection === 'down' && currentIndex < sections.length - 1) {
        targetIndex = currentIndex + 1
      } else if (scrollDirection === 'up' && currentIndex > 0) {
        targetIndex = currentIndex - 1
      }

      if (targetIndex !== currentIndex) {
        setIsScrolling(true)
        const targetSection = document.getElementById(sections[targetIndex])
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sections[targetIndex])
          
          // Reset scrolling state after animation
          setTimeout(() => {
            setIsScrolling(false)
          }, 1000) // Adjust timing based on your scroll animation duration
        }
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [activeSection, sections, isScrolling])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                mh
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium relative group
                    ${activeSection === item.href.slice(1) ? 'text-rose-500' : ''}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 transition-transform duration-300"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-white via-rose-50 to-purple-50">
        {/* Your Hero Section content */}
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-bl from-white via-purple-50 to-rose-50">
        {/* Your About Section content */}
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-tr from-white via-rose-50 to-purple-50">
        {/* Your Case Studies Section content */}
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-rose-50">
        {/* Your Footer content */}
      </footer>
    </div>
  )
}

export default Portfolio
