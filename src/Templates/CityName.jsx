import React from 'react'
import { useCityContext } from '../Contexts/CityContext'
function CityName() {
  const { city } = useCityContext();
  return (
    <div>
      <h1 className='fs-60px text-light text-center'>{city && city.toUpperCase()}</h1>
    </div>
  )
}

export default CityName