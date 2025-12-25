export default function GiftIntentScreen({ setMode, updateResponse }) {
    return (
        <div className="min-h-screen flex items-center justify-center
        bg-gradient-to-b from-purple-900 via-indigo-950 to-pink-900
        text-white">      
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl max-w-md text-center">
        <p className="text-center text-xl mb-4">
            Santa’s been thinking… 🎄
          </p>

          <p className="text-center text-l mb-8">
            Sometimes Christmas gifts aren’t about surprise,
            but about making someone smile.
            <br /><br />
            He has a small idea in mind —
            nothing big, just something thoughtful.
          </p>
  
          <button
            onClick={() => {
              updateResponse("giftChoice", "yes");
              setMode("address");
            }}
            className="mb-4 px-8 py-3 rounded-full bg-amber-400 text-black"
          >
            Yes, that’s okay
          </button>
  
          <button
            onClick={() => {
              updateResponse("giftChoice", "skipped");
              setMode("end");
            }}
            className="px-8 py-3 rounded-full bg-white/30"
          >
            Skip this
          </button>
        </div>
      </div>
    );
  }
  