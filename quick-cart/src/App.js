import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import LoginSignup from './Components/Pages/LoginSignup';
import Cart from './Components/Pages/Cart';
import Shop from './Components/Pages/Shop';
import AboutUS from './Components/Pages/AboutUS';
import Product from './Components/Pages/Product';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/electronics' element={<ShopCategory categoory="electronics" />} />
          <Route path='/mens' element={<ShopCategory categoory="mens" />} />
          <Route path='/womens' element={<ShopCategory category="womens" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='aboutus' element={<AboutUS/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/loginSignup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
