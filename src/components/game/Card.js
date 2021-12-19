export default function Card({ data, player }) {

    const klass = `card player-${player}-card`;

    return (
        <div className={klass}>
            Card {data["img"]}
        </div>
    );
} 
