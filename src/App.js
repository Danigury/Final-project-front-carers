import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/locations" element={<LocationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
