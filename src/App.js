import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) Generates a random card by pickign a random rank and suit.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) Checks to see if the card that is drawn is not already present in the current hand
    if (hand.indexOf(draw) === -1) {
      // 3) If the drawn card is unique then it will be included in the current hand.
      setHand([...hand, draw])
      // 4) If all 52 cards have not yet been drawn the function will end here.
    } else if (hand.length !== 52) {
      // 5) If the drawn card is a duplicate and not all 52 cards have been drawn, this will reinvoke the drawCard function to draw another card.
      drawCard()
      // 6) Thisrecursive call ensures a unique card is drawn to prevent duplicates.
    } else {
      // 7) Displays an alert stating, "All cards have been dealt.", if all 52 cards havs been drawn. 
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }
  return (
    <div className="center-container">
      <h1 className="center-text casino-sign">Draw a Card</h1>
      <button onClick={drawCard}>Click to Draw a Card</button>
      <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
      <Card hand={hand}/>
    </div>
  )
}


export default App
