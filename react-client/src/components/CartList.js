import React, { useEffect, useState } from 'react';
import CartListSelected from './CartListElement';
import axios from 'axios';

const CartList = () => {
  const [total, setTotal] = useState(0);
  const [cartListData, setCartListData] = useState([]);
  const [checkout, setCheckout] = useState(true);

  useEffect (()=>{
    axios.get('http://Localhost:5000/api/products/getCartList')
    .then(({data})=>{setCartListData(data)})
    .catch(err=>console.log(err))
  },[cartListData]);
 

  useEffect(() => {
    const Total = cartListData.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    setTotal(Total);
  }, [cartListData]);





  

  return (
    <div className='cart-list'>
      <h1>My cart</h1>
      {checkout ? (
        cartListData.map((product, index) => {
          return <CartListSelected key={index} product={product} />;
        })
      ) :   (
      
        <h4>Thanks for buying from us</h4>
      )}

      <h3>{total} $</h3>
      <button onClick={() => {
        setCheckout(false);
        axios.delete("http://Localhost:5000/api/products/deleteAll") 

      }}>Checkout</button>
    </div>
  );
}

export default CartList;
