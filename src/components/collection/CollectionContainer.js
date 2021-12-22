import { useState } from "react";
import Deck from "./../game/Deck";
import Collection from "./Collection";
import { Notification } from "./../Notification";

export default function CollectionContainer() {

  // const baseCollection = [
  //   {"id": "1", "player": "1"},
  //   {"id": "2", "player": "1"},
  //   {"id": "3", "player": "1"},
  //   {"id": "4", "player": "1"},
  //   {"id": "5", "player": "1"},
  //   {"id": "6", "player": "1"},
  //   {"id": "7", "player": "1"},
  //   {"id": "8", "player": "1"},
  //   {"id": "9", "player": "1"},
  //   {"id": "10", "player": "1"},
  // ];
  // console.log(
  //   JSON.parse(sessionStorage.getItem("user_cached")).cardCollection,
  //   "hi",
  //   JSON.parse(sessionStorage.getItem("cardList")),
  //   "hello"
  // )

  const collection = JSON.parse(sessionStorage.getItem("user_cached"))
    .cardCollection.filter(c => c != null).map(
      i => JSON.parse(sessionStorage.getItem("cardList"))[i - 1]
    );

  const [hiddenCards, setHiddenCards] = useState([]);
  // const currentDeck = sessionStorage.getItem("deck") || [];
  const [newDeck, setNewDeck] = useState([]);

  function handleCardClick(card, loc) {
    if (loc === "collection") {
      hideCardInCollection(card);
      const change = [
        ...newDeck,
        card,
      ]
      setNewDeck(change);
    } else {
      removeCardFromDeck(card);
      showCardInCollection(card);
    }
  }

  function hideCardInCollection(card) {
    const change = [
      ...hiddenCards,
      card,
    ]
    setHiddenCards(change);
  }

  function showCardInCollection(card) {
    const change = removeCard(hiddenCards, card)
    setHiddenCards(change)
  }

  function removeCardFromDeck(card) {
    const change = removeCard(newDeck, card);
    setNewDeck(change);
  }

  function removeCard(cards, card) {
    const cardIdx = cards.findIndex(crd => crd.id === card.id);
    return [
      ...cards.slice(0, cardIdx),
      ...cards.slice(cardIdx + 1),
    ]
  }

  function filterCollection() {
    return collection.filter(card => 
      !hiddenCards.find(crd => crd.id === card.id)
    )
  }

  function saveDeck() {
    const deckSize = newDeck.length;
    if (deckSize === 5) {
      // TODO: save deck!
      notify("success", "Deck Saved")
    }
  }


  const [note, setNote] = useState(["", "", ]);


  function notify(type, message) {
    setNote([type, message]);
  }

  function notification() {
    function closeNote() {
      setNote(false);
    }


    if (note[0]) {
      return (<Notification note={note} closeFunc={closeNote} />)
    }
  }

  return (
    <div id="collection-container">
      {notification()}
      <Deck
        klass="collection-deck"
        cards={newDeck}
        player="2"
        played="false"
        chosenCard={null}
        func={handleCardClick}
        cardClass="card-image"
        saveDeck={saveDeck}
      />
      <Collection
        cards={filterCollection()}
        func={handleCardClick}
        cardClass="card-image"
      />
    </div>
  );
} 
