import React, { useState } from "react";
import "./styles.css";
// import React from "react";
const emojiDictionary = {
  "🙂": "smiling",
  "😯": "suprised",
  "😪": "sleepy",
  "😂": "LOL",
  "😊": "Blushing",
  "😤": "Angry",
  "😴": "sleepy"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry ! Not found in our database";
    }
    setmeaning(meaning);
  }
  function emojiClickHander(emoji) {
    // var userInput = event.target.value;
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Interpreter !</h1>
      <input
        placeholder="Drop your emoji here !"
        onChange={emojiInputHandler}
      />

      <h2>{meaning}</h2>

      <h4>These are the Emojis 👇 in our Database</h4>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHander(emoji)}
            style={{ fontSize: "3rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
