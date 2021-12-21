import Card from "./Card";

export default function GridCell({ card, gridCellClick, id }) {
  console.log(id)
  if (card) {
    return (
      <a href="#">
        <div className="grid-cell" onClick={() => gridCellClick(id)}>
          <Card data={card} />
        </div>
      </a>
    );
    } else {
    return (
      <a href="#">
        <div className="grid-cell" onClick={() => gridCellClick(id)}></div>
      </a>
    );
    }
} 
