import { useParams } from "react-router-dom";

export default function SingleProductPage() {
  const { id } = useParams();
  return <h1>prodotto</h1>;
}
