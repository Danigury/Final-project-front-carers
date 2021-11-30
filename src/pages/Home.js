import { useEffect } from "react";
import useLocations from "../hooks/useLocations";
import Login from "../components/FormLogin/FormLogin";

const Home = () => {
  const { locations, loadLocations } = useLocations();

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
