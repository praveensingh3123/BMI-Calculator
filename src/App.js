import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const[weight, setWeight] = useState(70);
  const[height, setHeight] = useState(100);

  function onWeightChange(event){
    setWeight(event.target.value)
  }
  function onHeightChange(event){
    setHeight(event.target.value)
  }

  const output = useMemo(() => {
    const calculatedHeight = height/100;

    return(weight/(calculatedHeight*calculatedHeight)).toFixed(1)
  }, [weight, height]);
  
  return (
    <main>
      <h1> BMI Calculator</h1>
      <div className='input-section'>
        <p className='input-weight'>Weight: {weight} Kg</p>
        <input className='input-slider'
        type='range'
        min='40'
        max='200'
        onChange={onWeightChange}>
        </input>
        <p className='input-weight'>Height: {height} cms</p>
        <input className='input-slider'
        type='range'
        min='70'
        max='180'
        onChange={onHeightChange}>
        </input>
      </div>
      <div className='outpu-section'>
        <p className='output-value'>Your BMI is: </p>
        <p className='output'>{output} </p>
      </div>
    </main>
    
  )
}

export default App
