import merch1 from './assets/Shirt.png';
import merch2 from './assets/Cofee.png';

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

// import { useState } from "react";
// import Cart from "./Cart/Cart";
import Products from "./components/Products";
// import { ContextProvider } from './stores/context';
// import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import Login from './components/Login';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


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


// // function App() {
//   // const [cartIsShown,setCartIsShown] = useState(false);
//   // const showCart = () => setCartIsShown(!cartIsShown);

// //   const router = createBrowserRouter([
// //     {path: '/', element: <><Header onShowCart={showCart}/><Products products={productsArr} merch={merchArr}/></>},
// //     {path: '/about', element: <><Header onShowCart={showCart}/><About/></>},
// //     {path: '/home', element: <><Header onShowCart={showCart}/><Home/></>},
// //     {path: '/contactus', element: <><Header onShowCart={showCart}/><ContactUs/></>},
// //     {path: '/products/:productId', element: <><Header onShowCart={showCart}/><ProductDetail products={productsArr}/></>}
// //   ])

// //   // return (
// //   //   <>
// //   //     {cartIsShown && <Cart/>}
// //   //     <Layout>
// //   //     <RouterProvider router={router}/>
// //   //     </Layout>
// //   //   </>
// //   //   // <ContextProvider>
// //   //   //   {/* <Products products={productsArr} merch={merchArr}/> */}
// //   //   //   <Footer/>
// //   //   // </ContextProvider>
// //   // );
// //   return (
// //     <Layout>
// //       <Routes>
//       // <Route path='/' Component={<Products products={productsArr} merch={merchArr}/>}/>
//       // <Route path='/about' Component={<About/>}/>
//       // <Route path='/home' Component={<Home/>}/>
//       // <Route path='/contactus' Component={<ContactUs/>}/>
//       // <Route path='/products/:productId' Component={<ProductDetail products={productsArr}/>}/>
// //       </Routes>
// //     </Layout>
// //   )
// // }

// function App(){
//   const [cartIsShown,setCartIsShown] = useState(false);
//   const showCart = () => setCartIsShown(!cartIsShown);

//   return (
//     <Layout onShowCart={showCart}>
//       {cartIsShown && <Cart/>}
//       <Switch>
//         <Route path=''></Route>
//       </Switch>
//       <Route path='/' Component={<Products products={productsArr} merch={merchArr}/>}/>
//       <Route path='/about' Component={<About/>}/>
//       <Route path='/home' Component={<Home/>}/>
//       <Route path='/contactus' Component={<ContactUs/>}/>
//       <Route path='/products/:productId' Component={<ProductDetail products={productsArr}/>}/>
//     </Layout>
//   )
// }



function App(){
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
        <Products products={productsArr} merch={merchArr}/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/contactus">
        <ContactUs/>
        </Route>
        <Route path="/products/:productId">
        <ProductDetail products={productsArr}/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;