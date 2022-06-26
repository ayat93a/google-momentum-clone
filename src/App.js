import React from 'react'
import Time from './Components/Time'
import Weather from './Components/Weather'
import Datetoday from './Components/Datetoday'
import Qoute from './Components/Qoute'

const App = () => {
  return (
    <div>
      <Weather />
      <Time />
      <Datetoday />
      <Qoute />
    </div>
  )
}

export default App