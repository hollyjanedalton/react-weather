import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="weather-description text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                  size={52}
                />
              </div>

              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
