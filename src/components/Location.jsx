import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import "./Location.css"

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="w-[100%] max-w-[400px] m-auto">
      <div className="relative">
        <img className="animate-[spin_8s_linear_infinite]" src="/logo.png" alt="" />
        <div>
          <img className="absolute bottom-[70px] left-[10px]" src="/name.png" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex border-2 border-green-400 my-6">
          <input
            placeholder="Location Id (1-126)"
            name="idLocation"
            className="text-white w-[70%] bg-transparent text-center"
            type="number"
          />
          <button type="submit" className=" flex justify-center gap-2 items-center bg-green-700 w-[30%] border-l-2 border-green-400 hover:bg-white hover:text-green-700 transition-colors text-sm">
            Search <IconSearch size={15}/>
          </button>
        </form>
      <section className="text-green-300 border-2 p-5 border-green-400 w-[100%] mx-auto mb-3">
        <h3 className="text-center">¡Welcome to {location?.name}!</h3>
        <ul className="text-slate-400">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  );
};
export default Location;
