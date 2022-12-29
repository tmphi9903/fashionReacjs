import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Route, Routes } from 'react-router-dom';
import Detailproduct from './component/Detailproduct';


function App() {
  return (
    <>
      <Navbar />


      <Routes>

        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='detailproduct/:id' element={<Detailproduct />} />
      </Routes>





    </>
  );
}

export default App;
