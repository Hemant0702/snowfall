import { motion } from "framer-motion";

export default function EntryScreen({ setMode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center
      bg-gradient-to-b from-indigo-950 via-black to-black
      text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/15 backdrop-blur-lg
        p-10 rounded-2xl max-w-md w-full text-center z-10
        shadow-2xl border border-white/20"
      >
        <div className="text-5xl mb-6">🎄</div>

        <p className="text-lg leading-relaxed text-white/90 mb-6">
          Hey.
          <br />
          I made something small.
          <br />
          You don’t need to react to it.
        </p>

        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Just explore it when you feel like it.
        </p>

        <button
          onClick={() => setMode("explore")}
          className="px-8 py-3 rounded-full
          bg-amber-400/90 hover:bg-amber-300
          text-black font-medium transition"
        >
         Okay, I’ll explore
        </button>
      </motion.div>
    </div>
  );
}
