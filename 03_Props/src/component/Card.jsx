function Card(props) {
    return (
        <div className="card">

            <img
                src={props.img}
                className="card-img-top"
                alt={props.name}
            />

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

                <p className="card-text">
                    Age: {props.age}
                </p>

                <button className="btn btn-primary">
                    View Profile
                </button>
            </div>

        </div>
    );
}

export default Card;