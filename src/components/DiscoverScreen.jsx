import { motion } from "framer-motion";
import { useState } from "react";

const thoughts = [
    {
      icon: "🎶",
      text: "You strike me as someone who enjoys moments — not just days."
    },
    {
      icon: "🌆",
      text: "I’ve often thought it’d be nice to explore a city slowly, with the right company."
    },
    {
      icon: "📸",
      text: "Some people notice beauty naturally. I think that’s a lovely trait."
    },
    {
      icon: "🌍",
      text: "There’s so much to explore — places, conversations, little adventures."
    },
    {
      icon: "✨",
      text: "I’d genuinely enjoy discovering a few of those with you."
    }
  ];
  

// Safe positions (no overlap)
const positions = [
  { top: "20%", left: "20%" },
  { top: "35%", left: "60%" },
  { top: "55%", left: "30%" },
  { top: "65%", left: "70%" },
  { top: "40%", left: "45%" }
];

// Soft color accents per thought
const bubbleColors = [
  "bg-emerald-400/15",
  "bg-sky-400/15",
  "bg-violet-400/15",
  "bg-amber-400/15",
  "bg-rose-400/15"
];

export default function DiscoverScreen({ setMode }) {
  const [opened, setOpened] = useState([]);

  const handleOpen = (index) => {
    if (!opened.includes(index)) {
      setOpened([...opened, index]);
    }
  };

  const allOpened = opened.length === thoughts.length;

  return (
    <div
      className="min-h-screen relative overflow-hidden
      bg-gradient-to-b from-indigo-950 via-black to-rose-900
      animated-bg text-white"
    >
      <p className="absolute top-8 w-full text-center text-white/70">
        Tap anything that catches your eye.
      </p>

      {thoughts.map((item, index) => {
        const isOpened = opened.includes(index);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.25 }}
            className="absolute text-center"
            style={positions[index]}
          >
            {!isOpened ? (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="relative cursor-pointer"
                onClick={() => handleOpen(index)}
              >
                {/* ✨ Glow aura */}
                <div
                  className="absolute inset-0 rounded-full
                  bg-amber-400/30 blur-xl opacity-70"
                />
                <div className="relative text-4xl">
                  {item.icon}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 backdrop-blur-md
                p-4 rounded-xl text-sm max-w-[220px]
                leading-relaxed ${bubbleColors[index]}`}
              >
                {item.text}
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {allOpened && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="absolute bottom-12 w-full flex justify-center"
        >
          <button
            onClick={() => setMode("cards")}
            className="px-8 py-3 rounded-full
            bg-amber-400/90 hover:bg-amber-300
            text-black font-medium transition"
          >
            There’s a little more
          </button>
        </motion.div>
      )}
    </div>
  );
}
