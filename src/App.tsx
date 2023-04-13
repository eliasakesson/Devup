import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Contact, Loading, Portfolio, Pricing, Error404 } from "./pages";
import { Navbar, Footer } from "./components";
import { ScrollToTopOnRouteChange } from "./hooks";
import { HelmetProvider } from "react-helmet-async";

const App = () => {

  const [loadingVisible, setLoadingVisible] = useState(true);
  const [appVisible, setAppVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppVisible(true);
    }, 2000);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 3000);
  }, [])

  return (
    <HelmetProvider>
      {loadingVisible && <Loading />}
      {appVisible && 
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
      }
    </HelmetProvider>
  );
}

export default App;