import Card from './Card';

export default function DeckCell(props) {

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
