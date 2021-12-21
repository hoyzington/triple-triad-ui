import { useState } from "react";
import Deck from "./../game/Deck";
import Card from "./../game/Card";


export default function Collection() {
  const baseCollection = [
    {"id": "1", "player": "1"},
    {"id": "2", "player": "1"},
    {"id": "3", "player": "1"},
    {"id": "4", "player": "1"},
    {"id": "5", "player": "1"},
    {"id": "6", "player": "1"},
    {"id": "7", "player": "1"},
    {"id": "8", "player": "1"},
    {"id": "9", "player": "1"},
    {"id": "10", "player": "1"},
  ];

  const [collection, setCollection] = useState(baseCollection);

  function renderCollection() {
    return collection.map(card => {
      return (<Card data={card} player="1" played="false" chosen="false" />)
    })
  }

  return (
    <div id="collection">
      {renderCollection()}
      {/* <Deck cards player chosenCard func /> */}
    </div>
  );
} 
