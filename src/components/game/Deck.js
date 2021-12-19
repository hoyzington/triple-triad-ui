import DeckCell from './DeckCell';

export default function Deck({ cards, player }) {

    function createDeckCells() {
        let position = 1;
        return cards.map(card => {
            return (<DeckCell key={position} card={card} player={player} position={position++} />);
        });
    }

    const id = `deck-${player}`

    return (
        <div id={id} className="deck">
            {createDeckCells()}
        </div>
    );
} 
