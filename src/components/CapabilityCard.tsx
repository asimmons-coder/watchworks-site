import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { type LucideIcon, ChevronRight } from 'lucide-react'

interface Props {
  title: string
  description: string
  icon: LucideIcon
  animationType: 'phone' | 'calendar' | 'routing' | 'followup' | 'clock' | 'integration'
  details?: string
  defaultOpen?: boolean
}

export function CapabilityCard({ title, description, icon: Icon, animationType, details, defaultOpen = false }: Props) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen)

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative p-8 rounded-md bg-white border border-brand-light hover:border-brand-blue/20 transition-all duration-500 cursor-pointer group overflow-hidden h-full ${
        isExpanded ? 'ring-2 ring-brand-blue/20 shadow-2xl z-10' : 'hover:shadow-xl hover:shadow-brand-blue/5'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-md flex items-center justify-center transition-all duration-500 ${
          isExpanded ? 'bg-brand-blue text-white' : 'bg-brand-light text-brand-slate group-hover:bg-brand-blue/10 group-hover:text-brand-blue'
        }`}>
          <Icon size={28} />
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          className="text-brand-slate/40 group-hover:text-brand-blue/60 transition-colors"
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>

      <motion.h3 layout="position" className="text-2xl font-display mb-3">{title}</motion.h3>
      <motion.p layout="position" className="text-brand-slate leading-relaxed font-sans">
        {description}
      </motion.p>

      {!isExpanded && (
        <p className="text-brand-blue/50 text-xs font-display font-semibold uppercase tracking-widest mt-4">
          Learn more
        </p>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-6 border-t border-brand-light mt-6"
          >
            <p className="text-brand-slate/70 text-sm leading-relaxed mb-6 font-sans">
              {details || "Our system integrates directly with your existing workflows to ensure seamless operation without manual intervention."}
            </p>

            <div className="bg-brand-light/50 rounded-md p-4 flex items-center justify-center h-24">
              {animationType === 'phone' && (
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                      className="w-2 h-8 bg-brand-blue rounded-full"
                    />
                  ))}
                </div>
              )}
              {animationType === 'calendar' && (
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                      className="w-4 h-4 bg-brand-blue/40 rounded-sm"
                    />
                  ))}
                </div>
              )}
              {animationType === 'routing' && (
                <div className="relative w-full h-1 bg-brand-blue/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ left: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-1/3 bg-brand-blue"
                  />
                </div>
              )}
              {['followup', 'clock', 'integration'].includes(animationType) && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="text-brand-blue/20"
                >
                  <Icon size={48} />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
    </motion.div>
  )
}
