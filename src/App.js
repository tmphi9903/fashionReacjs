import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Route, Routes } from 'react-router-dom';
import Detailproduct from './component/Detailproduct';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />


      <Routes>

        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='detailproduct/:id' element={<Detailproduct />} />
      </Routes>





      <Footer />
    </>
  );
}

export default App;
