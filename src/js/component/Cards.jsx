import React from "react";

//create your first component
const Cards = (props) => {
    return (
        <div className="container text-center">
            <div id="Cartas" className="card m-3 bg-light">
                {/* imagen de la carta  */}
                <img src={props.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        {/* titulo de la carta  */}
                        <h5 className="card-title">{props.title}</h5>
                        {/* texto de la carta  */}
                        <p className="card-text">{props.texto}</p>
                        {/* Boton de la carta  */}
                        <a href="#" id="Boton" className="btn btn-primary">{props.boton}</a>
                    </div>
            </div>
        </div>
    );
};

export default Cards;