import React from "react";
import Navbar from "./Navbar.jsx";
import Call from "./Call.jsx";
import Cards from "./Cards";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar />
            <Call />
            <div className="container d-flex flex-column flex-md-row justify-content-center">
                    <Cards title="Motor Leonard Hybrid Turbo 2.0" texto="El motor del Leonard Racoon es una maravilla de la ingeniería moderna, diseñado para ofrecer un equilibrio perfecto entre potencia y eficiencia. Este SUV cuenta con un motor híbrido de 2.0 litros que combina un motor de combustión interna con un sistema eléctrico" boton="Especificaciones del motor"/>
					<Cards title="Interior del Leonard Racoon" texto="El interior del Leonard Racoon combina lujo y confort, creando un espacio que transforma cada viaje en una experiencia placentera. Desde el momento en que abres la puerta, te recibirá un diseño elegante y moderno, con materiales de alta calidad que reflejan la atención al detalle característica de la marca Leonard."/>
                    <Cards title="Motor Leonard Hybrid Turbo 2.0" texto="El motor del Leonard Racoon es una maravilla de la ingeniería moderna, diseñado para ofrecer un equilibrio perfecto entre potencia y eficiencia. Este SUV cuenta con un motor híbrido de 2.0 litros que combina un motor de combustión interna con un sistema eléctrico" boton="Especificaciones del motor"/>
                    <Cards title="Motor Leonard Hybrid Turbo 2.0" texto="El motor del Leonard Racoon es una maravilla de la ingeniería moderna, diseñado para ofrecer un equilibrio perfecto entre potencia y eficiencia. Este SUV cuenta con un motor híbrido de 2.0 litros que combina un motor de combustión interna con un sistema eléctrico" boton="Especificaciones del motor"/>

                </div>
				<Footer/>
        </div>
    );
};

export default Home;