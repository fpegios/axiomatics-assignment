import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from '../Home';
import Tree from '../Tree';

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/tree" element={<Tree />}>
        <Route index element={<Tree />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />}>
      </Route>
    </Routes>
  </BrowserRouter>
 )
}

export default App;
