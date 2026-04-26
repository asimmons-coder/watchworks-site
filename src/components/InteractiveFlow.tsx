import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Search, Cpu, Zap } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: "We listen.",
    description: "We learn how your business actually operates. The calls, the scheduling, the follow-ups, the gaps.",
    icon: Search,
    animation: "waves"
  },
  {
    id: 2,
    title: "We build.",
    description: "Custom AI systems designed for your specific workflows. Not off-the-shelf. Not a chatbot.",
    icon: Cpu,
    animation: "nodes"
  },
  {
    id: 3,
    title: "It runs.",
    description: "Your operations run like clockwork. 24/7. No sick days. No turnover.",
    icon: Zap,
    animation: "pulse"
  }
]

function StepAnimation({ type, isActive }: { type: string, isActive: boolean }) {
  const opacity = isActive ? 1 : 0.3

  if (type === "waves") {
    return (
      <div className="flex gap-1 items-center" style={{ opacity }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={isActive ? { height: [10, 40, 10] } : { height: 20 }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
            className="w-1.5 bg-brand-blue rounded-full"
          />
        ))}
      </div>
    )
  }

  if (type === "nodes") {
    return (
      <div className="relative w-16 h-16" style={{ opacity }}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={isActive ? {
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              y: [0, (i < 2 ? 20 : -20), 0]
            } : { x: 0, y: 0 }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
            className="absolute w-3 h-3 bg-brand-blue rounded-full"
            style={{
              left: i % 2 === 0 ? '0%' : '100%',
              top: i < 2 ? '0%' : '100%'
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" />
        </svg>
      </div>
    )
  }

  if (type === "pulse") {
    return (
      <div className="relative flex items-center justify-center" style={{ opacity }}>
        <motion.div
          animate={isActive ? { scale: [1, 2, 1], opacity: [0.3, 0, 0.3] } : { scale: 1, opacity: 0.1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute w-16 h-16 bg-brand-blue rounded-full"
        />
        <motion.div
          animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-4 bg-brand-blue rounded-full relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        />
      </div>
    )
  }

  return null
}

export function InteractiveFlow() {
  const [activeStep, setActiveStep] = useState(1)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step) => {
        const Icon = step.icon
        const isActive = activeStep === step.id

        return (
          <div
            key={step.id}
            className={`relative p-8 rounded-md border transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-white border-brand-blue shadow-xl shadow-brand-blue/5"
                : "bg-brand-light/50 border-transparent hover:border-brand-blue/30"
            }`}
            onClick={() => setActiveStep(step.id)}
            onMouseEnter={() => setActiveStep(step.id)}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-md flex items-center justify-center transition-colors ${
                isActive ? "bg-brand-blue text-white" : "bg-brand-steel/10 text-brand-steel"
              }`}>
                <Icon size={24} />
              </div>
              <span className={`text-sm font-display font-bold uppercase tracking-widest transition-colors ${
                isActive ? "text-brand-blue" : "text-brand-slate/40"
              }`}>
                Step {step.id}
              </span>
            </div>

            <h3 className="text-xl mb-3">{step.title}</h3>
            <p className="text-brand-navy/70 leading-relaxed font-sans">
              {step.description}
            </p>

            <div className="mt-6 h-20 flex items-center justify-center">
              {!shouldReduceMotion && (
                <StepAnimation type={step.animation} isActive={isActive} />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
