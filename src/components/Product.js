import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const {id} = useParams()
    const url = `http://localhost:3001/products/${id}`
    const {data: product, loading, error} = useFetch(url);

  return (
  <div className="product-container">
    {error && <p className="error-message">Ocorreu um erro!</p>}
    {loading && <p className="loading-message">Carregando...</p>}
    {product && (
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">R$ {product.price}</p>
        <Link to={`/products/${product.id}/info`} className="info-link">
          Mais informações
        </Link>
      </div>
    )}
  </div>
  );
};

export default Product;