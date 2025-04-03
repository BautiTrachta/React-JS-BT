import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from './CartWidget'; 

function NavBar() {
    return (
        <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white", display: "flex", justifyContent: "space-between" }}>
            <div>
                <h1>Mi Tienda</h1>
            </div>
            <div>
                {}
                <Link to="/" style={{ marginRight: "10px", color: "white" }}>Inicio</Link>
                <Link to="/category/Electrónica" style={{ marginRight: "10px", color: "white" }}>Electrónica</Link>
                <Link to="/category/Ropa" style={{ marginRight: "10px", color: "white" }}>Ropa</Link>
                <Link to="/contact" style={{ color: "white" }}>Contacto</Link>
            </div>
            <CartWidget /> {}
        </nav>
    );
}

export default NavBar;
