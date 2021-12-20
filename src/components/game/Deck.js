import DeckCell from './DeckCell';

export default function Deck({ cards, player, chosenCard, func }) {

    function createDeckCells() {
        return cards.map(card => {
            let chosen;
            if (chosenCard && card.id === chosenCard.id) {
                chosen = "true";
            } else {
                chosen = "false";
            }
            return (
                <DeckCell
                    key={card.id}
                    card={card}
                    player={player}
                    chosen={chosen}
                    func={func}
                />
            );
        });
    }

    const id = `deck-${player}`

    return (
        <div id={id} className="deck">
            {createDeckCells()}
        </div>
    );
} 
