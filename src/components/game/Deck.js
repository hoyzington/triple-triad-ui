import { NavLink } from 'react-router-dom';
import GridCell from './GridCell';
import DeckCell from './DeckCell';

export default function Deck({ klass, cards, player, played, chosenCard, func, saveDeck }) {

  function renderDeckCells() {
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

  function renderSaveButton() {
    if (klass === "collection-deck") {
      return (
        <NavLink id="save-button" to="#" onClick={() => saveDeck()}>
          S<br/>A<br/>V<br/>E
        </NavLink>
      )
    }
  }

  const id = `deck-${player}`

  return (
    <div id={id} className={klass}>
      {renderDeckCells()}
      {renderSaveButton()}
    </div>
  );
} 
