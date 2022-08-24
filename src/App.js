import ItemListConteiner from './components/Containers/ItemListConteiner.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailConteiner from './components/Containers/ItemDetailConteiner.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Cart from './components/Cart/Cart.jsx';
import CartProvider from './components/context/CartContext.jsx';


function App() {
  return (
  <>
  <CartProvider>
    <BrowserRouter>
      <NavBar />
     <hr/>
      <Routes>
        <Route index element={<ItemListConteiner />}/>
        <Route path='Category/:serie' element={<ItemListConteiner />} />
        <Route path='item/:id' element={<ItemDetailConteiner />} />
        <Route path='/cart' element={<Cart />} />
     
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  </>
  );
}

export default App;
