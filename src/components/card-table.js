import React, { useState, useEffect } from "react"
import EmojiCard from "./emoji-card"

import "../static/card-table.css"

const CardTable = ({ emojiData, filteredEmojis } ) => {
  const [emojiDataLocal, setEmojiDataLocal] = useState(emojiData)

  useEffect(() => {
    if (filteredEmojis.length) {
      setEmojiDataLocal(filteredEmojis);
    }
  }, [filteredEmojis])

  return (
    <div
      style={{
        paddingTop: "15px",
        height: window.innerHeight*0.9
      }} 
      className="wrapper">
        <div className="card-table">
          {emojiDataLocal.map((emoji, idx) => 
            <EmojiCard 
              key={idx}
              imgURL={emoji.imgURL} 
              name={emoji.name} 
              readableName={emoji.readableName} />)}
        </div>
    </div>
  );
}

export default CardTable
