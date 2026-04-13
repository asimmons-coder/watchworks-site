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
            className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-white border-brand-blue shadow-xl shadow-brand-blue/5"
                : "bg-brand-light/50 border-transparent hover:border-brand-blue/30"
            }`}
            onClick={() => setActiveStep(step.id)}
            onMouseEnter={() => setActiveStep(step.id)}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
              isActive ? "bg-brand-blue text-white" : "bg-brand-steel/10 text-brand-steel"
            }`}>
              <Icon size={24} />
            </div>

            <h3 className="text-xl mb-3">{step.title}</h3>
            <p className="text-brand-navy/70 leading-relaxed font-sans">
              {step.description}
            </p>

            <div className="mt-8 h-24 flex items-center justify-center overflow-hidden">
              {isActive && !shouldReduceMotion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {step.animation === "waves" && (
                    <div className="flex gap-1 items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [10, 40, 10] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                          className="w-1.5 bg-brand-blue rounded-full"
                        />
                      ))}
                    </div>
                  )}
                  {step.animation === "nodes" && (
                    <div className="relative w-16 h-16">
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            x: [0, (i % 2 === 0 ? 20 : -20), 0],
                            y: [0, (i < 2 ? 20 : -20), 0]
                          }}
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
                  )}
                  {step.animation === "pulse" && (
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute w-16 h-16 bg-brand-blue rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-4 h-4 bg-brand-blue rounded-full relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
