import React from 'react'
import './Weather.css'

//pic
//****************************************** */
import SearchBar from '../assets/SearchBar.png'
import clear from '../assets/clear.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
//****************************************** */

function Weather() {
  return (
    <div className='weather'>
        <div className="searsh-bar">
            <input type="text" placeholder='Search' />
            <img src={SearchBar} alt="" />
        </div>
        
        <img src={clear} alt="" className='weather-state' />
        <p className='temperature'>16&deg;C</p>
        <p className='location'>london</p>

        <div className='weather-data'>
            <div className='col'>
                <img src={humidity} alt="" className='info'/>
                <div>
                    <p>91%</p>
                        <span>Humidity</span>
                </div>
            </div>

            <div className='col'>
                <img src={wind} alt="" className='info' />
                <div>
                    <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Weather