import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import "./App.scss";
import { useSelector } from "react-redux";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LocationDetailPage from "./pages/LocationDetailPage/LocationDetailPage";
import CreatePage from "./pages/CreatePage/CreatePage";

function App() {
  const user = useSelector(({ user }) => user);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/location" element={<LocationsPage user={user} />} />
        <Route
          exact
          path="/location/:id"
          element={<LocationDetailPage user={user} />}
        />
        <Route
          exact
          path="/location/create"
          element={<CreatePage user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
