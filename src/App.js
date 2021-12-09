import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "❤️": "love",
  "😍": "looking lovely",
  "😘": "Face Blowing a Kiss",
  "🤕": "Face with Head-Bandage",
  "😔": "Pensive Face",
  "😕": "Confused Face",
  "😲": "Astonished Face"
};

const emojiKeys = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function emojiHandler() {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not found, Try something else";
    }

    setMeaning(meaning);
  }

  function emojiClickEvent(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>
      <input placeholder="Enter an emoji from below" onChange={emojiHandler} />
      <div className="meaningText">{meaning}</div>

      <div className="emojiDiv">
        {emojiKeys.map((emoji) => (
          <span className="emojies" onClick={() => emojiClickEvent(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
