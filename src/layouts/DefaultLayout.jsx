import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}
