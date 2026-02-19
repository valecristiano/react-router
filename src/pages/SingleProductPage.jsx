import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const productsApi = "https://fakestoreapi.com/products";

export default function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  //stato dati del prodotto
  const [product, setProduct] = useState();
  //stato caricamento pagina
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productsApi}/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("errore", error.response);
        if (error?.response?.status === 404) navigate("/prodotti");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading</h2>;

  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        <div key={product.id} className="col">
          <div className="card-wrapper card h-100">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price: {product.price}</li>
              <li className="list-group-item">Category: {product.category}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
