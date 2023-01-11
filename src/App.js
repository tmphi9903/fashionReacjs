import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Detailproduct from './pages/Detailproduct';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detailproduct/:id' element={<Detailproduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />

   
      </Routes>

      <Footer/>

    </>
  );
}


export default App;
