import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => err);
  }, []);

  return (
    <article>
      <header>
        <img src={resident.image} />
        <div>
          <div></div>
          <span>{resident.status}</span>
        </div>
      </header>
      <div>
        <h4>{resident.name}</h4>
        <ul>
          <li>Species: {resident.species}</li>
          <li>Origin: {resident.origin.name}</li>
          <li>Time appear: {resident.episode.length} time</li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;
