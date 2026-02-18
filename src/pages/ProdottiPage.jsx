import axios from "axios";
import { useEffect, useState } from "react";

const productsApi = "https://fakestoreapi.com/products";

export default function ProdottiPage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get(productsApi).then((res) => setProductList(res.data));
  }, []);

  return (
    <section>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {productList.map((product) => (
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
        ))}
      </div>
    </section>
  );
}
