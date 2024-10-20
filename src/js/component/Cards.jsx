import React from "react";

//create your first component
const Cards = (props) => {
    return (
        <div className="container text-center">
            <div id="Cartas" className="card m-3 bg-light">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.texto}</p>
                        <a href="#" id="Boton" className="btn btn-primary">{props.boton}</a>
                    </div>
            </div>
        </div>
    );
};

export default Cards;