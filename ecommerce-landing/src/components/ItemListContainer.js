import React from 'react';

function ItemListContainer(props) {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>{props.message}</h2> 
        </div>
    );
}

export default ItemListContainer;