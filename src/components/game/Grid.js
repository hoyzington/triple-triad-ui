import GridCell from './GridCell';

export default function Grid() {

    function createGridCells() {
        return [...Array(9)].map((el, i) => {
            return (<GridCell key={i} id={i} />)
        })
    }

    return (
        <div id="grid">
            {createGridCells()}
        </div>
    );
} 
