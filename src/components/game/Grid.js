import GridCell from './GridCell';

export default function Grid({ func }) {

    function createGridCells() {
        return [...Array(9)].map((el, i) => {
            return (<GridCell key={i} id={i} gridCellClick={func} />)
        })
    }

    return (
        <div id="grid">
            {createGridCells()}
        </div>
    );
} 
