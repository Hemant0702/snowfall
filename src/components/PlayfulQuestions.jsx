import { useState } from "react";
import { motion } from "framer-motion";

export default function PlayfulQuestions({
    questions,
    background,
    phase,
    addQuestionResponse,
    onComplete
  }) {
  const [index, setIndex] = useState(0);

  const handleAnswer = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center
      text-white ${background}`}
    >
      {/* subtle stars */}
      <div className="absolute inset-0 opacity-20
        bg-[radial-gradient(white_1px,transparent_1px)]
        bg-[size:24px_24px]"
      />

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/10 backdrop-blur-lg
        p-10 rounded-2xl max-w-lg w-full text-center
        shadow-2xl border border-white/20"
      >
        {/* QUESTION */}
        <p className="text-xl leading-relaxed mb-10">
          {questions[index].question}
        </p>

        {/* OPTIONS */}
        <div className="flex flex-col items-center gap-4">
          {questions[index].options.map((option, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                addQuestionResponse({
                  phase,
                  question: questions[index].question,
                  answer: option
                });
                handleAnswer();
              }}
              
              className="px-8 py-3 rounded-full
              bg-white/20 hover:bg-white/30
              text-white font-medium
              transition w-full max-w-sm"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
