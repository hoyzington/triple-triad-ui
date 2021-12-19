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

    return (
        <div id="game">
            <Grid />
            <StatusBar status={status} />
            <Deck cards={player1Cards} player="1" />
            <Deck cards={player2Cards} player="2" />
        </div>
    );
} 
