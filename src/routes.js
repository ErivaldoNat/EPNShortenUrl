import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Links from './pages/Links';


function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/links" element={<Links/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;