import React, { useState } from "react";
import "./app.css";
import Axios from "axios";

import Header from "./Components/Header/Header";
import Card from "./Components/UI/Card/Card";

const App = () => {
  const [shortenedText, setShortenedText] = useState(null);
  const [text, setText] = useState("");

  /*
    send request to api
  */
  const shorten = () => {
    Axios.post("https://link-short-server-b.herokuapp.com/api/shorten", {
      input: text
    })
      .then(res => {
        setShortenedText(res.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Card>
          <div className="cardContents">
            <label>Enter text to shorten</label>
            <input
              type="text"
              onChange={event => setText(event.target.value)}
              value={text}
            />

            <button onClick={() => shorten()}>Shorten</button>

            {shortenedText && <p>Shortened text: {shortenedText}</p>}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
