import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import BodyLay from './layouts/BodyLay';


function App() {

  return (
    <>
      <BodyLay>
        <Home />
      </BodyLay>
    </>
  );
}

export default App
