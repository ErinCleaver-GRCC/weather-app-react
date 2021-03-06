import React, {useContext} from 'react'
import { ConvertTempContext } from '../../App'
import { converToFahrenheit } from '../utilites/convertTemp'


const ForecastCard = ({id, day, min, max, condition ,icon}) => {
  
  // Used to covert tempture in multiple locations in the app.
  const [convertTemp, setConvertTemp] = useContext(ConvertTempContext)

  return (
    <div key="id" class="col-lg-2 col-md-3 col-sm-6 d-flex flex-column align-items-center weather_boarder daily">
        <p className="day">{day}</p>

            
            <p className="day_temp">{convertTemp ? (<>
              <span class="min">{converToFahrenheit(min)}</span>°/
              <span className="max">{converToFahrenheit(max)}</span>°
              <span className="convert">F</span>
            </>) : <>
            <span class="min">{min}</span>°/<span className="max">{max}</span>°<span className="convert">C</span>
            </> }</p>
            <p className="day_condition">{condition}</p>
        <img className="card weather_icons_background weather_icons day_icon" src={icon}/>
    </div>

  )
}

export default ForecastCard