import React from 'react'
import FavDetail from './FavDetail'
const CountryList = ({favCountries}) => {

    const countriesItems = favCountries.map((country, index) => {
        
        return <FavDetail country={country} key={index} value={index} />
    })
  return (
    <ul>
        {countriesItems}
    </ul>
  )
}

export default CountryList;