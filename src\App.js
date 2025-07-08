import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;