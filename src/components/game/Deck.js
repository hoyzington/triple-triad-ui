import GridCell from './GridCell';
import DeckCell from './DeckCell';

export default function Deck({ klass, cards, player, played, chosenCard, func }) {

  function createDeckCells() {
    let position = 1;
    return [...Array(5)].map((el, i) => {
      let chosen;
      if (chosenCard && cards[i].id === chosenCard.id) {
        chosen = "true";
      } else {
        chosen = "false";
      }
      if (klass === "collection-deck") {
        return (
          <GridCell
            key={i}
            id={i}
            card={cards[i]}
            played={played}
            clickFunc={func}
            loc="deck"
          />
        )
      } else {
        return (
          <DeckCell
            key={i}
            card={cards[i]}
            chosen={chosen}
            func={func}
            pos={position++}
          />
        );
        }
    });
  }

  const id = `deck-${player}`

  return (
    <div id={id} className={klass}>
      {createDeckCells()}
    </div>
  );
} 
