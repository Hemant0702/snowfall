import { motion } from "framer-motion";

export default function Snowfall() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {Array.from({ length: 25 }).map((_, i) => {
        const size = Math.random() * 8 + 6; // BIGGER
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: "-10%",
              boxShadow: "0 0 8px rgba(255,255,255,0.8)", // GLOW
            }}
            className="absolute rounded-full bg-white"
            animate={{
              top: "110%",
              x: ["0%", "20%", "-20%", "0%"], // DRIFT
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
}
