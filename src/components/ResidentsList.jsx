import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentsList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section>
      <section className={`grid ${
        residents.length <= 1
        ? "grid-cols-1 max-w-[400px]"
        : "grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))]"
        } justify-center gap-6 max-w-[800px] mx-auto py-10}`}>
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>

      <ul className="text-lg flex gap-4 justify-center flex-wrap pb-10">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`text-black p-2 mt-5 ${
                page === currentPage 
                ? "bg-green-400"
                : "bg-white"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentsList;
