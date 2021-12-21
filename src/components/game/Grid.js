import GridCell from './GridCell';

export default function Grid({ cards, func }) {

  function createGridCells() {
    console.log(cards.length)
    return cards.map((card, i) => {
      console.log(card)
      return (<GridCell key={i} id={i} card={card} gridCellClick={func} />)
    })
  }

  return (
    <div id="grid">
      {createGridCells()}
    </div>
  );
} 
