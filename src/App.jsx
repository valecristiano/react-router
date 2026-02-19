import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProdottiPage from "./pages/ProdottiPage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import SingleProductPage from "./pages/SingleProductPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/chisiamo" Component={ChiSiamoPage}></Route>
            <Route path="/prodotti" Component={ProdottiPage}></Route>
            <Route path="/prodotti/:id" Component={SingleProductPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
