import Card from './Card';

export default function DeckCell({ card, chosen, func }) {

  function renderCard() {
    return (
      <Card
        data={card}
        chosen={chosen}
        played="false"
        clickFunc={func}
      />
    );
  }

  const klass = `deck-cell deck-cell-${card.id}`

  return (
    <div className={klass}>
      {renderCard()}
    </div>
  );
} 
