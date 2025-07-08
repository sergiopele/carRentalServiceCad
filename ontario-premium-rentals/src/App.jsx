import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VehicleList from "./pages/VehicleList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VehicleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;