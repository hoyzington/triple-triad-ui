export default function Card(props) {

    const { player, played, data } = props;
    const klass = `card player-${player}-card`;

    if (played === "false") {
        return (
            <a href="#" onClick={() => props.clickFunc(data)}>
                <div className={klass}>
                    Card {data["img"]}
                </div>
            </a>
        );
    } else {
        return (
            <div className={klass}>
                Card {data["img"]}
            </div>
        );
    }
} 
