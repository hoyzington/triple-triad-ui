import Card from "./../game/Card";

export default function Collection({ cards, func, cardClass }) {

  function renderCollection() {
    return cards.map(card => {
      return (
        <Card
          key={card.id}
          card={card}
          player="1"
          played="false"
          chosen="false"
          clickFunc={func}
          loc="collection"
          cardClass={cardClass}
        />
      )
    })
  }

  console.log(cards.length)

  return (
    <div id="collection">
      {renderCollection()}
    </div>
  );
} 
