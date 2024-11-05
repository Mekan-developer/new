import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Constants, Utils } from "./common";
import Wrapper from "./hoc/Wrapper";
import Footer from "./components/Footer";
import { WelcomePage, CatalogPage, ItemsPage } from "./pages";

function AppRoutes() {
  useEffect(function () {
    Utils.getCookie("m-mode") === "dark" &&
      document.body.classList.add("dark-mode");
  }, []);
  return (
    <Router>
      <Suspense fallback={<div> Something went wrong </div>}>
        <Wrapper>
          <Routes>
            <Route path={Constants._welcome} element={<WelcomePage />} />
            <Route path={Constants._catalog} element={<CatalogPage />} />
            <Route path={Constants._items} element={<ItemsPage />} />
            <Route path="*" element={<div>Not Found Page</div>} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Wrapper>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
