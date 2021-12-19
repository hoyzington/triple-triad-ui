import Card from './Card';

export default function DeckCell({ card, player, position }) {

    function renderCard() {
        return (<Card data={card} player={player} />);
    }

    const klass = `deck-cell deck-cell-${position}`

    return (
        <div className={klass}>
            {renderCard()}
        </div>
    );
} 
