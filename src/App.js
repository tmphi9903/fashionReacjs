import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Detailproduct from './pages/Detailproduct';
import Cart from './pages/Cart';


function App() {
  return (
    <>
      <Navbar />


      <Routes>

        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detailproduct/:id' element={<Detailproduct />} />
        <Route path='/cart' element={<Cart />} />


        
      </Routes>





    </>
  );
}

export default App;
