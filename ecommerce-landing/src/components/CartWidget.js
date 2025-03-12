import React from 'react';

function CartWidget() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <span>🛒</span> 
            <span style={{ marginLeft: "5px" }}>3</span> 
        </div>
    );
}

export default CartWidget;