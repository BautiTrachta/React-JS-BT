import React from 'react';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  const welcomeMessage = "Bienvenido a nuestra tienda en línea"; 

  return (
    <div>
      <NavBar />
      <ItemListContainer message={welcomeMessage} />
    </div>
  );
}

export default App;
