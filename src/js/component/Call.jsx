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
                                    <h2 className="h2  m-4"><strong>Leonard Racoon:</strong> El SUV del futuro que transforma cada viaje</h2>
                                    <p className="fs-4">El Leonard Racoon redefine el concepto de los SUV modernos. Con un diseño robusto y elegante, este vehículo está pensado para quienes buscan confort, seguridad y tecnología avanzada sin sacrificar estilo.</p>
                                    <button id="BotonPrincipal" className="m-4 px-5">Quiero probarlo</button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-12">
                                {/* imagen del call to action  */}
                                <div className="text-center">
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