import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductScreen(props) {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const params = useParams();
  const { slug } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3001/api/products/slug/${slug}`);
        setProduct(result.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  },[slug]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {product.name}
      {product.price} 
      
    </div>
  );
}

export default ProductScreen;
