import React from "react";

//create your first component
const Call = (props) => {
    return (
        <div>
            <div className="container mt-5 mb-5 m-auto text-center">
                <div className="row">
                    <div id="BoxPrincipal" className="col-12 bg-light rounded-4">
                        <div className="row align-items-center">
                            <div className="offset-xl-1 col-xl-5 col-md-6 col-12">
                                {/* Texto Call to action  */}
                                <div>
                                    <h2 className="h2  m-4"><strong>{props.strong}</strong>{props.titulo}</h2>
                                    <p className="fs-4">{props.texto}</p>
                                    <button id="BotonPrincipal" className="m-4 px-5">{props.Texboton}</button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-12">
                                {/* imagen del call to action  */}
                                <div className="text-center mb-5 mt-5">
                                    <img src={props.Principal} alt="learning" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Call;