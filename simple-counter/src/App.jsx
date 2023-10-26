import {  useState, useEffect } from 'react'
import SimpleCounter from "./simple-counter"
import calculateSeconds from './lib/time';


function App() {

  const [counter, setCounter] = useState(0); 

  useEffect(()=>{

    const interval = setInterval(()=>{
      setCounter (counter => counter +1)
    },1000) // setinterval = ms

    return () => clearInterval(interval)
  },[counter]) 


  return (
    <>
      <SimpleCounter 
      
      hundredthousandsDigit = {calculateSeconds(counter,100000)}
      tenthousandsDigit = {calculateSeconds(counter,10000)}
      thousandsDigit = {calculateSeconds(counter,1000)}
      hundredsDigit = {calculateSeconds(counter,100)}
      tensDigit = {calculateSeconds(counter,10)}
      onesDigit = {calculateSeconds(counter,1)}

      />
    </>
  )
}

export default App


