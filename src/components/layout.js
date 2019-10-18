import React, { useState, useEffect } from "react"
import Progress from "react-progress-2"

import Header from "./header"
import CardTable from "./card-table"
import "../static/layout.css"
import "react-progress-2/main.css"

const Layout = () => {
    const [emojiData, setEmojiData] = useState([]);
    const [filteredEmojiData, setFilteredEmojiData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

  const filterEmojis = ({ target: { value }}) => {
    setFilteredEmojiData(emojiData.filter(emojiData => emojiData.name.includes(value)))
  }

  const createReadableName = name => {
    const splitName = !name.includes("_")
      ? [name]
      : name.split("_")
      
    return splitName.map(readableNamePart => readableNamePart[0].toUpperCase() + readableNamePart.slice(1))
                    .join(" ");
  }

  useEffect(() => {
    const fetchEmojis = async () => {
      Progress.show()
      const response = await fetch("https://api.github.com/emojis");
      const data = await response.json();
      const emojiData = Object.keys(data).map(emojiName => {
        const readableName = createReadableName(emojiName);   
        return ({ 
          name: emojiName, 
          imgURL: data[emojiName], 
          readableName
        })
      }) 
      setEmojiData(emojiData);
      setIsLoaded(true);
      Progress.hide();
    }
    fetchEmojis();
  }, [])

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <Header 
        siteTitle={`EmojiDex 😊`} 
        siteDescription={`An index of GitHub emojis.`}
        filterEmojis={filterEmojis}
      />
      <Progress.Component 
        style={{height: "3px"}} 
        thumbStyle={{background: "#FFC83D"}}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          justifyItems: "center",
          overflow: "auto",
        }}
      >
        {isLoaded && (
          <CardTable 
            emojiData={emojiData} 
            filteredEmojis={filteredEmojiData}
          />)}
      </div>
    </div>
  )
}

export default Layout
