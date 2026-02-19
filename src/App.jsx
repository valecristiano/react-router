import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import SingleProductPage from "./pages/SingleProductPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/chisiamo" Component={AboutPage}></Route>
            <Route path="/prodotti" Component={ProductsPage}></Route>
            <Route path="/prodotti/:id" Component={SingleProductPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
