import React from 'react';
import CartWidget from './CartWidget'; 

function NavBar() {
    return (
        <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white", display: "flex", justifyContent: "space-between" }}>
            <div>
                <h1>Mi Tienda</h1>
            </div>
            <div>
                <a href="#home" style={{ marginRight: "10px", color: "white" }}>Inicio</a>
                <a href="#shop" style={{ marginRight: "10px", color: "white" }}>Tienda</a>
                <a href="#contact" style={{ color: "white" }}>Contacto</a>
            </div>
            <CartWidget /> 
        </nav>
    );
}

export default NavBar;
