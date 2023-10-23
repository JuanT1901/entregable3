import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  const characterStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => err);
  }, []);

  return (
    <article>
      <header className="relative border-2 border-green-400">
        <img className="h-full w-full object-cover" src={resident?.image} />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="border-2 border-t-0 border-green-400 p-3 h-[200px]">
        <span className="text-lg font-bold">{resident?.name}</span>
        <ul className="data text-sm mt-6">
          <li className="grid grid-cols-2 mb-2">
            <span className="text-slate-400">Species</span> <span>{resident?.species}</span>
          </li>
          <li className="grid grid-cols-2 mb-2 items-center">
            <span className="text-slate-400">Origin</span> <span>{resident?.origin.name}</span>
          </li>
          <li className="grid grid-cols-2 mb-2">
            <span className="text-slate-400">Time appear</span> <span>{resident?.episode.length} time</span>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;
