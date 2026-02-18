import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProdottiPage from "./pages/ProdottiPage";
import ChiSiamoPage from "./pages/ChiSiamoPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/prodotti" Component={ProdottiPage}></Route>

            <Route path="/chisiamo" Component={ChiSiamoPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
