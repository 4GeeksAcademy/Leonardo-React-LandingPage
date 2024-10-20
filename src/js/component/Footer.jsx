import React from "react";

//create your first component
const Footer = () => {
    return (
        <div className="text-center">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-4" href="#">Leonard Racing Team</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white fs-4" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white fs-4" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white fs-4" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;
