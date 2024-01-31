import { useEffect, useState } from 'react'
import './App.css'
import Country from './Components/Country'
import { list } from 'postcss'

function App() {
  const [countries,setCountries] = useState([])
  const [visitedCountries,setVisitedCountries] = useState([])

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  const handleVisitedCountries = (country) =>{
    const newVisitedCountry = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountry)
  }
  return (
    <>
      <h3 className='text-3xl text-center uppercase my-7'>React Rest Countries</h3>
      <h2>Country Length: {countries.length}</h2>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul className="list-decimal pl-5">
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className='grid grid-cols-4 gap-4 '>
        {
          countries.map(country =><Country key={country.cca3}  country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
        }
      </div>
    </>
  )
}

export default App
