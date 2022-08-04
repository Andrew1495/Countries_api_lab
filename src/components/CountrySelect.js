import React from 'react'
import Country from './CountryDetail'


const CountrySelect = ({countries, onCountrySelect}) => {

  const handleSelect = (event) => {
    onCountrySelect(event.target.value)
}

const countryItems = countries.map((country, index) => {
    return  <option key={index} value={index}> {country.name.common}</option>
})


return(

    <select onChange={handleSelect}>
        {countryItems}
    </select>
)


}

export default CountrySelect