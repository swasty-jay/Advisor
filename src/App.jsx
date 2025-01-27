import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
