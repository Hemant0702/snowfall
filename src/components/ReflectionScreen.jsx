import { motion } from "framer-motion";

export default function ReflectionScreen({ setMode }) {
  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-b from-slate-950 via-indigo-950 to-amber-900
      text-white relative overflow-hidden"
    >
      {/* soft glow */}
      <div className="absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.15),transparent_60%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative bg-white/15 backdrop-blur-lg
        p-10 rounded-2xl max-w-lg text-center
        shadow-2xl border border-white/20"
      >
        <p className="text-xl leading-relaxed mb-8 text-white/90">
          I don’t really know all your answers.
          <br /><br />
          But the way you moved through this —
          calmly, thoughtfully —
          says more than words usually do.
        </p>

        <p className="text-lg leading-relaxed mb-10 text-white/80">
          I genuinely enjoyed creating this,
          just to share a small moment with you.
        </p>

        <button
          onClick={() => setMode("invite")}
          className="px-8 py-3 rounded-full
          bg-amber-400/90 hover:bg-amber-300
          text-black font-medium transition"
        >
          One last thing
        </button>
      </motion.div>
    </div>
  );
}
