import React, {createContext, useMemo, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from '../Home';
import Tree from '../Tree';

export type GlobalContent = {
  xmlData: JSON | null
  setXmlData:(data: JSON | null) => void
}

export const XmlDataContext = createContext<GlobalContent>({
  xmlData: null,
  setXmlData: () => {},
});

function App() {
  const [xmlData, setXmlData] = useState<JSON | null>(null);

 return (
  <XmlDataContext.Provider value={{xmlData, setXmlData}}>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/tree" element={<Tree />}>
        <Route index element={<Tree />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  </XmlDataContext.Provider>
 )
}

export default App;
