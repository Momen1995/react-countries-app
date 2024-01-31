import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, maps, population, postalCode, area, cca3 } = country;

  const [visit, setVisit] = useState(false);

  const handleVisit = () => {
    setVisit(!visit);
  };
  return (
    <div
      className={`${
        visit ? "bg-red-400" : "bg-slate-200"
      } p-4 mt-5 rounded space-y-1`}
    >
      <img src={flags.png} alt={flags.alt} className="w-58 h-48" />
      <h3>Name: {name.common}</h3>
      <p>Official: {name.official}</p>
      <div>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Code: {cca3}</p>
        <button onClick={handleVisit} className="bg-teal-600 px-4 py-2 rounded">
          {visit ? "Visit" : "Going"}
        </button>
        {visit ? "visited" : "Not visited"}
        <button
          className="bg-yellow-600 px-4 py-2 rounded mt-5"
          onClick={()=>handleVisitedCountries(country)}
        >
          Mark as visited
        </button>
      </div>
    </div>
  );
};

export default Country;