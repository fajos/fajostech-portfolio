'use client'

import { useEffect, useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement
      const variant = target.getAttribute('data-cursor-variant') || 'pointer'
      const text = target.getAttribute('data-cursor-text') || ''

      setCursorVariant(variant)
      setCursorText(text)
    }

    const handleMouseLeave = () => {
      setCursorVariant('default')
      setCursorText('')
    }

    window.addEventListener('mousemove', mouseMove)

    const updateListeners = () => {
      const clickables = document.querySelectorAll('a, button, .cursor-pointer, [data-cursor-variant]')
      clickables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter as EventListener)
        el.addEventListener('mouseleave', handleMouseLeave as EventListener)
      })
      return clickables
    }

    const clickables = updateListeners()

    // Handle dynamic content changes (like category filtering in Portfolio)
    const observer = new MutationObserver(() => {
      updateListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener)
        el.removeEventListener('mouseleave', handleMouseLeave as EventListener)
      })
      observer.disconnect()
    }
  }, [])

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(99, 102, 241, 0)',
      border: '2px solid rgba(99, 102, 241, 0.5)',
      transition: { type: 'spring' as const, damping: 25, stiffness: 300, mass: 0.5 }
    },
    pointer: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      transition: { type: 'spring' as const, damping: 25, stiffness: 300, mass: 0.5 }
    },
    view: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: 'rgba(99, 102, 241, 1)',
      border: '0px solid rgba(99, 102, 241, 0)',
      transition: { type: 'spring' as const, damping: 20, stiffness: 200, mass: 0.8 }
    },
    contact: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(34, 197, 94, 1)',
      border: '0px solid rgba(34, 197, 94, 0)',
      transition: { type: 'spring' as const, damping: 25, stiffness: 300, mass: 0.5 }
    }
  }

  return (
    <div className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]">
      <motion.div
        className="rounded-full flex items-center justify-center overflow-hidden"
        variants={variants}
        animate={cursorVariant}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="text-white text-xs font-black uppercase tracking-tighter"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default CustomCursor
