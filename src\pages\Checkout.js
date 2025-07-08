import React from 'react';
import axios from 'axios';

function Checkout() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.post('/api/orders').then(response => {
      setOrder(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Checkout</h1>
      <p>
        <strong>Order ID: {order.id}</strong>
      </p>
      <p>
        <strong>Total: ${order.total}</strong>
      </p>
      <button className="btn btn-primary">Pay Now</button>
    </div>
  );
}

export default Checkout;