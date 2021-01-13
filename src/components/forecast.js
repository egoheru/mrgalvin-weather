import React from 'react'

const Forecast = (props) =>{
    return (
        <div>
            {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature} (oC)</p>}
            {props.humidity && <p>Humidity: {props.humidity} (%)</p>}
            {props.pressure && <p> Pressure: {props.pressure} (mb)</p>}
            {props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" style={{height: '100px'}}/> }
            {props.description && <p>Weather Condition in this Region is: "{props.description}"</p>}
            {props.error && <p>{props.error}</p>}
            <p className="statis">veiw statistics</p>
        </div>
    )
}

export default Forecast;
