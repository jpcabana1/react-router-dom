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
import NestedComp1 from './components/NestedComp1';
import NestedComp2 from './components/NestedComp2';
import NestedComp3 from './components/NestedComp3';
import NestedCompLayout from './components/NestedCompLayout';

function App() {
  return (
   <>
    <NavComp />
    <Routes>
      <Route path='/' element={<Comp1 />}></Route>
      <Route path='comp2' element={<Comp2 />}></Route>
      <Route path='comp3' element={<Comp3 />}></Route>
      <Route path='/nested' element={<NestedCompLayout/>}>
          <Route index element={<NestedComp1 />}/>
          <Route path='nestedcomp2' element={<NestedComp2 />}/>
          <Route path='nestedcomp3' element={<NestedComp3 />}/>
      </Route>
    </Routes>
   </>
  );
}

export default App;
