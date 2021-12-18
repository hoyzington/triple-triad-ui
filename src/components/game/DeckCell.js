import Card from './Card';

function DeckCell(props) {

    function renderCard() {
        const card = props.card;
        if (card) {
            return (<Card data={card}/>);
        }
    }

    return (
        <div id='deck-cell'>
            Hello from DeckCell
            {renderCard()}
        </div>
    );
} 

export default DeckCell;
