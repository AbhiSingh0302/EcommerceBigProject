import merch1 from './assets/Shirt.png';
import merch2 from './assets/Cofee.png';

import { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { ContextProvider } from './stores/context';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';


const productsArr = [
  {
    id: '1a',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: '2a',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: '3a',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: '4a',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]

const merchArr = [
  {
    id: '1b',
    title: 'T-Shirt',
    price: 19.99,
    imageUrl: merch1
  },
  {
    id: '2b',
    title: 'Coffee Cup',
    price: 6.99,
    imageUrl: merch2
  },
]

const router = createBrowserRouter([
  {path: '/', element: <Products products={productsArr} merch={merchArr}/>},
  {path: '/about', element: <About/>}
])

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const showCart = () => setCartIsShown(!cartIsShown);

  return (
    <ContextProvider>
    {cartIsShown && <Cart/>}
      <Header onShowCart={showCart}/>
      {/* <Products products={productsArr} merch={merchArr}/> */}
      <RouterProvider router={router}/>
      <Footer/>
    </ContextProvider>
  );
}

export default App;
