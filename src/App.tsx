import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Designs from "./components/pages/Designs";
import Arts from "./components/pages/Arts";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import D1 from "./components/pages/D1";
import D2 from "./components/pages/D2";
import D3 from "./components/pages/D3";
import D4 from "./components/pages/D4";
import D5 from "./components/pages/D5";
import D6 from "./components/pages/D6";
import D7 from "./components/pages/D7";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/designs/icebae" element={<D1 />} />
        <Route path="/designs/kallu" element={<D2 />} />
        <Route path="/designs/hestia" element={<D3 />} />
        <Route path="/designs/fr" element={<D4 />} />
        <Route path="/designs/tkmce" element={<D5 />} />
        <Route path="/designs/others" element={<D6 />} />
        <Route path="/designs/northgate" element={<D7 />} />
      </Routes>
    </>
  );
}

export default App;
