import React from "react";
import Navbar from "./Navbar.jsx";
import Call from "./Call.jsx";
import Cards from "./Cards";

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar />
            <Call />
            <div className="container d-flex flex-column flex-md-row justify-content-center">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
        </div>
    );
};

export default Home;