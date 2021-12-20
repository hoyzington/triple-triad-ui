import Card from './Card';

export default function DeckCell({ card, player, chosen, func }) {

    function renderCard() {
        return (
            <Card
                data={card}
                player={player}
                chosen={chosen}
                played="false"
                clickFunc={func}
            />);
    }

    const klass = `deck-cell deck-cell-${card.id}`

    return (
        <div className={klass}>
            {renderCard()}
        </div>
    );
} 
