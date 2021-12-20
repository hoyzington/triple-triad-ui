import Card from './Card';

export default function DeckCell({ card, player, func, position }) {

    function renderCard() {
        return (<Card data={card} player={player} played="false" clickFunc={func} />);
    }

    const klass = `deck-cell deck-cell-${position}`

    return (
        <div className={klass}>
            {renderCard()}
        </div>
    );
} 
