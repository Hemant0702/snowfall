import { motion } from "framer-motion";

export default function PauseScreen({ setMode }) {
  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-b from-black via-indigo-950 to-black
      text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-md text-center"
      >
        <p className="text-lg leading-relaxed text-white/90 mb-6">
          That was all I wanted to ask.
        </p>

        <p className="text-lg leading-relaxed text-white/80 mb-6">
          I know this was a little unusual.
        </p>

        <p className="text-lg leading-relaxed text-white/80 mb-10">
          Before it ends, there’s one last thing I want to say.
        </p>

        <button
          onClick={() => setMode("end")}
          className="px-8 py-3 rounded-full
          bg-amber-400/90 hover:bg-amber-300
          text-black font-medium transition"
        >
          Okay
        </button>
      </motion.div>
    </div>
  );
}
