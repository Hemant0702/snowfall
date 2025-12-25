import { motion } from "framer-motion";
import { useState } from "react";

export default function SantaEntryScreen({ setMode }) {
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);

  return (
<div className="min-h-screen w-full relative overflow-hidden
  bg-gradient-to-b from-rose-500 via-orange-300 to-amber-200
  flex items-center justify-center"
>
  {/* Snowfall goes here if used */}

  <motion.div
    className="relative z-10
    bg-white/20 backdrop-blur-lg
    p-10 rounded-3xl max-w-md w-full text-center
    shadow-2xl border border-white/30"
  >
    <div className="absolute inset-0 blur-2xl bg-white/30 rounded-3xl -z-10" />
        {/* 🎅 Santa */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mb-6"
        >
          🎅
        </motion.div>

        {!answered ? (
          <>
            <p className="text-lg leading-relaxed mb-8">
              Ho ho hello! 🎄
              <br /><br />
              I’m Santa.
              <br />
              I don’t usually pop up on screens,
              <br />
              but tonight felt a little special.
              <br /><br />
              I’m really happy to meet you.
              <br />
              Are you happy to meet me too?
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => {
                  setAnswered(true);
                  setAnswer("yes");
                }}
                className="px-8 py-3 rounded-full
                bg-green-500/90 hover:bg-green-400
                text-white font-medium transition"
              >
                Yes 😊
              </button>

              <button
                onClick={() => {
                  setAnswered(true);
                  setAnswer("no");
                }}
                className="px-8 py-3 rounded-full
                bg-white/30 hover:bg-white/40
                text-white font-medium transition"
              >
                Not sure
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-lg leading-relaxed mb-8">
              {answer === "yes"
                ? "That makes me smile 😊"
                : "That’s okay.\nI’m still glad you stopped by."}
            </p>

            <button
              onClick={() => setMode("postentry")}
              className="px-8 py-3 rounded-full
              bg-amber-400/90 hover:bg-amber-300
              text-black font-medium transition"
            >
              Let’s continue 🎁
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
