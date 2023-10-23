import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomNumber } from "./utils/random";
import Location from "./components/Location";
import ResidentsList from "./components/ResidentsList";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => err);
  }, []);

  return (
    <main className="px-4 min-h-screen text-white font-['Fira_Code'] pt-5">
      <Location location={location} setLocation={setLocation}/>
      <ResidentsList residents={location?.residents ?? []}/>
    </main>
  );
}

export default App;
