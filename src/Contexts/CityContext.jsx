import { createContext, useContext, useState } from "react";
const CityContext = createContext();
const CityContextProvider = ({ children }) => {
    const [city, setCity] = useState("");
    const data = {
        city, setCity
    }
    return (
        <CityContext.Provider value={data}>
            {
                children
            }
        </CityContext.Provider>
    )
}
export default CityContextProvider;
export const useCityContext = () => useContext(CityContext);