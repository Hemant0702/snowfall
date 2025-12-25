import { motion } from "framer-motion";
import { useState } from "react";

export default function CardsScreen({ setMode }) {
  const lines = [
    {
      icon: "🪷",
      text: "I’ve always appreciated how thoughtfully you carry yourself. It’s something I genuinely respect."
    },
    {
      icon: "👀",
      text: "You seem to notice places, moments, and little details — and that says a lot."
    },
    {
      icon: "🌿",
      text: "There’s a calm confidence in the way you move through things."
    },
    {
      icon: "✨",
      text: "I don’t say this lightly, but I genuinely admire that about you."
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white/15 backdrop-blur-lg
      p-10 rounded-2xl max-w-md text-center z-10
      shadow-2xl border border-white/20"
    >
      {/* ICON */}
      <motion.div
        key={lines[index].icon}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-4xl mb-6"
      >
        {lines[index].icon}
      </motion.div>

      {/* TEXT */}
      <motion.p
        key={lines[index].text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg leading-relaxed text-white/90 mb-10"
      >
        {lines[index].text}
      </motion.p>

      {/* BUTTON */}
      {index < lines.length - 1 ? (
        <button
          onClick={() => setIndex(index + 1)}
          className="px-8 py-3 rounded-full
          bg-amber-400/90 hover:bg-amber-300
          text-black font-medium transition"
        >
          Continue
        </button>
      ) : (
        <button
          onClick={() => setMode("playful")}
          className="px-8 py-3 rounded-full
          bg-amber-400/90 hover:bg-amber-300
          text-black font-medium transition"
        >
          Let’s play something
        </button>
      )}
    </motion.div>
  );
}
