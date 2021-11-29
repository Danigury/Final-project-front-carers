import { useEffect } from "react";
import useLocations from "../hooks/useLocations";

const Home = () => {
  const { locations, loadLocations } = useLocations();

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);
  return <div></div>;
};

export default Home;
