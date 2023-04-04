import "./current-weather.css";
import "animate.css";

//Current weather card with top and bottom elements for the main information and added details such as wind speed, humidity etc.
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather animate__animated animate__fadeIn">
      {/* Top part of the card with the main information */}
      <div className="top">
        <div>
          <p className="city">{data.name}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon animate__animated animate__rotateIn"
        />
      </div>
      {/* Bottom part containing a detailed view of other weather factors and precipitations */}
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-label">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-label">{data.wind.speed}km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-label">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-label">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
