import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import NavComp from './components/NavComp';

function App() {
  return (
   <>
    <NavComp />
    <Routes>
      <Route path='/' element={<Comp1 />}></Route>
      <Route path='comp2' element={<Comp2 />}></Route>
      <Route path='comp3' element={<Comp3 />}></Route>
    </Routes>
   </>
  );
}

export default App;
