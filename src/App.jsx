import { useState } from "react";
import Gif from "./Components/Gif.jsx";
import bearBouncing from "./Assets/bear-bouncing.gif";
import bearCuddling from "./Assets/bear-cuddling.gif";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [pressCount, setPressCount] = useState(0);

  const phrases = [
    "No",
    "Are You Sure",
    "Really sure?",
    "Are you positive???",
    "Think again!",
    "Pookie please",
    "Just think about it",
    "Surely not?",
    "You might regret this",
    "Give it another thought!",
    "Are you absolutely certain?",
    "Have a heart!",
    "Dont be so cold!",
    "Change of heart?",
    "Won't you reconsider?",
    "If you say no, I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "I'll be very very very very sad",
    "Ok fine, I'll stop asking...",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very very very sad",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  const yesSize = pressCount * 15;

  function handleYesPressed() {
    setYesPressed(true);
  }

  function handleNoPressed() {
    setPressCount(pressCount + 1);
  }

  function newPhrase() {
    return phrases[Math.min(pressCount, phrases.length - 1)];
  }

  return (
    <>
      <main>
        {yesPressed ? (
          <Gif gif={bearCuddling} text={"Ok yay!!"} />
        ) : (
          <Gif gif={bearBouncing} text={"Will you be my valentine?"} />
        )}
        <div>
          {yesPressed ? (
            <></>
          ) : (
            <>
              <button
                style={{
                  backgroundColor: "#4CBB17",
                  fontSize: yesSize + 16,
                }}
                onClick={handleYesPressed}
              >
                Yes
              </button>
              <button
                style={{ backgroundColor: "#D2042D" }}
                onClick={handleNoPressed}
              >
                {newPhrase()}
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
