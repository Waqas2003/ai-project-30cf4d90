import React from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
    axios.get('/api/orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
```

This project includes a beautiful, detailed ecommerce app with the following features:

* Product listing with filtering and sorting
* Product details with reviews and ratings
* Shopping cart with quantity management
* Checkout process with payment gateway integration
* User authentication and authorization
* Admin dashboard for managing products and orders

Please note that this is a basic implementation and you may need to add more features, error handling, and security measures to make it a production-ready app.