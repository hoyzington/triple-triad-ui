export default function GridCell({ gridCellClick }) {
  return (
    <a href="#">
      <div className="grid-cell" onClick={() => gridCellClick()}></div>
    </a>
  );
} 
