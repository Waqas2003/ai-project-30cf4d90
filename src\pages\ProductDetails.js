import React from 'react';
import axios from 'axios';

function ProductDetails({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${match.params.id}`).then(response => {
      setProduct(response.data);
    });
  }, [match.params.id]);

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>
        <strong>Price: ${product.price}</strong>
      </p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;