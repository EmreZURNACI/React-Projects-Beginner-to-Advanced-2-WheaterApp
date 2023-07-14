import React from 'react'
import CityInput from './CityInput'
import CityName from './CityName';
import { useCityContext } from '../Contexts/CityContext';
import { UseWeatherContext } from '../Contexts/WeatherContext';
function PictureBackground() {
  const { city } = useCityContext();
  const { wheater } = UseWeatherContext();
  const time = () => {
    var today = new Date();
    let hour = 0;
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    if (today.getHours() === 0) {
      hour = 12;
    }
    else {
      hour = today.getHours();
    }
    var time = hour + "." + today.getMinutes() + "." + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
  }
  const statu = (cloud_pct) => {
    if (-10 < cloud_pct && 20 >= cloud_pct) {
      return "Sunny";
    }
    else if (20 < cloud_pct && 40 >= cloud_pct) {
      return "Cloudy";
    }
    else if (40 < cloud_pct && 60 >= cloud_pct) {
      return "heavily Cloudy";
    }
    else if (60 < cloud_pct && 80 >= cloud_pct) {
      return "Rainly";
    }
    else if (80 < cloud_pct && 110 >= cloud_pct) {
      return "heavily raining";
    }
  }
  return (
    <>
      <div className='container row pt-5'>
        <div className="col-6 pe-5">
          <CityName />
          <div>
            <p className='span text-light text-center fs-4 pe-5'>{
              city && time()
            }</p>
          </div>
        </div>
        <div className="col-6">
          <CityInput />
        </div>
      </div>
      {
        wheater.temp &&
        <div className="container position-absolute top-50">
          <div className='row'>
            <div className="col-6 d-flex justify-content-center">
              <div className='bg-features w-75 rounded-pill p-3 d-flex justify-content-around align-items-center'>
                <p className='m-0 ps-2 fw-semibold text-white fs-1'>{wheater.temp}°C</p>
                <p className='m-0 ps-2 fw-semibold text-white fs-4'>{(statu(wheater.cloud_pct)).toUpperCase()}</p>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      }

    </>
  )
}

export default PictureBackground