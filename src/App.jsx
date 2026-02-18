import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProdottiPage from "./pages/ProdottiPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/Prodotti" Component={ProdottiPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
