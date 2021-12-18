function Card(props) {
    return (
        <div id="card">
            Hello from Card
            {props.data["img"]}
        </div>
    );
} 

export default Card;
