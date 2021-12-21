import React, { useState } from 'react';
import Deck from './Deck';
import Grid from './Grid';
import StatusBar from './StatusBar';

export default function Game() {

  const player1Cards = [
    {"id": "1", "player": "1"},
    {"id": "2", "player": "1"},
    {"id": "3", "player": "1"},
    {"id": "4", "player": "1"},
    {"id": "5", "player": "1"},
  ];
  const player2Cards = [
    {"id": "1", "player": "2"},
    {"id": "2", "player": "2"},
    {"id": "3", "player": "2"},
    {"id": "4", "player": "2"},
    {"id": "5", "player": "2"},
  ];
  const status = {player1: "5", player2: "5", message: "bigTimePlayer's turn!"}

  const [chosenCard, setChosenCard] = useState(null);

  function handleCardClick(card) {
    setChosenCard(card);
  }

  function handleGridCellClick() {
    console.log("cell clicked")
  }

  function isChosenCardPresent(player) {
    if (chosenCard && chosenCard.player === player) {
      return chosenCard;
    }
    return null;
  }

  return (
    <div id="game">
      <Grid func={handleGridCellClick} />
      <StatusBar status={status} />
      <Deck
        cards={player1Cards}
        player="1"
        chosenCard={isChosenCardPresent("1")}
        func={handleCardClick}
      />
      <Deck
        cards={player2Cards}
        player="2"
        chosenCard={isChosenCardPresent("2")}
        func={handleCardClick}
      />
    </div>
  );
} 
