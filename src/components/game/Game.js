import Deck from './Deck';
import Grid from './Grid';
import Score from './Score';
import StatusBar from './StatusBar';

export default function Game() {
    let playerOneCards = [{"img": "1"}, {"img": "2"}, {"img": "3"}, {"img": "4"}, {"img": "5"}];
    let playerTwoCards = [{"img": "1"}, {"img": "2"}, {"img": "3"}, {"img": "4"}, {"img": "5"}];
    let playerOneScore = 5, playerTwoScore = 5;
    let status = 'Your turn'

    return (
        <div id='game'>
            {/* Hello */}
            {/* {playerTwoCards[0]["img"]} */}
            <Deck cards={playerOneCards} />
            {/* <Grid /> */}
            {/* <Deck cards={playerTwoCards} /> */}
            {/* <Score num={playerOneScore} />
            <Score num={playerTwoScore} />
            <StatusBar status={status} /> */}
        </div>
    );
} 
