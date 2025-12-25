import { motion } from "framer-motion";
import { useState } from "react";

export default function AddressScreen({ onSubmit, onSkip }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  return (
    <div className="min-h-screen relative flex items-center justify-center
      bg-gradient-to-br from-sky-400 via-fuchsia-300 to-amber-300
      text-slate-900 px-6 overflow-hidden"
    >
      {/* floating color blobs — NON INTERACTIVE */}
      <motion.div
        className="pointer-events-none absolute -top-20 -left-20
        w-96 h-96 bg-pink-400/40 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0
        w-96 h-96 bg-sky-400/40 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 bg-white/60 backdrop-blur-xl
        p-8 rounded-3xl max-w-md w-full
        shadow-2xl"
      >
        <div className="text-4xl mb-4 text-center">🎁</div>
        <p className="text-center text-xl mb-4">
            Alright then 🎁
          </p>

          <p className="text-center text-slate-700 mb-8 leading-relaxed">
            Santa just needs a little help now.
            <br /><br />
            If you’re comfortable sharing,
            this will help him make sure it reaches the right place.
          </p>

        <div className="space-y-4">
          <input
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl
            bg-white/80 placeholder-slate-500
            focus:outline-none"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Mobile number (optional)"
            className="w-full px-4 py-3 rounded-xl
            bg-white/80 placeholder-slate-500
            focus:outline-none"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Address (optional)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl
            bg-white/80 placeholder-slate-500
            focus:outline-none resize-none"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => {
              if (onSubmit) onSubmit(form);
            }}
            className="px-6 py-3 rounded-full
            bg-emerald-500 hover:bg-emerald-400
            text-white font-medium transition"
          >
            Help Santa 🎄
          </button>

          <button
            type="button"
            onClick={() => {
              if (onSkip) onSkip();
            }}
            className="px-6 py-3 rounded-full
            bg-slate-200 hover:bg-slate-300
            text-slate-700 font-medium transition"
          >
            Skip this
          </button>
        </div>
      </motion.div>
    </div>
  );
}
