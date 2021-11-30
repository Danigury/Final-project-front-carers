import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LocationsPage from "./pages/Locations/LocationsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/locations" element={<LocationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
