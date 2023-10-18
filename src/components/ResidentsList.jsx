import ResidentCard from "./ResidentCard";

const ResidentsList = ({ residents }) => {
  console.log(residents);
  return (
    <section>
      {residents.map((resident) => (
        <ResidentCard key={resident} residentEndpoint={resident} />
      ))}
    </section>
  );
};
export default ResidentsList;
