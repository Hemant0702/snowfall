import { useState } from "react";
import Snowfall from "./components/Snowfall";
import EntryScreen from "./components/EntryScreen";
import DiscoverScreen from "./components/DiscoverScreen";
import CardsScreen from "./components/CardsScreen";
import PlayfulQuestions from "./components/PlayfulQuestions";
import EndingScreen from "./components/EndingScreen";
import PauseScreen from "./components/PauseScreen";
import SantaEntryScreen from "./components/SantaEntryScreen";
import ReflectionScreen from "./components/ReflectionScreen";
import InvitationScreen from "./components/InvitationScreen";
import GiftIntentScreen from "./components/GiftIntentScreen";
import AddressScreen from "./components/AddressScreen";
import { sendEmail } from "./utils/sendEmail";
import {
  playfulQuestions,
  calmQuestions,
  warmQuestions
} from "./data/questionPhases";


export default function App() {
  const [mode, setMode] = useState("entry");
  const [responses, setResponses] = useState({
    santa: null,
    entry: null,
    discover: [],
    cards: [],
    questions: [],   // 👈 all question phases go here
    invitation: null,
    giftChoice: null,
    address: null
  });
  const updateResponse = (key, value) => {
    setResponses(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const addQuestionResponse = (data) => {
    setResponses(prev => ({
      ...prev,
      questions: [...prev.questions, data]
    }));
  };  

  const finishExperience = async (extraData = null) => {
    const finalResponses = {
      ...responses,
      ...(extraData && { address: extraData })
    };
  
    setResponses(finalResponses); // keep state in sync (optional but clean)
  
    await sendEmail(finalResponses);
  
    setMode("end");
  };
  
  

  return (
    <div
      className={`min-h-screen relative overflow-hidden text-white
      ${
        ["entry", "cards"].includes(mode)
          ? "flex items-center justify-center bg-gradient-to-b from-blue-900 via-black to-black"
          : ""
      }`}
    >
      {/* Snowfall only for calm phases */}
      {["entry", "cards"].includes(mode) && <Snowfall />}

      {mode === "entry" && <SantaEntryScreen setMode={setMode} />}
      {mode === "postentry" && <EntryScreen setMode={setMode} />}
      {mode === "explore" && <DiscoverScreen setMode={setMode} />}
      {mode === "cards" && <CardsScreen setMode={setMode} />}
      {/* {mode === "playful" && <PlayfulQuestions setMode={setMode} />} */}
      {mode === "pause" && <PauseScreen setMode={setMode} />}
      {mode === "end" && <EndingScreen />}
      {mode === "reflection" && <ReflectionScreen setMode={setMode} />}
      {mode === "invite" && (<InvitationScreen setMode={setMode} updateResponse={updateResponse}/>)}
      {mode === "playful" && (
        <PlayfulQuestions
          questions={playfulQuestions}
          phase="playful"
          background="bg-gradient-to-b from-indigo-950 via-purple-900 to-rose-900"
          addQuestionResponse={addQuestionResponse}
          onComplete={() => setMode("calm")}
        />
      )}

      {mode === "calm" && (
        <PlayfulQuestions
          questions={calmQuestions}
          phase="calm"
          background="bg-gradient-to-b from-emerald-900 via-teal-900 to-slate-900"
          addQuestionResponse={addQuestionResponse}
          onComplete={() => setMode("warm")}
        />
      )}

      {mode === "warm" && (
        <PlayfulQuestions
          questions={warmQuestions}
          phase="warm"
          background="bg-gradient-to-b from-rose-900 via-amber-800 to-orange-700"
          addQuestionResponse={addQuestionResponse}
          onComplete={() => setMode("reflection")}
        />
      )}
      {mode === "gift" && (
  <GiftIntentScreen
    setMode={setMode}
    updateResponse={updateResponse}
    finishExperience={finishExperience}
  />
)}

{mode === "address" && (
  <AddressScreen
  onSubmit={(form) => finishExperience(form)}
  onSkip={() => finishExperience(null)}
/>
)}

    </div>
  );
}
