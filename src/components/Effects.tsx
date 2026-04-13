import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

export function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      const element = document.elementFromPoint(e.clientX, e.clientY)
      if (element) {
        const isNavy = element.closest('.bg-brand-navy')
        setIsVisible(!!isNavy)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{
        left: mousePos.x,
        top: mousePos.y,
      }}
    />
  )
}
