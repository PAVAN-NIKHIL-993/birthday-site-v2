"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Gift, Cake } from "lucide-react"

export default function Countdown({ onComplete }) {
  const [count, setCount] = useState(5) // start from 5
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (count <= 0) {
      setFinished(true)
      onComplete && onComplete()
      return
    }

    const timer = setTimeout(() => setCount(count - 1), 1000)

    return () => clearTimeout(timer)
  }, [count, onComplete])

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="mb-6"
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Cake className="w-16 h-16 text-pink-400 mx-auto" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4"
          style={{ filter: "drop-shadow(0 0 25px rgba(236, 72, 153, 0.3))" }}
        >
          Birthday Countdown
        </motion.h1>
        <p className="text-lg text-purple-300">The magical moment approaches...</p>
      </motion.div>

      {/* Countdown Box or Cutepie Message */}
      {finished ? (
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            It’s your day, cutiepie 💖🎂
          </motion.h2>

          <motion.p
            className="text-lg md:text-2xl text-pink-200 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Let the magic unfold ✨
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.span
            className="text-5xl md:text-7xl font-bold text-white"
            key={count}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </motion.span>
        </motion.div>
      )}

      {/* Footer */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Gift className="w-8 h-8 text-purple-400 mx-auto mb-2" />
        <p className="text-purple-300 text-base">The surprise is just moments away💖</p>
      </motion.div>
    </motion.div>
  )
}
