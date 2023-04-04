import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Contact, Loading, Portfolio, Pricing } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, [])

  return (
    <>
      {loading && <Loading />}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;