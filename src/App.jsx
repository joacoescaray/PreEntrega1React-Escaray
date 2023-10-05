import React from 'react';
import './App.css';
import AppNavbar from './components/navbar/navbar';
import ItemListContainer from './conteiner/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ItemListContainer greeting="Tienda oficial de 9z Team" />
    </div>
  );
}

export default App;

