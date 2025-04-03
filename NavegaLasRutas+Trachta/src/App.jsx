import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const welcomeMessage = "Bienvenido a nuestra tienda en línea"; 

  return (
    <Router>  {}
      <NavBar />
      <Routes>  {}
        <Route path="/" element={<ItemListContainer message={welcomeMessage} />} />  {}
        <Route path="/category/:categoryId" element={<ItemListContainer message={welcomeMessage} />} />  {}
        <Route path="/product/:productId" element={<ItemDetailContainer />} />  {}
      </Routes>
    </Router>
  );
}

export default App;
