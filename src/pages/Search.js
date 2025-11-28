import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3001/products?" + searchParams;
    const { data: items, loading, error } = useFetch(url);
        
    return (
    <div className="search-container">
      <h1>Resultados disponíveis</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro!</p>}
      <ul className="products">
        {items && 
        items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;