const Country = ({country}) => {
  const { name, flags, maps, population, postalCode } = country;
  return (
    <div className="bg-slate-200 p-3 mt-5 rounded space-y-1">
      <img src={flags.png} alt={flags.alt} className="w-58 h-48" />
      <h3>Name: {name.common}</h3>
      <p>Official: {name.official}</p>
      <div>
        <p>Population: {population}</p>
      </div>
    </div>
  );
};

export default Country;