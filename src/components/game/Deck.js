import { NavLink } from 'react-router-dom';
import GridCell from './GridCell';
import DeckCell from './DeckCell';
import { useEffect, useState } from "react";
import getDeck from '../../remote/getDeck';

export default function Deck({ klass, cards, player, played, chosenCard, func, saveDeck }) {

  const [deck, setDeck] = useState(cards || [...Array(5)])
  const [deckName, setDeckName] = useState('');
  const [decks, setDecks] = useState([]);

  // useEffect(() => {setDecks(getDeck())}, []);

  function renderDeckCells() {
    let position = 1;
    return deck.map((el, i) => {
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

  function handleDeckClick(deckId) {
    setDeck(
      decks.find(deck => deck.id === deckId)
    )
  }

  function renderDeckList() {
    decks.map(deck => (
      <button 
        type='button' 
        id='deck-list-btn'>{deck.name}
        onClick={() => handleDeckClick(deck.id)}
      </button>
    ))
    return (
      <div id='deck-list'></div>
    )
  }

  function handleChange(e) {
    setDeckName(e.target.value);
  }

  function renderSaveButton() {
    if (klass === "collection-deck") {
      return (
        <>
          <input
            id="deck-name"
            type="text"
            name="deckName"
            onChange={(e) => handleChange(e)}
            value={deckName}
            maxLength="20"
            autoFocus
            required
          />
          <NavLink id="save-button" to="#" onClick={() => saveDeck(deckName)}>
            SAVE
          </NavLink>
        </>

      )
    }
  }

  const id = `deck-${player}`

  return (
    <div id={id} className={klass}>
      {renderDeckCells()}
      {renderDeckList()}
      {renderSaveButton()}
    </div>
  );
} 
