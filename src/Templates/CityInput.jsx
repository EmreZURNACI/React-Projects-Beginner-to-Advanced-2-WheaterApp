import axios from 'axios'
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { useCityContext } from '../Contexts/CityContext';
import { UseWeatherContext } from '../Contexts/WeatherContext';
function CityInput() {
    const { setWheater } = UseWeatherContext();
    const { city, setCity } = useCityContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
            headers: { 'X-Api-Key': 'W7KpJGHf3EXjzuin3CfeKKse6dEXQjSBLiD9oJnH' },
            contentType: 'application/json'
            , error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        })
            .then((data) => setWheater((data.data)));
    }
    return (
        <formik>
            <div className="position-relative pt-3">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city"></label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter a City Name"
                        className='form-control w-100 fw-semibold'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />

                    <button type="submit" className='position-absolute pb-2 px-2 fs-5 p-0 btn-sm srcBtn btn end-0 top-50' disabled={!city} ><BsSearch></BsSearch></button>
                </form>
            </div>
        </formik>
    )
}

export default CityInput

