import './App.css';
import { Outlet } from 'react-router-dom';
import NavbarEstoque from "../components/navbar/NavbarEstoque";
import { useState } from 'react';
function App() {

  return(
    <>
      <div className='containerNavInicial'>
          <NavbarEstoque />
          <Outlet/>
      </div>
  
    </>
  );
}

export default App;
