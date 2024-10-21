import React from "react";
import Navbar from "./Navbar.jsx";
import Call from "./Call.jsx";
import Cards from "./Cards";
import Footer from "./Footer.jsx";
import principal from "/src/img/Leonardo_Suv-PNG.png";
import motor from "/src/img/Leonardo_Suv imagen 4.jpg"
import interior from "/src/img/Leonardo_Suv imagen 6.jpg"
import cajaCambios from "/src/img/Leonardo_Suv imagen 5.jpg"
import entretenimiento from "/src/img/Leonardo_Suv imagen 3.jpg"


// import PrincipalImage from '../js/component/Leonardo_Suv-PNG1.png';
//create your first component
const Home = () => {
    return (
        <div>
            {/* Menu Navbar  */}
            <Navbar />
            {/* Box call to action  */}
            <Call Principal={principal} strong="Leonard Racoon:" titulo="El SUV del futuro que transforma cada viaje" texto="El Leonard Racoon redefine el concepto de los SUV modernos. Con un diseño robusto y elegante, este vehículo está pensado para quienes buscan confort, seguridad y tecnología avanzada sin sacrificar estilo." Texboton="Quiero probarlo" />
            {/* Conjunto de cartas  */}
            <div className="container d-flex flex-column flex-md-row justify-content-center">
                {/* Carta 1 */}
                <Cards imagen={motor} title="Motor Leonard Hybrid Turbo 2.0" texto="El motor del Leonard Racoon es una maravilla de la ingeniería moderna, diseñado para ofrecer un equilibrio perfecto entre potencia y eficiencia. Este SUV cuenta con un motor híbrido de 2.0 litros que combina un motor de combustión interna con un sistema eléctrico" boton="Especificaciones de Hybrid Turbo 2.0" />
                {/* Carta 2 */}
                <Cards imagen={interior} title="Interior del Leonard Racoon" texto="El interior del Leonard Racoon combina lujo y confort, creando un espacio que transforma cada viaje en una experiencia placentera. Desde el momento en que abres la puerta, te recibirá un diseño elegante y moderno, con materiales de alta calidad que reflejan la atención al detalle característica de la marca Leonard." boton="Especificaciones del interior" />
                {/* Carta 3 */}
                <Cards imagen={entretenimiento} title="Leonard InfoSync 12" texto="El Racoon está equipado con un sistema de infoentretenimiento de última generación, que incluye una pantalla táctil de 12 pulgadas con conectividad Bluetooth, Apple CarPlay y Android Auto. Esto permite acceder fácilmente a aplicaciones, música y navegación, además, el sistema de sonido envolvente premium." boton="Especificaciones de Leonard InfoSync 12" />
                {/* Carta 4 */}
                <Cards imagen={cajaCambios} title="Leonard ShiftControl 8AT" texto="La transmisión automática de 8 velocidades asegura cambios suaves y precisos, mientras que el sistema de tracción en las cuatro ruedas (AWD) ofrece una mayor estabilidad y control en diferentes condiciones de manejo, desde carreteras urbanas hasta terrenos más desafiantes." boton="Especificaciones de ShiftControl 8AT" />
            </div>
            {/* Footer  */}
            <Footer/>
        </div>
    );
};

export default Home;