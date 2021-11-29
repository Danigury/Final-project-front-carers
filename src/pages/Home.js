import { useEffect } from "react";
import useLocations from "../hooks/useLocations";

const Home = () => {
  const { locations, loadLocations } = useLocations();

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);
  return (
    <div>
      <button>Register</button>
    </div>
  );
};

export default Home;
