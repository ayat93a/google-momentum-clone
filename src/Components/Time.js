import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import {Welocm , TimeStamp , Greeting} from '../TimeStyles'

const Time = () => {
    let today = new Date
    let greeting = () => {
        if (today.getHours() >= 5 && today.getHours() <= 11){
            return 'Good Morning , Ayat.'
        } else if (today.getHours() >= 11 && today.getHours() <= 17){
            return 'Good Afternoon, Ayat.'
        }else if (today.getHours() >= 17 && today.getHours() <= 24){
            return 'Good Evening, Ayat.'
        } else {
            return 'What are you doing up at this hour ?'
        }
    }
  return (
    <Welocm>
        <TimeStamp><Moment format='LT'></Moment></TimeStamp>
        <Greeting>{greeting()}</Greeting>
    </Welocm>
  )
}

export default Time