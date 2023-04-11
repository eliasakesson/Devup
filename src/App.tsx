import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Contact, Loading, Portfolio, Pricing, Error404 } from "./pages";
import { Navbar, Footer } from "./components";
import { ScrollToTopOnRouteChange } from "./hooks";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, [])

  return (
    <>
      {/* {loading && <Loading />} */}
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;