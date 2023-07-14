import React from 'react'
import { UseWeatherContext } from '../Contexts/WeatherContext'
function Features() {
  const { wheater } = UseWeatherContext();
  const values = [
    [wheater.temp, "instant temperature"],
    [wheater.feels_like, "felt temperature"],
    [wheater.max_temp, "max temp"],
    [wheater.min_temp, "min temp"],
    [wheater.humidity, "humidity"],
    [wheater.wind_speed, "wind speed"]
  ];
  const fixIcons = (value) => {
    if (String(value[1]).includes("temp")) {
      return value[0] + "°C";
    }
    else if (value[1] === "humidity") {
      return "%" + value[0];
    }
    else if (value[1] === "wind speed") {
      return value[0] + "m/s";
    }
  }
  return (
    <div className='vh-100 w-100 bg-features d-flex justify-content-center flex-column'>
      <h1 className='text-center text-light'>Features</h1>
      <div className='container mt-3'>
        <ul className='row mt-3 p-0 mx-auto'>
          {wheater &&
            values.map((value, index) => (
              <li key={index} className='list-unstyled col-6  mb-3'>
                <div className='bg-light text-dark rounded-2 py-2 px-3 d-flex justify-content-center align-items-center flex-column'>
                  <span className='fw-bold fs-4'>{value[1][0].toUpperCase() + value[1].substring(1)}</span>
                  <p className='m-0 fw-semibold fs-5'>{
                    wheater.temp && fixIcons(value)
                  }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Features