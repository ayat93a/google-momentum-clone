import React from 'react'
import {DateContainer } from '../DateStyles'


const Datetoday = () => {
    let Today =  new Date();
    let date = Today.getFullYear() + '/' + Today.getMonth() + '/' + Today.getDate()
    
  return (

    <DateContainer>
        <p>{date}</p>
        </DateContainer>
  )
}

export default Datetoday