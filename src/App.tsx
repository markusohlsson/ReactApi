import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Nav } from './components/Nav/Nav';
import { Products } from './components/Products/Products';
import { cartItem } from './models/cartItem';
import { IProductSmall } from './models/IProductSmall';

function App() {
  const [cart,setCart] = useState<cartItem[]>([]);

const addProductToCart = (product:IProductSmall) =>{
  setCart([...cart, new cartItem(product,1)]);
};
  
  return (
    <div className="App">
      <header>
        <Nav cart={cart}></Nav>
      </header>
      <main>
        <Products addProductToCart={addProductToCart}></Products>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
