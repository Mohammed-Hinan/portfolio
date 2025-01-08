'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { createContext, useContext } from 'react'

const PageTransitionContext = createContext({})

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return (
    <PageTransitionContext.Provider value={{}}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  )
}

