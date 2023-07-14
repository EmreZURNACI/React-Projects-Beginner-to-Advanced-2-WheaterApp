import WeatherContextProvider from "./Contexts/WeatherContext";
import CityContextProvider from "./Contexts/CityContext";
import Features from "./Templates/Features";
import PictureBackground from "./Templates/PictureBackground";
function App() {
  return (
    <CityContextProvider>
      <WeatherContextProvider>
        <div className={"container-fluid p-0  background "}>
          <div className="row m-0">
            <div className="p-0 col-8">
              <PictureBackground />
            </div>
            <div className="p-0 col-4">
              <Features />
            </div>
          </div>
        </div>
      </WeatherContextProvider>
    </CityContextProvider >

  );
}

export default App;
