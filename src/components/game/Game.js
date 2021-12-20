import Deck from './Deck';
import Grid from './Grid';
import StatusBar from './StatusBar';

export default function Game() {

    const player1Cards = [
        {"img": "1"},
        {"img": "2"},
        {"img": "3"},
        {"img": "4"},
        {"img": "5"},
    ];
    const player2Cards = [
        {"img": "1"},
        {"img": "2"},
        {"img": "3"},
        {"img": "4"},
        {"img": "5"},
    ];
    const status = {player1: "5", player2: "5", message: "bigTimePlayer's turn!"}

    function handleCardClick() {
        console.log("card clicked")
    }

    function handleGridCellClick() {
        console.log("cell clicked")
    }

    return (
        <div id="game">
            <Grid func={handleGridCellClick} />
            <StatusBar status={status} />
            <Deck cards={player1Cards} player="1" func={handleCardClick} />
            <Deck cards={player2Cards} player="2" func={handleCardClick} />
        </div>
    );
} 
