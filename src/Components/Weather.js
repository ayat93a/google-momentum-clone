import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import {WeatherContainer , Temp , City} from '../WeatherStyles'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Amman&units=metric&appid=3f7a19a401cee7b54978dc4d4bbe613c'
            
const Weather = () => {

    const[data , setData] = useState(null)

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])
    
    console.log(data)
    if(!data) return null

  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
        <City>Amman , Jordan</City>
    </WeatherContainer>
  )
}

export default Weather