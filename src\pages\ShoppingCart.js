import React, { useState } from 'react';
import axios from 'axios';

function ShoppingCart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('/api/cart').then(response => {
      setCart(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cart).map(productId => (
            <tr key={productId}>
              <td>{cart[productId].name}</td>
              <td>{cart[productId].quantity}</td>
              <td>${cart[productId].price}</td>
              <td>${cart[productId].subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <strong>Total: ${Object.values(cart).reduce((acc, product) => acc + product.subtotal, 0)}</strong>
      </p>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
}

export default ShoppingCart;