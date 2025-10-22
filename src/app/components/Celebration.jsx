"use client"

import { motion } from "motion/react"
import { Gift, Sparkles, Heart } from "lucide-react"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function Celebration({ onNext }) {
  // 💗 Gradient color palette for heart confetti
  const loveGradients = [
    "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    "linear-gradient(135deg, #ff6a88 0%, #ff99ac 50%, #a44af1 100%)",
    "linear-gradient(135deg, #ffb6b9 0%, #fae3d9 50%, #bbded6 100%)",
    "linear-gradient(135deg, #fbd3e9 0%, #bb377d 100%)",
    "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
    "linear-gradient(135deg, #f00000 0%, #ff0099 100%)",
    "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  ]

  // Extract pure hex colors from gradients
  const loveColors = loveGradients.flatMap(
    (g) => g.match(/#[0-9A-Fa-f]{6}/g) || []
  )

  useEffect(() => {
    const duration = 2500
    const end = Date.now() + duration

    const frame = () => {
      // Heart confetti bursts from both sides
      for (let side = 0; side < 2; side++) {
        confetti({
          particleCount: 8,
          angle: side === 0 ? 60 : 120,
          spread: 80,
          origin: { x: side === 0 ? 0 : 1 },
          colors: loveColors,
          shapes: ["heart"],
          scalar: 1.2,
          ticks: 250,
        })
      }

      if (Date.now() < end) requestAnimationFrame(frame)
    }

    frame()
  }, [])

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* 🌈 Floating Pulsing Gradient Orbs (Romantic Atmosphere) */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse"
      />
      <motion.div
        className="absolute bottom-32 right-24 w-48 h-48 bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 rounded-full blur-3xl opacity-40 animate-pulse"
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-56 h-56 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"
      />

      {/* 🎁 Glowing Gift + ❤️ Heart Fusion Animation */}
      <motion.div
        className="relative mb-12"
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer glowing gradient sphere */}
        <div className="w-36 h-36 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden">
          {/* Shimmer pass across the surface */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Dual Icons - Gift + Heart fusion */}
          <div className="flex items-center justify-center space-x-2 relative z-10">
            <Gift className="w-12 h-12 text-white drop-shadow-lg" />
            <Heart className="w-10 h-10 text-pink-300 drop-shadow-lg" />
          </div>
        </div>
      </motion.div>

      {/* ✨ Title + Subtext */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4"
        style={{ filter: "drop-shadow(0 0 30px rgba(255,105,180,0.5))" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Time to Celebrate!
      </motion.h1>

      <motion.p
        className="text-xl text-pink-500 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Celebrating connections, confetti, and pure affection ✨
      </motion.p>

      {/* 🪩 CTA Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300"
      >
        <motion.div className="flex items-center space-x-2" whileTap={{ scale: 0.95 }}>
          <Gift className="w-5 h-5" />
          <span className="font-semibold">Let's Celebrate!</span>
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}
