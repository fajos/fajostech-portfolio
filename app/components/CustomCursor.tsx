'use client'

import { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseEnter = () => setCursorVariant('pointer')
    const mouseLeave = () => setCursorVariant('default')

    window.addEventListener('mousemove', mouseMove)

    // Select all clickable elements
    const clickables = document.querySelectorAll('a, button, .cursor-pointer')
    clickables.forEach(el => {
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnter)
        el.removeEventListener('mouseleave', mouseLeave)
      })
    }
  }, [])

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: 'spring' as const, damping: 20, stiffness: 250, mass: 0.5 }
    },
    pointer: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      mixBlendMode: 'difference' as const,
      transition: { type: 'spring' as const, damping: 20, stiffness: 250, mass: 0.5 }
    }
  }

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-indigo-500 pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
    />
  )
}

export default CustomCursor