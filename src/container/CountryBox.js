import React, {useState, useEffect} from 'react'
import CountrySelect from '../components/CountrySelect';
import Country from '../components/CountryDetail';
import CountryList from '../components/CountryList';



const CountryBox = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [totalPop, setTotalPop] = useState("")
    const [favCountries, setFavCountries] = useState([]);

    useEffect(()=> {
      getCountries();
    }, []);

    useEffect(()=> {
      getTotalPop();
    }, [countries]);






    const getCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries => setCountries(countries))
    };

const getTotalPop = function(){
    
    let sum = 0
    for (let i = 0; i < countries.length; i++) {
        const population = parseInt(countries[i].population);
        sum += population
    };


    setTotalPop(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

    const onCountrySelect = (index) => {
        setSelectedCountry(countries[index]);
    }


    const onFaveSelect = (country)=> {
     let unSortedList = [...favCountries]
     unSortedList.push(country)
     const set = [...new Set(unSortedList)]
     let newList = Array.from(set)
     setFavCountries(newList)
    }


  return (
    <>
    <div>
        <h1>Countries</h1>
        <h2>Worlds Population: {totalPop}</h2>
        <CountrySelect countries={countries} onCountrySelect={onCountrySelect}>
        </CountrySelect>


        {selectedCountry ? <Country country={selectedCountry} onFaveSelect={onFaveSelect}></Country> : null}
    </div>

      <div>
      <h2>Fav Countries:</h2>
        {favCountries.length ? <CountryList favCountries={favCountries}></CountryList> : null}
      </div>

      </>
  )
}

export default CountryBox;