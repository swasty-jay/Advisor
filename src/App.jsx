import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
