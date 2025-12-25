import { motion } from "framer-motion";

export default function EndingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-b from-black via-indigo-950 to-black
      text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg text-center"
      >
        <div className="text-4xl mb-8">🌙</div>

        <p className="text-lg leading-relaxed text-white/85 mb-8">
          I’m glad you spent some time here.
        </p>

        <p className="text-base leading-relaxed text-white/65 mb-10">
          That’s all for now.
        </p>

        <p className="text-sm text-white/50 italic">
          Take care.
        </p>
      </motion.div>
    </div>
  );
}
