import { useEffect, useState, useRef } from 'react'
import { useInView, animate } from 'motion/react'

interface Props {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

export function Counter({ value, prefix = "", suffix = "", duration = 2 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      })
      return () => controls.stop()
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="font-display font-bold text-brand-blue">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
