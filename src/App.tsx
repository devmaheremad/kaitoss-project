import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader, Navbar } from "./components";
import { About, Home, Service, Work } from "./pages";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Suspense>
  );
};

export default App;
