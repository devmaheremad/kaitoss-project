import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader, Navbar } from "./components";
import { About, Home, Service, Work } from "./pages";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/kaitoss-project" element={<Home />} />
        <Route path="/kaitoss-project/about" element={<About />} />
        <Route path="/kaitoss-project/service" element={<Service />} />
        <Route path="/kaitoss-project/work" element={<Work />} />
      </Routes>
    </Suspense>
  );
};

export default App;
