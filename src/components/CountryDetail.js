import React from "react"

const Country = ({country, onFaveSelect}) => {

    const handleFav = (event) => {
        onFaveSelect(country)
        
    }
    
    const pleaseBorders = function(){
        if("borders" in country){
            country.borders = country.borders.map(border => border + " | " )
        }
        
    }

    return (
        <>
        {    pleaseBorders()}

    <h1>{country.name.common}</h1>
    <ul>

        <li>Capital City: {country.capital}</li>
        <li>Population: {country.population}</li>
        <li><img src={country.flags.png}/></li>
        {country.borders ? <li>Borders: {country.borders}</li> : <li>Borders: fuck all</li>}
        <button onClick={handleFav} value={country}>Add to favourites</button>
    </ul>
    </>
    )
};



export default Country;