import DeckCell from './DeckCell';

export default function Deck({ cards, player, func }) {

    function createDeckCells() {
        let position = 1;
        return cards.map(card => {
            return (<DeckCell key={position} card={card} player={player} position={position++} func={func} />);
        });
    }

    const id = `deck-${player}`

    return (
        <div id={id} className="deck">
            {createDeckCells()}
        </div>
    );
} 
