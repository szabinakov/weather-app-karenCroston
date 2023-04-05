import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;
  const formattedDate = new Date(date).toDateString();

  console.log(icon);

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
        <img src={iconData[icon]} alt="" />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onselect(date)}>
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;
