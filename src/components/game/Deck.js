import DeckCell from './DeckCell';

export default function Deck(props) {

    function createDeckCell() {
        
    }

    function createDeckCells() {
        let res = "";
        for (let i = 0; i < props.cards.length; i++) {
            const card = props.cards[i];
            res += card["img"];
        }
            // const pos = i.toString();
            return (
                <>{res}</>
            );
    }

    return (
        <div id='deck'>
            {/* {props.cards[0]["img"]} */}
            {createDeckCells()}
        </div>
    );
} 
