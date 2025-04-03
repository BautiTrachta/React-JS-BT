import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const fetchProductDetails = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 100 },
        { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 200 },
        { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: 300 },
        { id: 4, name: 'Producto 4', description: 'Descripción del Producto 4', price: 400 },
      ];
      const product = products.find((p) => p.id === parseInt(productId)); 
      resolve(product); 
    }, 1000); 
  });
};

function ItemDetailContainer() {
  const { productId } = useParams();  
  const [product, setProduct] = useState(null);  

  useEffect(() => {
    fetchProductDetails(productId).then((data) => setProduct(data)); 
  }, [productId]); 

  if (!product) {
    return <p>Cargando...</p>;  
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button> {}
    </div>
  );
}

export default ItemDetailContainer;