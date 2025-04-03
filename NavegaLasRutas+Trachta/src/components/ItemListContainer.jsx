import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const fetchProducts = (categoryId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allProducts = [
        { id: 1, name: 'Producto 1', category: 'Electrónica' },
        { id: 2, name: 'Producto 2', category: 'Ropa' },
        { id: 3, name: 'Producto 3', category: 'Electrónica' },
        { id: 4, name: 'Producto 4', category: 'Ropa' },
      ];
      const filtered = categoryId
        ? allProducts.filter((product) => product.category === categoryId)
        : allProducts;
      resolve(filtered);  
    }, 1000);  
  });
};

function ItemListContainer(props) {
  const { categoryId } = useParams();  
  const [products, setProducts] = useState([]);  

  useEffect(() => {
    fetchProducts(categoryId).then((data) => setProducts(data)); 
  }, [categoryId]); 

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{props.message}</h2>  {}

      {}
      <div>
        {products.length === 0 ? (
          <p>No hay productos disponibles en esta categoría.</p> 
        ) : (
          <ul>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>  {}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;