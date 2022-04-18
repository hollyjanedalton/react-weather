import "./App.css";
import Weather from "./Weather";
import WeatherForecastDay from "./WeatherForecastDay";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <WeatherForecastDay />
        <footer>
          This app was coded by Holly Dalton and is{" "}
          <a
            href="https://github.com/hollyjanedalton/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
