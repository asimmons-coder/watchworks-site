import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface Node {
  id: number
  x: number
  y: number
  isGap: boolean
  isFixed: boolean
}

export function GapFinderRadar() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const initialNodes = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      isGap: Math.random() > 0.6,
      isFixed: false,
    }))
    setNodes(initialNodes)

    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360)
    }, 20)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setNodes(prev => prev.map(node => {
      const angle = (Math.atan2(node.y - 50, node.x - 50) * 180) / Math.PI + 180
      const diff = Math.abs(angle - rotation)
      if (diff < 10 && node.isGap && !node.isFixed) {
        return { ...node, isFixed: true }
      }
      return node
    }))
  }, [rotation])

  return (
    <div className="relative w-full max-w-[500px] aspect-square bg-white/5 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden group shadow-2xl shadow-brand-blue/10">
      {/* Radar Sweep */}
      <motion.div
        style={{ rotate: rotation, originX: '50%', originY: '50%' }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 w-1/2 h-[120px] -translate-y-full bg-gradient-to-t from-brand-blue/60 to-transparent origin-bottom -rotate-90 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-brand-blue shadow-[0_0_20px_rgba(59,130,246,1)]" />
      </motion.div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        {[20, 40, 60, 80].map(radius => (
          <div
            key={radius}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full"
            style={{ width: `${radius}%`, height: `${radius}%` }}
          />
        ))}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white" />
      </div>

      {/* Nodes */}
      {nodes.map(node => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: node.isGap
              ? (node.isFixed ? '#3B82F6' : '#EF4444')
              : '#FFFFFF33'
          }}
          className="absolute w-3 h-3 rounded-full z-20"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {node.isGap && !node.isFixed && (
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute inset-0 bg-red-500 rounded-full"
            />
          )}
          {node.isFixed && (
            <motion.div
              initial={{ scale: 2, opacity: 1 }}
              animate={{ scale: 1, opacity: 0 }}
              className="absolute inset-0 bg-brand-blue rounded-full"
            />
          )}
        </motion.div>
      ))}

      {/* Center Point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full z-30 shadow-[0_0_10px_white]" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 whitespace-nowrap font-display">
        Scanning for operational gaps...
      </div>
    </div>
  )
}
