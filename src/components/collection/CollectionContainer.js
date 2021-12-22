import { useState } from "react";
import Deck from "./../game/Deck";
import Collection from "./Collection";
import ttClient from "./../../remote/TT-Client";

export default function CollectionContainer() {

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
  const currentDeck = [];
  const [newDeck, setNewDeck] = useState(currentDeck);

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

  function saveDeck(name) {
    const deckSize = newDeck.length;
    if (deckSize === 5) {
      const array = newDeck.map(card => card.id);
      const result = {
        deckName: name,
        cards: array,
        deckOwner: sessionStorage.getItem("user_cached").id,
      };
      ttClient.post("/deck/save", result);
    }
  }

  return (
    <div id="collection-container">
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
