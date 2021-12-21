export default function Card(props) {

  const { player, chosen, played, data } = props;
  let klass = `card player-${player}-card`;

  if (played === "false") {
    if (chosen === "true") {
      klass += " chosen"
    }
    return (
      <a href="#" onClick={() => props.clickFunc(data)}>
        <div className={klass}>
          Card {data["id"]}
        </div>
      </a>
    );
  } else {
    return (
      <div className={klass}>
        Card {data["id"]}
      </div>
    );
  }
} 
