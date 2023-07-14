import { createContext, useContext, useState } from "react";
const WeatherContext = createContext();
const WeatherContextProvider = ({ children }) => {
    const [wheater, setWheater] = useState({});
    const data = {
        wheater, setWheater
    }
    return (
        <WeatherContext.Provider value={data}>
            {
                children
            }
        </WeatherContext.Provider>
    )
}
export default WeatherContextProvider;
export const UseWeatherContext = () => useContext(WeatherContext);