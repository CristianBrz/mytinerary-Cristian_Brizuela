import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import BodyLay from './layouts/BodyLay';
import { createBrowserRouter, RouterProvider } from 'react-router-dom' ;
import Cities from './pages/Cities';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BodyLay></BodyLay>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      },
    ]
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
      {/* <BodyLay>
        <Home />
      </BodyLay> */}
    </>
  );
}

export default App
