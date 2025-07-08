import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vehicle from "./pages/Vehicle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;