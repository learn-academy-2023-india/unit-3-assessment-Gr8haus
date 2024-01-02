import React from "react"

const Card = ({hand}) => {
  return (
    <div className="handStyles">
      {hand.map((card, index) => {
        const isRedSuit = card.includes("❤️") || card.includes("♦️");
        
        return (
          <div className={`cardStyles ${isRedSuit ? "red-suit" : ""}`}
          key={index}
          >
            {card}
          </div>
        )
      })}
    </div>
  )
}

export default Card