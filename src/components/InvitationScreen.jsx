import { motion } from "framer-motion";

export default function InvitationScreen({ setMode, updateResponse }) {
  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-b from-rose-800 via-amber-700 to-indigo-900
      text-white relative overflow-hidden"
    >
      {/* soft city glow */}
      <div className="absolute inset-0
        bg-[radial-gradient(circle_at_bottom,rgba(255,180,120,0.18),transparent_60%)]"
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
          There’s something I’ve been meaning to say —
          <br /><br />
          If you ever feel like stepping out,
          not for anything grand,
          just for a quiet evening…
        </p>

        <p className="text-lg leading-relaxed mb-8 text-white/80">
          Maybe a walk around old streets of pink city,
          or sitting somewhere calm,
          letting music or the city do the talking.
        </p>

        <p className="text-base leading-relaxed mb-10 text-white/70 italic">
          Just a simple moment, if you’d like.
        </p>

        <div className="flex justify-center gap-6">
        <button
  onClick={() => {
    updateResponse("invitation", "yes");
    setMode("gift");
  }}
  className="px-8 py-3 rounded-full
  bg-amber-400/90 hover:bg-amber-300
  text-black font-medium transition"
>
  I’d like that
</button>

<button
  onClick={() => {
    updateResponse("invitation", "maybe");
    setMode("gift"); 
  }}
  className="px-8 py-3 rounded-full
  bg-white/20 hover:bg-white/30
  text-white font-medium transition"
>
  Maybe another time
</button>

        </div>
      </motion.div>
    </div>
  );
}
