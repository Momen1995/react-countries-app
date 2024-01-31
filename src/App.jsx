import { useEffect, useState } from 'react'
import './App.css'
import Country from './Components/Country'

function App() {
  const [countries,setCountries] = useState([])

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <>
      <h3 className='text-3xl text-center uppercase my-7'>React Rest Countries</h3>
      <div className='grid grid-cols-4 gap-8 '>
        {
          countries.map(country =><Country  country={country}></Country>)
        }
      </div>
    </>
  )
}

export default App
